---
prd: 29
feature-pr: 30
merge-sha: d2453b6
runs: [merge]
model: anthropic/claude-opus-5.5
rules: 1
judge: 1
---

# Retro — PRD 29, Executive-builder website refresh and name-search discoverability

Only one finding was recorded for this delivery: the first slice changed many files outside its planned territory and off the plan's shared ground. The spill covered new shared components, a global stylesheet, logo and image assets, the package manifest, the SEO notes and a new test file. These are the files a site-wide refresh with SEO validation would naturally need. The plan did not assign them to any slice or to shared ground. No failed checks or rewrites were recorded, so the drift came from how the plan divided the work, not from faulty output.

## Findings

### F1 · First slice spilled into shared components, styles, assets and tooling — `territory:s1` · [#48](https://github.com/dervalp/dervalp.github.io/issues/48)

- **What happened:** Slice s1 changed 16 paths outside its territory and off the plan’s shared ground: `docs/seo.md`, `package.json`, `public/logos/omni-loop.svg`, `public/logos/vertuoza.svg`, `public/og-image.png`, `public/pierre-derval-logo-white.svg`, `public/pierre-derval-logo.svg`, `src/components/CapabilityCard.astro`, `src/components/ContactPanel.astro`, `src/components/CredibilityItem.astro`, `src/components/HeaderNav.astro`, `src/components/SectionHeading.astro`, `src/components/ThemeToggle.astro`, `src/components/TransformationCard.astro`, `src/styles/executive.css`, `tests/seo-output.test.mjs`.
- **Why it matters:** When a slice edits files that no slice owns, other slices can collide with it without warning. Review also loses the map of what each slice was meant to change. Here the spill included foundations every later page would build on: shared components such as `src/components/HeaderNav.astro`, the stylesheet `src/styles/executive.css`, `package.json` and the new `tests/seo-output.test.mjs`. That makes it a planning gap rather than a stray edit.
- **Proposed lesson:** When a PRD reworks the whole site, the plan should name the new shared components, global styles, public assets, package manifest and any new test files. It should either put them on shared ground or give them to one foundation slice that lands first.
- **Kept:** Neither the knowledge nor any earlier lesson covers how to plan territory for a site-wide refresh, and the lesson concerns delivery behaviour, not the site's look.
- **Evidence:** [#36](https://github.com/dervalp/dervalp.github.io/pull/36/files)

## Proposed lessons

- A site-wide refresh needs a foundation slice, or declared shared ground, that owns the new shared components, global styles, assets, manifest and test files before page slices begin. (F1)

## Timeline

- Feature PR [#30](https://github.com/dervalp/dervalp.github.io/pull/30): opened `2026-10-16T07:10:47Z`, ready `2026-11-09T15:47:14Z`, merged `2026-11-09T15:48:59Z`, 35078 minutes in all.
- 1 slices; waves: 4 planned, 1 as merged; median slice: 17290 minutes from its claim to its merge.

| slice | sub-PR | claimed | merged | minutes | wave, planned | wave, as merged |
| --- | --- | --- | --- | --- | --- | --- |
| s1 | [#36](https://github.com/dervalp/dervalp.github.io/pull/36) | `2026-10-28T15:32:57Z` | `2026-11-09T15:42:52Z` | 17290 | 1 | 1 |

## Decisions

- Decisions: no settled file at the merge, so no decision is counted.
- The feature PR merged without the override label `omni:outbox-go`.
- Territory: 1 merged sub-PR graded against the plan — 16 paths outside a slice’s territory, 7 more on shared ground.
- Friction: 0 slices stuck, 0 labelled `omni:needs-fix`, 0 claimed more than once.
- Review: 2 pull requests — 0 reviews, 0 review threads, 0 red-circle bot findings, 0 threads unresolved at the merge.

Findings: F1 · First slice spilled into shared components, styles, assets and tooling · [#48](https://github.com/dervalp/dervalp.github.io/issues/48)

## Churn

- 6 commits read across 1 merged pull request: 2248 lines added, 2211 in the final diff, 37 lines of churn.
- Left out as the loop's own delivery record: `.omni-loop/delivery/outbox/0029-executive-website-refresh/s1-01-cv-version-published.md`, `.omni-loop/delivery/outbox/0029-executive-website-refresh/s1-02-about-free-hour-offer-dropped.md`.

## Rules

Rules version 1; the thresholds this run used:

- A slow slice: more than 3 times the median time from claim to merge.
- A repeated red check: red on 2 or more commits, or in 2 or more slices; any red then green on one commit is flaky.
- A failing test: the same test failing in 2 or more runs.
- Churn: a line range rewritten in 3 or more commits; a file whose churn is at least 50% of its final added lines and at least 40 lines.
- After merge: the `bug` issues naming the PRD within 14 days of the merge.
- At most 5 issues per run, most severe first: bug, override, drift, repeated-red or flaky, failing-test, review, friction, territory, churn, slow-slice.
