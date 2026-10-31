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

The project was created with installed Kit v3.0.50 using `kit init --output-only`. The private repository is https://github.com/reasoningmachines/website. The owner authorized an initial README baseline on main, implementation push on a separate branch, and a ready-for-review PR, while excluding issues, merge, deployment, and DNS/email changes. The README baseline is commit ebf5590791e81da50964421cea13c9598f33b035. Public GitHub organization pages verify Applied Symbolics and Limina Dev; detailed claims about Open Vital and Spectral7 are unverified.

## REQUIREMENTS

One responsive page: introduction, Applied Symbolics, Open Vital, Limina Dev, Spectral7, approach, and contact. Warm ivory, near-black, electric orange; editorial typography, generous space, and a bespoke geometric machine illustration. Semantic HTML, visible keyboard focus, reduced motion, and no horizontal overflow. No tracking, backend, invented contact address, customer claims, or legal subsidiary claims.

## ACCEPTED PLAN

Build dependency-free HTML, CSS, and a bounded cursor interaction. Keep unverified brand detail explicitly forthcoming. Use local Node scripts to build and serve only public assets. Validate generated output, browser layout, navigation, reduced motion, and local resource loading. Save desktop and mobile screenshots.

## DECISIONS

The explicit instruction overrides the generated default issue and worktree workflow. A later scope update authorizes pushing the implementation and opening a ready PR, but no tracking issues, merge, publication, DNS, or email changes. Preserve Kit's generated files. Leave contact delivery pending rather than invent an address. System fonts avoid third-party requests.

## DISCOVERIES

Kit init needed network access to verify the official Mint Action release. It completed successfully after a sandbox escalation. GitHub credentials verified as jamesonstone with network access, and the new repository was confirmed private.

## VALIDATION

`make help` and `make check` passed, including the build, JavaScript syntax, public asset allowlist, exact build fidelity, unique IDs, internal anchors, and Kit project contract. Chromium rendered the final desktop and mobile layouts; a visual refinement increased annotation size, retained mobile contact navigation, and improved the mobile contact headline. Browser checks reported no horizontal overflow at 320, 390, 768, and 1440 pixels, all nine links reachable by keyboard with a 3px outline, and skip-link focus reaching MAIN. Reduced motion reported transform none, transition 0s, and automatic scrolling. Ordinary pointer movement updated bounded eye offsets. Four local resource requests returned 200; browser console had no errors or warnings. Public external link destinations were inspected. Screenshots are retained locally under output/playwright/. Full assistive-technology and multi-browser certification were not performed. Hosted CI must be verified against the implementation PR head after push; it is not represented as passing by this local validation record.

## OUTCOME

The local preview is complete and the private repository exists. The initial README baseline is on main under explicit owner approval. The implementation is prepared on marketing-site-preview for a ready-for-review PR; merge and deployment remain outside the authorized scope. Screenshot Library upload was attempted using the supported prepared helper; it reported that Library prepare_uploads is unavailable, so local screenshots are retained and upload is incomplete. Contact destination and brand descriptions remain pending.

## REPOSITORY MEMORY

This spec records the accepted scope and provisional copy boundaries. Testing reference and README record verified local commands and copy boundaries. Constitution remains at its valid bootstrap state; no additional invariants were inferred.
