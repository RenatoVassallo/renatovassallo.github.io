# Maintaining the site

Static site built with Hugo. Edit content, preview, commit, push. Pushing `main` deploys to GitHub Pages automatically.

## Preview locally

```sh
hugo server
```

Open the URL it prints (usually http://localhost:1313).

## Add or update content

Everything is Markdown or YAML. The easiest way is to copy an existing file and edit it.

| To change | Edit |
| --- | --- |
| Add a paper | New file `content/research/<slug>.md` (`pubtype: working_paper` or `publication`, `year`, `venue`, `authors`, `topics`, `links`) |
| Add a software project | New file `content/software/<slug>.md` (`summary`, `description`, `status`, `topics`, `links`) |
| Add a course | New folder `content/teaching/<slug>/index.md` (see `forecasting_bse` for the full structure: schedule, setup steps, sessions, assignment) |
| Add a blog post | New file `content/posts/<slug>.md` (`title`, `date`, `description`, `tags`; add `math: true` for equations) |
| Home "What I'm up to" | `data/updates.yaml` |
| Affiliation logos | `data/affiliations.yaml` (logo images in `static/images/logos/`) |
| Bio, interests, education, positions | `content/about/index.md` |
| CV file | Drop the new PDF in `static/pdf/cv/`, then update `cvURL` in `hugo.toml` |
| Menu, name, social links, analytics | `hugo.toml` |

Put images in `static/images/` and PDFs in `static/pdf/`. Anything under `static/` is served from the site root.

## Publish

Commit your change, merge into `main`, and push:

```sh
git add -A
git commit -m "Describe the change"
git checkout main
git merge <your-branch>      # or edit directly on main and skip this
git push origin main
```

Pushing `main` triggers the GitHub Actions build and deploys to https://renatovassallo.github.io/. Give it about a minute, then refresh.

Optional: push to `develop` first to get a downloadable preview build (`hugo-site-develop` artifact under the repo's Actions tab) without touching production.
