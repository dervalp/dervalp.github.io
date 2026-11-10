import { getCollection } from "astro:content";
import { siteData } from "../data/site";
import { sortedPosts } from "../utils/blog";
import { absolutePageUrl, absoluteUrl } from "../utils/url";

export const prerender = true;

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const site = import.meta.env.SITE ? new URL(import.meta.env.SITE) : undefined;

  if (!site) {
    return new Response("Missing site URL", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }

  const posts = sortedPosts(
    await getCollection("blog", ({ data }) => !data.draft)
  );
  const blogUrl = absolutePageUrl("/blog/", site);
  const feedUrl = absoluteUrl("/rss.xml", site);
  const latest = posts[0]?.data.updatedDate ?? posts[0]?.data.publishDate;

  const items = posts
    .map((post) => {
      const url = absolutePageUrl(`/blog/${post.slug}/`, site);
      const categories = [post.data.category, ...post.data.tags]
        .map((name) => `      <category>${escapeXml(name)}</category>`)
        .join("\n");

      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${post.data.publishDate.toUTCString()}</pubDate>
      <description>${escapeXml(post.data.excerpt)}</description>
${categories}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${siteData.seo.siteName} blog`)}</title>
    <link>${escapeXml(blogUrl)}</link>
    <description>${escapeXml("Articles on AI product leadership, platform strategy and enterprise software.")}</description>
    <language>en</language>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
${latest ? `    <lastBuildDate>${latest.toUTCString()}</lastBuildDate>\n` : ""}${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
}
