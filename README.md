# Renato Vassallo Website

This repository contains the Hugo source for `https://renatovassallo.github.io/`.

## Branches

- `develop`: make and test website updates here. GitHub Actions builds the site and uploads a downloadable artifact named `hugo-site-develop`.
- `main`: production. Merging to `main` builds and deploys the site to GitHub Pages.

## Local Preview

Install Hugo Extended, then run:

```sh
hugo server
```

Open the local URL printed by Hugo, usually `http://localhost:1313/`.

For a production-style build:

```sh
hugo --minify --cleanDestinationDir --printPathWarnings --printI18nWarnings
```

The generated site appears in `public/`. Do not commit `public/`.

## Updating Content

- Home page: `content/home/index.md`
- Research page: `content/research/index.md`
- Software page: `content/software/index.md`
- Blog posts: `content/posts/`

To add a post, create a new Markdown file in `content/posts/` with front matter similar to the existing posts.

## Adding Files

- Images go in `static/images/`.
- Post images go in `static/images/posts/<post-name>/`.
- PDFs go in `static/pdf/`.

Files in `static/` are published at the site root. For example:

```text
static/pdf/cv_feb26.pdf -> https://renatovassallo.github.io/pdf/cv_feb26.pdf
```

## Updating the CV

1. Add the new PDF to `static/pdf/`.
2. Update the CV menu URL in `hugo.toml`.
3. Run a local production build.
4. Push to `develop` and check the GitHub Actions artifact.
5. Merge to `main` when ready to publish.

## GitHub Actions Preview

After pushing to `develop`:

1. Open the repository on GitHub.
2. Go to the Actions tab.
3. Open the latest "Build and deploy Hugo site" run.
4. Download the `hugo-site-develop` artifact.
5. Unzip it and open `index.html` to inspect the built site.

## Production Deploy

Merge `develop` into `main`. The workflow builds the site and deploys it through GitHub Pages.

In GitHub repository settings, Pages should be configured to use **GitHub Actions** as the source.

## Analytics

Google Analytics is configured in `hugo.toml` through Hugo services with measurement ID `G-LL0E6SK2D7`.
