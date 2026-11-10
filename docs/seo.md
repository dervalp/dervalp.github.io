# Search visibility: checks and follow-up

The site is deployed at `https://dervalp.github.io/`, the root of the host, from the repository `dervalp/dervalp.github.io`. No custom domain is configured. Until November 2026 it lived at `https://dervalp.github.io/dervalp/`; the repository `dervalp/dervalp` now holds the GitHub profile README and redirect pages for those old URLs.

This file separates what the repository can prove from what can only be checked after deployment. Nothing here promises a ranking. Rankings for "Pierre Derval" are an external outcome and are measured after deployment.

## Repository checks

These inspect the generated site. Run them locally, because no pull-request workflow runs them.

```bash
npm ci
npm run build:pages   # builds for the GitHub Pages URL at the host root
npm run test:seo
```

They cover the sitemap's required routes, canonical and social URLs, duplicate social tags, distinct titles and descriptions, one H1 per marketing page, name and role in static HTML, the shared Person/WebSite/ProfilePage identity and draft exclusion.

To check a custom origin without changing the deployment:

```bash
CUSTOM_DOMAIN=pierre.example npm run build
SEO_SITE=https://pierre.example/ npm run test:seo
```

`npm run build` alone uses `https://example.com` because the GitHub variables are unset, so use `build:pages` before `test:seo`.

## Crawl policy

The project generates `https://dervalp.github.io/robots.txt`, which allows all crawlers and names the sitemap. Because the site is served from the host root, this file is the authoritative crawl policy.

Nothing in this repository shows that Google has been blocked.

## After deployment (needs Pierre's access)

Status of every item below: **not run**. They need the deployed site or a Google Search Console login.

1. Open `https://dervalp.github.io/robots.txt` and confirm it allows all crawlers and names the sitemap.
2. In Search Console, add the URL-prefix property `https://dervalp.github.io/`. The verification file in `public/` is served at the root, so it verifies as is.
3. Submit the sitemap `https://dervalp.github.io/sitemap.xml`.
4. Use URL Inspection on these pages, and request indexing if they are not indexed:
   - `https://dervalp.github.io/`
   - `https://dervalp.github.io/about/`
   - `https://dervalp.github.io/services/`
5. Validate the homepage and About page in Google's Rich Results Test.

## Branded-search baseline

Record this once on the first day of access, then again about 4 and 12 weeks later. Search Console data lags by a few days.

| Field | Baseline | 4 weeks | 12 weeks |
| --- | --- | --- | --- |
| Date recorded | | | |
| Query | `pierre derval` | `pierre derval` | `pierre derval` |
| Impressions (last 28 days) | | | |
| Clicks (last 28 days) | | | |
| Average position | | | |
| Homepage indexed (yes/no) | | | |
| About indexed (yes/no) | | | |
| Services indexed (yes/no) | | | |
| Google-selected canonical of the homepage | | | |
| Sitemap status and discovered URLs | | | |
