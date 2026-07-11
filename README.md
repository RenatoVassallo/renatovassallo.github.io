# renatovassallo.github.io

Source for the live site at **https://renatovassallo.github.io/**. A static site built with Hugo (extended); the theme is bespoke (in `layouts/` and `assets/`), with no external theme dependency.

## Branches and workflow

Work on **`develop`**, then publish by merging into **`main`**. Pushing `main` deploys the live site through GitHub Actions.

```sh
git checkout develop
# make changes, then preview locally:  hugo server   (http://localhost:1313)
git add -A && git commit -m "Describe the change"
git push origin develop        # builds a downloadable preview (repo → Actions tab)

git checkout main && git merge develop && git push origin main   # deploys to Pages
git checkout develop           # keep working on develop
```

The live site updates about a minute after the `main` deploy finishes. `public/` and `resources/` are generated and stay out of git.

## Where to make changes

- **A paper** → one file in `content/research/` (see Tricky bits)
- **A software project** → one file in `content/software/`
- **A course** → a folder `content/teaching/<slug>/index.md`
- **A blog post** → one file in `content/posts/`
- **Home "What I'm up to"** → `data/updates.yaml`
- **Affiliation logos** → `data/affiliations.yaml` (logos in `static/images/logos/`)
- **Bio / About page** → `content/about/index.md`
- **Menu, social links, analytics** → `hugo.toml`
- **Images and PDFs** → `static/images/`, `static/pdf/`

## Tricky bits

- **Papers**: one file per paper in `content/research/`. Set `date: YYYY-MM-DD` (the list sorts by it, newest first, and shows the month) and `pubtype: working_paper` or `publication`. Copy an existing file as a template.
- **Updating the CV**: add the PDF to `static/pdf/cv/`, then point to it in **two** places, `cvURL` in `hugo.toml` and `cv_pdf` in `content/about/index.md`.
- **Code blocks**: fenced code (```python and friends) is highlighted automatically in a VS Code "Dark Modern" theme. Add `math: true` to a post's front matter to enable equations.
- **Bilingual posts**: wrap the two versions in shortcodes.

  ```md
  {{< language-toggle default="en" label="Read in / Leer en" >}}
  {{< lang code="en" active="true" >}} … English … {{< /lang >}}
  {{< lang code="es" >}} … Español … {{< /lang >}}
  ```

## Preview

```sh
hugo server        # live local preview at http://localhost:1313
```
