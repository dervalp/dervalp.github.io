# Search visibility: checks and follow-up

The site is deployed at `https://dervalp.github.io/dervalp/`. No custom domain is configured.

This file separates what the repository can prove from what can only be checked after deployment. Nothing here promises a ranking. Rankings for "Pierre Derval" are an external outcome and are measured after deployment.

## Repository checks

These inspect the generated site. Run them locally, because no pull-request workflow runs them.

```bash
npm ci
npm run build:pages   # builds for the GitHub Pages URL and /dervalp/ base
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

The project generates `https://dervalp.github.io/dervalp/robots.txt`, which allows all crawlers and names the sitemap. **That file is not authoritative.** Crawlers only read `robots.txt` from the host root, `https://dervalp.github.io/robots.txt`, which this repository does not deploy. Changing this repository cannot change the host-root policy.

Nothing in this repository shows that Google has been blocked.

## After deployment (needs Pierre's access)

Status of every item below: **not run**. They need the deployed site or a Google Search Console login.

1. Open `https://dervalp.github.io/robots.txt` and record whether it exists and whether it restricts `/dervalp/`.
2. In Search Console, use the URL-prefix property `https://dervalp.github.io/dervalp/`.
3. Submit the sitemap `https://dervalp.github.io/dervalp/sitemap.xml`. Note that a sitemap for a URL-prefix property must sit within that prefix, which this one does.
4. Use URL Inspection on these pages, and request indexing if they are not indexed:
   - `https://dervalp.github.io/dervalp/`
   - `https://dervalp.github.io/dervalp/about/`
   - `https://dervalp.github.io/dervalp/services/`
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
