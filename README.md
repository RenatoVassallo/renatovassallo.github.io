# Renato Vassallo Website

This repository contains the Hugo source for `https://renatovassallo.github.io/`.

## Branches

- `develop`: make and test website updates here. GitHub Actions builds the site and uploads a downloadable artifact named `hugo-site-develop`.
- `main`: production. Merging to `main` builds and deploys the site to GitHub Pages.

## Daily Workflow

Start each round of work from `develop`:

```sh
git checkout develop
git pull origin develop
```

Make your edits in the Hugo source only. Do not edit `public/`.

Useful source locations:

- Home page: `content/home/index.md`
- Research page: `content/research/index.md`
- Teaching page and course structure: `content/teaching/_index.md`
- Software page: `content/software/index.md`
- Posts: `content/posts/`
- Site-wide menu, buttons, theme options, analytics: `hugo.toml`
- Images: `static/images/`
- PDFs and course files: `static/pdf/`

## Local Preview

Install Hugo Extended, then start a local server:

```sh
hugo server
```

Open the local URL printed by Hugo, usually `http://localhost:1313/`.

If that port is already busy, use another one:

```sh
hugo server --port 1314
```

For a production-style build:

```sh
hugo --minify --cleanDestinationDir --printPathWarnings --printI18nWarnings
```

The generated site appears in `public/`. Do not commit `public/`.

## Home Affiliations Strip

The affiliations logo strip on the Home page is configured in `content/home/index.md` under:

- `affiliations_title`
- `affiliations`

Each item can use either:

- `logo` for a single image
- `logos` for a grouped row of images under one linked institution

Logos should live in `static/images/logos/`.

The visual size is controlled in `assets/css/extended/academic-layout.css`:

- desktop: `.affiliations-strip-item img`
- mobile: the same selector inside the `@media (max-width: 640px)` block

If you want bigger or smaller logos later, edit:

- `max-width`
- `max-height`

## Teaching Section

The Teaching page is driven by the front matter in `content/teaching/_index.md`.

Each course has:

- `title`
- `enabled`
- `institution`
- `term`
- `description`
- `detail_page` (optional)
- `sessions`

Each session can have:

- `title`
- `enabled`
- `description`
- `slides`
- `code`

Use `enabled: false` to hide a course or session without deleting it.

Example:

```yaml
courses:
  - title: "Applied Macroeconometrics - Lambda"
    enabled: true
    institution: "Lambda"
    term: "2026"
    description: "A hands-on course on macroeconometric tools."
    sessions:
      - title: "Session 1 - Introduction"
        enabled: true
        description: "Overview and motivation."
        slides: "/pdf/teaching/lambda/session_1_slides.pdf"
        code: "https://github.com/RenatoVassallo/course-repo"
```

Notes:

- `slides` can be a local file such as `/pdf/teaching/lambda/session_1.pdf`.
- Put local PDFs in `static/pdf/`.
- `code` can be a GitHub repository, notebook, or any external URL.
- Leave `slides` or `code` empty if you do not want the link to appear yet.
- `detail_page` can point to a dedicated course page such as `/teaching/forecasting_bse`.

### Dedicated Course Pages

For a shareable course page, create a folder in `content/teaching/` and place an `index.md` file inside it:

- a folder name that becomes the URL, for example `forecasting_bse/index.md` -> `/teaching/forecasting_bse/`
- `layout: "teaching-course"` in the front matter
- structured front matter such as `class_schedule`, `outline_blocks`, `materials`, and `assignment`

Then connect it from `content/teaching/_index.md` with:

```yaml
detail_page: "/teaching/forecasting_bse"
```

This makes the course title in `Teaching Material` clickable from the main Teaching page.

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
4. Commit and push to `develop`.
5. Merge to `main` when ready to publish.

## Commit to Develop

After editing and validating locally:

```sh
git status
git add <files-you-changed>
git commit -m "Describe the website update"
git push origin develop
```

This triggers the GitHub Actions preview build for `develop`.

## GitHub Actions Preview

After pushing to `develop`:

1. Open the repository on GitHub.
2. Go to the Actions tab.
3. Open the latest "Build and deploy Hugo site" run.
4. Download the `hugo-site-develop` artifact.
5. Unzip it and open `index.html` to inspect the built site.

## Production Deploy

Preferred flow:

1. Finish and validate the work on `develop`.
2. Push `develop`.
3. Merge `develop` into `main` with a pull request or a local git merge.
4. Push `main`.

Local command-line version:

```sh
git checkout main
git pull origin main
git merge develop
git push origin main
```

Then update your local `develop` again before the next round:

```sh
git checkout develop
git pull origin develop
```

The workflow on `main` builds and deploys the site through GitHub Pages.

In GitHub repository settings, Pages should be configured to use **GitHub Actions** as the source.

If the live site looks stale right after deployment, wait a minute and refresh the browser.

## Posts

To add a post, create a new Markdown file in `content/posts/` with front matter similar to the existing posts.

## Analytics

Google Analytics is configured in `hugo.toml` through Hugo services with measurement ID `G-LL0E6SK2D7`.
