# AGENTS.md

This repository is the canonical Hugo source for `https://renatovassallo.github.io/`.

## Repository Model

- Edit Hugo source files only. Do not edit generated HTML, XML, CSS bundles, or files in `public/`.
- The production branch is `main`.
- Use `develop` for website updates and validation builds.
- GitHub Actions builds the site from source. `develop` uploads a downloadable `hugo-site-develop` artifact; `main` deploys to GitHub Pages.
- PaperMod is vendored in `themes/PaperMod/`. Keep changes to the theme minimal and document any intentional local overrides.

## Common Tasks

- Edit pages in `content/`.
- Add images under `static/images/`.
- Add PDFs under `static/pdf/`.
- Update site-wide settings, menus, and analytics in `hugo.toml`.
- Run `hugo --minify --cleanDestinationDir --printPathWarnings --printI18nWarnings` before considering changes complete.

## Conventions

- Keep `public/`, `.hugo_build.lock`, and `.DS_Store` out of git.
- Google Analytics is configured through Hugo services in `hugo.toml`; do not paste analytics snippets into generated HTML.
- Preserve the production URL `https://renatovassallo.github.io/`.
- Prefer small, focused content/config changes over broad theme rewrites.
