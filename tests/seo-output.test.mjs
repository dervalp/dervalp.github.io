// Checks the generated site, not the source. Build first (see docs/seo.md).
//   SEO_DIST  build output to inspect (default: dist)
//   SEO_SITE  deployed root the build was made for (default: the GitHub Pages URL)
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const dist = process.env.SEO_DIST ?? "dist";
const siteRoot = process.env.SEO_SITE ?? "https://dervalp.github.io/dervalp/";
const PERSON_ID = `${siteRoot}#person`;
const WEBSITE_ID = `${siteRoot}#website`;

const MARKETING_ROUTES = ["", "about/", "services/", "how-i-help/", "contact/"];
const TOOL_ROUTES = [
  "tools/",
  "tools/ai-project-scoper/",
  "tools/ai-business-case-scorecard/",
  "tools/ai-approach-finder/",
  "tools/ai-readiness-checklist/",
  "tools/data-readiness/",
];

const blogDir = "src/content/blog";
const articles = readdirSync(blogDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => ({
    slug: file.replace(/\.md$/, ""),
    draft: /^draft:\s*true\s*$/m.test(readFileSync(join(blogDir, file), "utf8")),
  }));
const articleRoute = (slug) => `blog/${slug}/`;
const publishedRoutes = articles.filter((a) => !a.draft).map((a) => articleRoute(a.slug));
const REQUIRED_ROUTES = [...MARKETING_ROUTES, ...TOOL_ROUTES, "blog/", ...publishedRoutes];

const html = (route) => readFileSync(join(dist, route, "index.html"), "utf8");
const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];
const tags = (page, pattern) => page.match(new RegExp(`<${pattern}[^>]*>`, "g")) ?? [];
const metas = (page, key) =>
  tags(page, "meta").filter((t) => attr(t, "property") === key || attr(t, "name") === key);
const metaContent = (page, key) => attr(metas(page, key)[0] ?? "", "content");
const canonical = (page) =>
  attr(tags(page, "link").find((t) => attr(t, "rel") === "canonical") ?? "", "href");
const title = (page) => page.match(/<title>([^<]*)<\/title>/)?.[1];
const jsonLd = (page) =>
  [...page.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].flatMap((m) =>
    JSON.parse(m[1]),
  );
const visibleText = (page) =>
  page
    .replace(/<(script|style|head)\b.*?<\/\1>/gs, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ");

const sitemap = () => readFileSync(join(dist, "sitemap.xml"), "utf8");
const sitemapUrls = () => [...sitemap().matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

test("sitemap lists every required route under the deployed root", () => {
  const urls = new Set(sitemapUrls());
  const missing = REQUIRED_ROUTES.filter((route) => !urls.has(`${siteRoot}${route}`));
  assert.deepEqual(missing, []);
});

test("sitemap has no placeholder origin, doubled base or draft article", () => {
  const { pathname } = new URL(siteRoot);
  const drafts = articles.filter((a) => a.draft).map((a) => `${siteRoot}${articleRoute(a.slug)}`);
  for (const url of sitemapUrls()) {
    assert.ok(url.startsWith(siteRoot), `${url} is outside ${siteRoot}`);
    assert.ok(!url.includes("example.com"), url);
    if (pathname !== "/") assert.ok(!url.includes(`${pathname}${pathname.slice(1)}`), url);
    assert.ok(!drafts.includes(url), `draft leaked: ${url}`);
  }
});

test("draft articles are not built as public pages", () => {
  for (const { slug, draft } of articles) {
    if (draft) assert.equal(existsSync(join(dist, articleRoute(slug), "index.html")), false, slug);
  }
});

test("every required page has a canonical and social URL for itself", () => {
  for (const route of REQUIRED_ROUTES) {
    const page = html(route);
    const expected = `${siteRoot}${route}`;
    assert.equal(canonical(page), expected, `canonical of /${route}`);
    assert.equal(metaContent(page, "og:url"), expected, `og:url of /${route}`);
  }
});

test("social tags appear once and use absolute URLs under the deployed root", () => {
  for (const route of REQUIRED_ROUTES) {
    const page = html(route);
    for (const key of ["og:type", "og:image", "twitter:image"]) {
      assert.equal(metas(page, key).length, 1, `${key} count on /${route}`);
    }
    for (const key of ["og:image", "twitter:image"]) {
      assert.ok(metaContent(page, key).startsWith(siteRoot), `${key} on /${route}`);
    }
  }
});

test("marketing pages have distinct titles and descriptions, and one h1", () => {
  const pages = MARKETING_ROUTES.map((route) => [route, html(route)]);
  assert.equal(new Set(pages.map(([, p]) => title(p))).size, pages.length, "titles must differ");
  assert.equal(
    new Set(pages.map(([, p]) => metaContent(p, "description"))).size,
    pages.length,
    "descriptions must differ",
  );
  for (const [route, page] of pages) {
    assert.ok(metaContent(page, "description")?.length > 0, `description of /${route}`);
    assert.equal(tags(page, "h1").length, 1, `h1 count on /${route}`);
  }
});

test("name and current role are readable in the HTML without JavaScript", () => {
  for (const route of ["", "about/"]) {
    const text = visibleText(html(route));
    for (const phrase of ["Pierre Derval", "Head of AI", "Vertuoza"]) {
      assert.ok(text.includes(phrase), `"${phrase}" missing from /${route}`);
    }
  }
});

test("structured data shares one Person identity with the current role", () => {
  const graph = jsonLd(html(""));
  const person = graph.find((node) => node["@type"] === "Person");
  const website = graph.find((node) => node["@type"] === "WebSite");

  assert.equal(person?.["@id"], PERSON_ID);
  assert.equal(person.name, "Pierre Derval");
  assert.match(person.jobTitle, /Head of AI/);
  assert.equal(person.worksFor?.name, "Vertuoza");
  assert.ok(person.image.startsWith(siteRoot), "portrait is under the deployed root");
  assert.ok(person.sameAs.length > 0, "profile links are present");
  assert.equal(website?.["@id"], WEBSITE_ID);
  assert.equal(website.publisher?.["@id"], PERSON_ID);
});

test("the About page is a ProfilePage about the same Person", () => {
  const profile = jsonLd(html("about/")).find((node) => node["@type"] === "ProfilePage");
  assert.equal(profile?.mainEntity?.["@id"], PERSON_ID);
  assert.equal(profile.url, `${siteRoot}about/`);
});

test("robots output points at the sitemap of this deployment", () => {
  const robots = readFileSync(join(dist, "robots.txt"), "utf8");
  assert.match(robots, new RegExp(`^Sitemap: ${siteRoot}sitemap\\.xml$`, "m"));
});
