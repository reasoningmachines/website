# Reasoning Machines

A dependency-free marketing site for Reasoning Machines LLC.
Initialized with the installed Kit v3.0.50 binary using `kit init --output-only`.

## Local preview

Requires Node.js 22 or later and Kit v3.0.50 for contract validation. No package installation is needed.

```sh
make build
make check
make dev
```

Open http://127.0.0.1:4173. The server binds to loopback and serves only four allowlisted assets from `dist/`. Stop it with Ctrl-C. Rebuild after source changes; refresh the browser.

## Scope

One static page with an introduction, four areas of work, approach, and contact. Local system fonts and an inline SVG keep it self-contained. Pointer motion is bounded inside the illustration and disabled for reduced motion and coarse pointers. No analytics, form service, cookies, API, or backend.

## Copy still to confirm

- OpenVital: healthcare AI positioning is approved; its website is https://openvital.co/.
- Limina Dev: approved description beyond the verified GitHub presence.
- Spectral7: GitHub organization is verified; detailed positioning and a separate website are still pending.
- Preferred contact address or other destination; the preview deliberately has none.
- Final approval of the proposed studio positioning and approach copy.

Applied Symbolics links to its public organization, Ambient OS, and OpenCarrier marketing sites. Limina Dev links to https://limina-dev.github.io/. No private implementation or customer information was used.

## Publication

The public repository publishes only the four built assets in `dist/` through the GitHub Pages workflow after a push to main. The build job has read-only repository access; a separate deployment job publishes the retained Pages artifact. The GitHub Pages custom domain is `reasoningmachines.co`.

The Kit-generated Mint workflow remains enabled and manages version tags and GitHub Releases on main. Website deployment is separate from release publication. Domain registration and DNS remain at Squarespace. Mail forwarding is not configured; no contact mailbox is implied.

For recovery, use GitHub Pages deployment history or roll forward a reviewed source correction. Website DNS changes must preserve existing mail/security records. The original Squarespace web defaults were four apex A records (198.185.159.144, 198.185.159.145, 198.49.23.144, 198.49.23.145), www CNAME ext-sq.squarespace.com, and an apex HTTPS record referring to those IPs. The feature spec retains the publication scope.

## Maintainers

Jameson Stone.
