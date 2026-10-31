---
workflow_version: 3
phase: complete
---
# Studio copy

## Purpose and context

Replace provisional organization descriptions and generic approach copy while preserving the approved page structure, visual design, illustration, navigation, and motion. The owner requested wording grounded in the actual Limina Dev and Spectral7 organizations and in his published blog.

## Requirements and accepted plan

Describe Limina Dev as warehouse and logistics software, including the explicitly named mapr/sortr projects. Describe Spectral7 at the category level supported by the authorized repository inventory and README review: applied AI, logistics, communications, and knowledge systems. Do not publish private implementation, customer, infrastructure, product-specification, or operational details. Do not imply availability or commercial outcomes from repository presence.

Use only published writing for the studio's convictions. Keep copy brief and specific, with no new em dashes or criticism of named people or companies. Preserve all layout and asset code. Synchronize the personal homepage's organization summaries so the two sites agree. Deliver scoped ready PRs and publish under the approved content-update authority, preserving existing Pages, Mint, and project-updater behavior. DNS and credential settings are excluded.

## Decisions and source evidence

The private repository review informs only broad categories. The public source names mapr and sortr are explicitly authorized by the owner's request. No other private project names or private README excerpts are copied into public site content.

The following pages were verified as published under Jameson Stone's site identity, and the tracked post sources match their subjects. No drafts were used:

- [No Sacred Cows in AI](https://jamesonstone.io/blog/2026/10/17/no-sacred-cows-in-ai.html): methods and scaffolding must keep justifying their utility; assumptions remain revisable.
- [Team Joiners](https://jamesonstone.io/blog/2026/10/28/team-joiners.html): select tools for results rather than allegiance and change preferences with evidence.
- [Complexity Generators](https://jamesonstone.io/blog/2026/10/28/complexity-generators.html): account for integration, maintenance, and downstream obligations when judging progress.
- [Applied Philosophy](https://jamesonstone.io/blog/2026/10/25/applied-philosophy.html): confront ideas with what happens when implemented.

The approach keeps its three-part hierarchy: revisable assumptions, subtraction, and responsibility for outcomes. The page expresses these as operating convictions, not customer promises or claims about launched products.

## Validation and outcome

Local implementation is complete. `make check` passed, including build fidelity, asset allowlisting, JavaScript syntax, anchors/IDs and Kit. The personal synchronization passed its Jekyll build, site invariants, and all three existing Ruby suites (26 tests, 108 assertions). Browser checks passed at 320, 390, 768, and 1440 pixels, with visible keyboard focus and no page errors. A deliberate visual pass checked the longer organization descriptions and the three-part approach headline; no CSS or layout changes were needed. Navigation URLs, illustration, CSS, JavaScript, favicon, and blog post sources remain unchanged. No new em dashes were introduced. Hosted checks and post-merge deployed-source verification remain delivery evidence, separate from these local results.

## Repository memory

This spec retains the public source rationale and disclosure boundary. The existing marketing-site spec remains the initial design history; no redesign or blog edits belong to this change.
