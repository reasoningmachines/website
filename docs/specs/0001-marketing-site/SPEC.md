---
kit_metadata_version: 1
artifact: "spec"
workflow_version: 3
phase: "validate"
feature:
  id: "0001"
  slug: "marketing-site"
  dir: "0001-marketing-site"
---
# SPEC

## PURPOSE

Create a readable, playful local marketing preview for Reasoning Machines LLC that brings together Jameson's four named areas of work.

## CONTEXT

The project was created with installed Kit v3.0.50 using `kit init --output-only`. The repository is https://github.com/reasoningmachines/website. The owner authorized an initial README baseline on main, implementation push on a separate branch, and a ready-for-review PR, The owner subsequently authorized public repository visibility, merging this site PR, GitHub Pages publication on reasoningmachines.co, expected Kit/Mint tags/releases, and necessary Squarespace web DNS changes. Tracking issues, unrelated repositories, purchases, mail/security record changes, and email forwarding remain outside this scope. The README baseline is commit ebf5590791e81da50964421cea13c9598f33b035. Public GitHub organization pages verify Applied Symbolics and Limina Dev; detailed claims about Open Vital and Spectral7 are unverified.

## REQUIREMENTS

One responsive page: introduction, Applied Symbolics, Open Vital, Limina Dev, Spectral7, approach, and contact. Warm ivory, near-black, electric orange; editorial typography, generous space, and a bespoke geometric machine illustration. Semantic HTML, visible keyboard focus, reduced motion, and no horizontal overflow. No tracking, backend, invented contact address, customer claims, or legal subsidiary claims.

## ACCEPTED PLAN

Build dependency-free HTML, CSS, and a bounded cursor interaction. Keep unverified brand detail explicitly forthcoming. Use local Node scripts to build and serve only public assets. Validate generated output, browser layout, navigation, reduced motion, and local resource loading. Save desktop and mobile screenshots.

## DECISIONS

The explicit instruction overrides the generated default issue and worktree workflow. A later scope update authorizes pushing the implementation and opening a ready PR, The later publication scope includes merge, public visibility, GitHub Pages, Mint publication, and web DNS; it excludes tracking issues and mail changes. Preserve Kit's generated files. Leave contact delivery pending rather than invent an address. System fonts avoid third-party requests.

## DISCOVERIES

Kit init needed network access to verify the official Mint Action release. It completed successfully after a sandbox escalation. GitHub credentials verified as jamesonstone with network access, and the new repository was confirmed private.

## VALIDATION

`make help` and `make check` passed, including the build, JavaScript syntax, public asset allowlist, exact build fidelity, unique IDs, internal anchors, and Kit project contract. Chromium rendered the final desktop and mobile layouts; a visual refinement increased annotation size, retained mobile contact navigation, and improved the mobile contact headline. Browser checks reported no horizontal overflow at 320, 390, 768, and 1440 pixels, all nine links reachable by keyboard with a 3px outline, and skip-link focus reaching MAIN. Reduced motion reported transform none, transition 0s, and automatic scrolling. Ordinary pointer movement updated bounded eye offsets. Four local resource requests returned 200; browser console had no errors or warnings. Public external link destinations were inspected. Screenshots are retained locally under output/playwright/. Full assistive-technology and multi-browser certification were not performed. Hosted static-site CI passed on the initial PR head. Revalidate the updated publication head before merge. The tracked tree and all 45 reachable historical blobs were inspected before public visibility; no secrets, private data markers, or generated user filesystem paths were found.

## OUTCOME

The local site is complete and PR #1 contains its implementation plus an isolated build/deploy GitHub Pages workflow. The original Kit/Mint workflow remains unchanged. Publication and web DNS are authorized; live DNS, TLS, Pages, and Mint results require observation after merge. Screenshot Library upload was attempted using the supported prepared helper; it reported that Library prepare_uploads is unavailable, so local screenshots are retained and upload is incomplete. Contact destination and brand descriptions remain pending.

## REPOSITORY MEMORY

This spec records the accepted scope and provisional copy boundaries. Testing reference and README record verified local commands and copy boundaries. Constitution remains at its valid bootstrap state; no additional invariants were inferred.

## Site-family local review (2026-10-31)

A separate authorized local-only pass links the suite through the personal homepage directory. Use public organization profiles for Applied Symbolics, Limina Dev, and Spectral7; the latter is now verified at https://github.com/spectral7-ltd. Add Ambient OS and OpenCarrier as product links under Applied Symbolics. Normalize OpenVital to the approved single-word name and describe its healthcare AI focus, with its separate website forthcoming. No OpenVital URL, product launch, medical claim, contact destination, DNS, or publication is inferred. Cross-repository activation decisions are retained in the personal site's site-family program ledger.

The local family-link build, source validation, and Kit project checks passed. Browser review at 320, 390, 768, and 1440 pixels found no overflow and confirmed visible focus for the family links. The changes remain uncommitted in an isolated task worktree; publication remains outside this pass.

## Approved suite publication

Publication of the prepared five-site suite changes is approved. The canonical OpenVital destination is https://openvital.co/ and Limina’s site is https://limina-dev.github.io/. The suite PR can be prepared with these links, but merges wait for coordinator confirmation that Reasoning Machines and OpenVital serve their intended marketing pages. Keep Medproof in-development positioning and preserve Pages and Mint behavior. DNS changes and OpenVital source remain outside this lane.
