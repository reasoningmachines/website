# Testing Reference

## Local commands

- `make build`: copies the four public assets to `dist/`.
- `make check`: rebuilds, checks JavaScript syntax, validates asset allowlisting, build fidelity, unique IDs and internal anchors, then runs `kit check --project`.
- `make dev`: rebuilds and starts one loopback preview on http://127.0.0.1:4173.

No installation, credentials, backend, database, or production environment is needed. Build evidence and browser screenshots live under ignored `output/` and `.playwright-cli/`.

## Browser review

Use an isolated browser session. Inspect full-page desktop and mobile screenshots, including at 320, 390, 768, and 1440 pixels. Check horizontal overflow, tab order, visible focus, skip navigation, section anchors, external links, bounded cursor motion, and reduced motion. Confirm only local assets load and there are no browser errors. Browser evidence supplements document/syntax checks; it is not full assistive-technology certification.

## Automation

The site-check workflow runs build and source checks on PRs. Kit validation and rendered browser review were run locally; hosted Kit and browser checks are not configured. No production testing applies until a separately authorized deployment exists.
