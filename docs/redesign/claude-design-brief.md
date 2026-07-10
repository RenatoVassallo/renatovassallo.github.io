# Design Brief for Claude Design: Clean-Slate Redesign of renatovassallo.github.io

> Paste everything below the line into Claude Design. It is written to be self contained.
> The work is intentionally split into **two phases**: first you show me visual options, then you expand the one I pick into a full spec.

---

## 0. Your role, and how this task is run

You are **Claude Design**. I want a **clean-slate visual redesign** of my personal academic website: a new visual identity built from scratch, not a refresh of the current look. Your output will be handed to **Claude Code**, which implements it in an existing **Hugo** repository.

Two things govern everything you do:

- **Prioritize implementability over aesthetic language.** Every visual idea must resolve into a concrete decision: a token value, a measurement, a class name, a component structure, a state, or a rule. Turn each adjective ("modern", "editorial") into the specific type, color, and spacing choice that produces it.
- **The look is a blank page; the plumbing is not.** You may reinvent the entire visual language, layout, and components. You may **not** change the technical foundation described in section 2 (Hugo, static GitHub Pages hosting, Google Analytics, and the front-matter content model that keeps the site easy to update). Design a fresh skin and structure that lives comfortably on top of that foundation.

**This is a two-phase engagement. Do Phase 1 first and stop.**

- **Phase 1 (this response): show me options.** Render **three** distinct visual directions I can actually look at and compare (palettes, type specimens, and a few key components), and recommend one. See section 6 for exactly what to produce. I will then pick a direction, or mix elements across them.
- **Phase 2 (after I choose): the full spec.** Expand the chosen direction into the complete, implementation-ready specification (sections 7 and 8). Do not write Phase 2 until I have chosen.

---

## 1. Who I am (the identity the site must express)

I am a **PhD-track economist** in the International Doctorate in Economic Analysis (IDEA) program at Universitat Autònoma de Barcelona and the Barcelona School of Economics, and a researcher at the Institute for Economic Analysis (IAE-CSIC), working under the MOMENTUM program on applying AI to prediction and policy problems.

My work sits at the frontier of **economics, causal inference, machine learning, and AI**. The site represents someone who:

- publishes **academic research and working papers** (macroeconometrics, time series, text as data, forecasting, early-warning systems for institutions such as the IMF, UNHCR, and the German Foreign Office);
- produces **software, code, and reproducible research pipelines** (open-source Python packages such as MacroPy and FewShotX);
- writes **blog posts and technical tutorials** that explain hard methods clearly and visually (Bayesian VARs, turning text into data);
- **teaches** courses in NLP, econometrics, forecasting, and applied machine learning;
- wants a **serious academic profile that is not dry, generic, or template-looking**, and that signals real technical and computational credibility.

Audiences, in priority order: academic peers and hiring/tenure committees; collaborators at research institutions and international organizations; students in my courses; practitioners who use my software and read my tutorials.

**The feeling I am after:** modern, professional, personal, and unmistakably serious, in a way that is **classic enough to age well over many years** (I do not want a trendy look that dates in two). Formal enough for an economics faculty profile; technical enough to show I build real software; distinctive enough that it does not look like every other academic homepage. It should carry **a few tasteful dynamic/interactive elements**, not be a flat static brochure, while never sacrificing that timeless, formal feel.

---

## 2. Non-negotiable constraints (must survive the redesign)

These are fixed. Design the new look and structure to fit them.

1. **Static site generator: Hugo (extended), version 0.147.9.** Everything renders to static HTML/CSS/JS. No server, no database, no runtime data fetching. Hosting is **GitHub Pages** via **GitHub Actions** (a `develop` branch builds a preview artifact; `main` builds and deploys). Production URL stays `https://renatovassallo.github.io/`. Do not propose anything that needs a backend or an external build service beyond Hugo.
2. **Content must stay effortless to author.** Today, Research, Software, and Teaching pages are **YAML front matter rendered by templates**, and posts are Markdown. Adding a paper, a project, a course, or a post is a small edit to a data file, not hand-written HTML. **This property must be preserved or improved.** Every content type in your design must be authorable through documented front matter or Markdown, with a clear schema. If you add a component, define the front matter fields that feed it.
3. **Google Analytics must keep working.** The site uses GA4 (measurement ID `G-LL0E6SK2D7`), currently wired through Hugo's analytics service. I rely on it to track visits and stats. The redesign must retain GA4 (via Hugo's built-in analytics partial or an equivalent lightweight, privacy-reasonable inclusion). Do not drop it.
4. **Timeless and low-maintenance.** Favor durable, boring-in-a-good-way technology: system-friendly or well-established web fonts, vanilla JS or one small stable library rather than a heavy framework, and no dependency that will need constant upkeep. The site should look current in five years and still build with a single Hugo command.
5. **Accessibility and performance are requirements:** WCAG AA text contrast, visible keyboard focus states, keyboard-navigable menu, respects `prefers-reduced-motion`, no layout shift from fonts or images, fast first paint, and content that is fully readable and crawlable without JavaScript (JS enhances, never gates, content).
6. **Preserve these existing capabilities** even though the theme is being replaced (see section 3): KaTeX math rendering, syntax-highlighted code blocks with a copy button, client-side post search, RSS and sitemap, and the affiliations logo strip. List them in your spec so Claude Code re-implements them in the new theme.

---

## 3. The architecture decision (already made; design for it)

I have decided the technical shape so you can design against it. Do not relitigate it; design within it.

- **Keep Hugo, the GitHub Pages pipeline, and the front-matter content model.** These are what make the site durable and easy to update.
- **Remove the current PaperMod theme entirely and build a small bespoke theme from scratch.** The existing site is heavily customized PaperMod, and that inheritance is the main source of visual incoherence. The clean-slate look will be a **new, self-owned layout and CSS layer** (new `baseof`, new page templates, new partials, one or a few new stylesheets, minimal new JS), with no dependency on PaperMod's markup or CSS.
- Because PaperMod is going away, your spec must **explicitly account for the utilities it used to provide** so Claude Code rebuilds them cleanly: GA4 inclusion, KaTeX, code-copy, client-side search (a JSON index plus a small script), RSS, sitemap, anchored headings, post meta, breadcrumbs, table of contents, and a 404 page.
- **Net effect:** a genuinely fresh visual identity and component system, on top of an unchanged, reliable Hugo + GitHub Pages + front-matter foundation.

---

## 4. Clean-slate mandate, and anti-patterns to avoid

You are free to discard the current palette, type, layout, and components. What I want you to consciously avoid:

- **Do not reskin the old site.** Start the visual language from first principles for the identity in section 1.
- **Do not produce a generic academic template** (centered name, three gray links, a wall of text). Make it distinctive and owned.
- **Do not create an uneven site** where one page is lavish and the rest are plain. Every section must share one coherent system.
- **One link language, one accent, one spacing rhythm.** The current site has two link colors and per-component ad hoc margins; the new one must be systematic.
- **Do not let dynamism undermine formality.** Motion is subtle, purposeful, and reduced-motion-safe; nothing bouncy, flashy, or gimmicky.
- **Do not add a heavy JS framework or an icon-font library.** Inline SVG for icons and illustration; vanilla JS or one tiny, stable library for interactivity.

---

## 5. Reference only: what exists today (you may discard all of it)

Provided so you understand the content and current structure. **Treat the current styling as reference, not as a constraint.**

- **Type today:** Noto Serif (headings) + Inter (body); light heading weights. You may keep, replace, or extend this pairing (a monospace face for code and technical labels is encouraged given the software identity).
- **Color today:** near-black teal ink `#041920`, slate `#545f72`, a sienna accent `#7b4a32`, light gray backgrounds, a dark teal code block. You are not bound to any of these.
- **Layout today:** sticky blurred header; a two-column layout with a persistent left "profile sidebar" (avatar, name, a three-word bio, social links) reused on every section page; a content measure near 780px. The sidebar-on-every-page choice wastes space and is worth rethinking.
- **Current information architecture / nav:** Home, Research, Teaching, CV (a PDF), Software, Posts.
- **Current pages and their content:**
  - **Home:** intro prose; an **affiliations logo strip** (nine institution logos, currently grayscale); a hand-maintained **"Recent Updates"** list.
  - **Research:** "Working Papers" and "Publications", each a stack of cards (title, authors, meta line, links). About six working papers, one publication.
  - **Software:** "Projects" cards (title, one-line summary, description, links: Tutorial / GitHub / Download). Two packages (MacroPy, FewShotX).
  - **Teaching:** a "Recent Teaching Experience" list (Instructor and Teaching Assistance) plus "Teaching Material" (courses, each with sessions linking Slides/Code), plus a rich per-course **detail page** (hero with badges, a class-schedule card grid, an environment-setup section with copyable shell commands, a numbered course-materials list, and a highlighted assignment block).
  - **Posts:** a card list plus standard single-post pages (math, tags, code copy, share).
  - **CV:** a PDF only. **There is no HTML About or CV page** (a gap to fix).
- **Existing niceties to preserve** (re-implemented in the new theme): KaTeX, code copy, search, RSS, sitemap, GA4, affiliations strip.

Known problems the redesign should resolve: no clear visual identity; inconsistent typography, spacing, and formatting; uneven polish across sections; inefficient use of horizontal space; no About/CV page; the most valuable content (news/updates) is visually undistinguished.

---

## 6. PHASE 1 deliverable: show me options

Before any full spec, present **three distinct visual directions** so I can choose colors and styles with confidence. Render them as **visual mockups I can actually see** (not just described in prose). For **each of the three directions**, provide:

1. **A name and a one-sentence concept** (for example a "quiet institutional" route, a "modern technical" route, a "warm editorial" route). Make the three meaningfully different in feeling, not three shades of the same idea.
2. **A color palette as visible swatches**, with hex values and roles: ink/foreground, muted foreground, page background, one or two elevated surfaces, one deliberate accent (plus an optional secondary), border, and code background. If you propose a dark mode, show the parallel dark swatches. For the key text-on-background pairings, state the contrast ratio and confirm WCAG AA.
3. **A typography specimen**, rendered: the actual heading font and body font (named, with the exact Google Fonts or self-hosted plan), shown at display / h1 / h2 / body / small / code sizes, so I can read the pairing rather than imagine it. Note whether a monospace face is included.
4. **Two or three key components, rendered in that direction's style**, so the feel is concrete. At minimum: the **homepage hero/header**, a **publication card**, and a **software project card**. A fourth (a post card or the course hero) is welcome.
5. **The "dynamic signature" for that direction, in one line:** the one tasteful interactive/animated motif that would recur (for example a faint animated time-series line in the hero, a subtle reveal on scroll, an interactive tag filter), described so I understand the motion, with the reduced-motion fallback noted.

Then close Phase 1 with:

- **A recommendation:** which of the three best fits "modern, formal, technical, personal, and timeless" for a PhD economist, and the trade-offs of each.
- **A short menu of mix-and-match options** (for example "you could take direction B's palette with direction A's type scale"), since I may want to combine.

Keep Phase 1 focused on look and feel (color, type, a few components, the motion signature). Save exhaustive tokens, every component, and page-by-page specs for Phase 2. **Stop after Phase 1 and wait for my choice.**

---

## 7. PHASE 2 deliverable: the full, implementation-ready spec

After I choose a direction (possibly mixed), expand it into a complete specification Claude Code can build with minimal further decisions. Cover all fifteen areas below, plus the dynamic layer in section 8.

**1) Overall design identity.** The concept in one or two sentences, then 3 to 5 design principles phrased as checkable rules, the signature elements that make the site recognizably mine, and what to deliberately avoid.

**2) Typography and visual hierarchy.** Exact font families and rationale; the exact Google Fonts request (families, weights, styles) or self-hosting plan; whether a monospace face is used; a full **type scale** as tokens (display, h1 to h4, body-large, body, small, caption/kicker, code) each with size (prefer `clamp()` for fluid headings), weight, line height, letter spacing, and margins; an unambiguous h1/h2/h3 hierarchy; body measure and paragraph rhythm.

**3) Color palette.** The complete palette as a **token table** (ink, muted foreground, background, a surface ramp, one accent plus optional secondary, borders, code backgrounds, and semantic states: link, link-hover, focus ring, success/live, placeholder/pending), with hex values, AA contrast confirmations, and the parallel dark set if dark mode ships. One sentence tying the accent to identity.

**4) Homepage structure.** The full homepage top to bottom as an ordered list of components, with layout for each at desktop and mobile: the hero treatment (does a portrait appear, and where), how the intro is framed, how the **affiliations strip** is presented, and a redesigned **news/updates** component (this is the most valuable, most-changing content, so give it a real design and keep it front-matter authorable). The homepage must route quickly to Research, Software, Teaching, and writing.

**5) Research / publications section.** Data-driven components extending the current schema (propose exact fields, for example `year`, `venue`, `type`, `authors`, `abstract`, `pdf`, `code`, `slides`, `bibtex`, `award`). Specify the **publication entry component** (layout, how authors/venue/year/badges sit, link affordances, hover/focus), how Working Papers vs Publications are distinguished, and whether optional grouping by year, tag filtering, and a BibTeX/citation affordance are worth it under the static constraint.

**6) Software / code section.** A showcase that signals real engineering. Extend the schema (for example `language`, `topics`, `status`, `docs`, `install`/`pip` command, `license`). Specify the **project card** (name, one-liner, description, language/topic chips, action links to GitHub/docs/tutorial/install, a copyable `pip install` snippet, hover/focus) and its responsive grid.

**7) Teaching section.** Unify everything under one language. Specify the **teaching-experience item**, the **course card** on the index, and the full **course detail page** system (hero, badges, class-schedule grid, environment-setup steps with copyable commands, numbered materials list, highlighted assignment block). Decide whether the current dark gradient assignment card becomes a reusable "feature/callout card" pattern or is restyled. Preserve all existing course front matter capabilities and note additions.

**8) Blog / tutorial section.** The Posts index (post-card: title, description, date, reading time, tags) and its grid, plus the single-post reading experience: reading measure, long-form technical typography, headings, blockquotes, lists, figures with captions, **code blocks** (style, a light-mode-friendly syntax theme, copy button, inline code), **math** (KaTeX display and inline spacing), tables, an optional table of contents, post meta, tag chips, and previous/next plus share.

**9) CV / About section.** A new **About/CV page**: structure for bio/intro, portrait, research interests, education and positions (a timeline or structured list), selected publications or a link to Research, and a prominent, well-styled **link to the CV PDF** (keep the PDF; wrap an HTML page around it). Make education/positions/interests front-matter driven so it stays current. Resolve duplication between this page, the homepage intro, and any profile block.

**10) Navigation and information architecture.** The final nav order and labels with justification: whether "CV" stays a raw PDF in the nav or becomes the About/CV page (PDF as a secondary action), whether "Posts" is renamed (for example "Writing" or "Blog"), and where Software and About sit. Specify the header (wordmark, active state, sticky behavior) and the **mobile nav** (replace the current horizontal-scroll strip with a proper menu if better), the footer, and a stable URL structure (avoid breaking existing links and SEO).

**11) Responsive behavior.** A **breakpoint token set**, and for every major component and page how it reflows at desktop, tablet, and mobile: header/nav, homepage, the single vs multi-column decision, card grids (columns per breakpoint), the course detail page, and code/math blocks (horizontal scroll inside their own container so the page body never scrolls sideways). Container max-widths and gutters per breakpoint. State a mobile-first or desktop-first stance and hold to it.

**12) Reusable components.** A **component catalog**: for each piece, its purpose, HTML structure (tags plus class names Claude Code can implement directly), variants, states (default/hover/focus/active/disabled), and the tokens it consumes. At minimum: buttons and link-buttons, the kicker/eyebrow label, chips/badges/tags, cards (base plus entry/project/course/post variants), the feature/callout card, the copyable command block, numbered section headers, the schedule/meta card, the portrait/profile block, social links, the affiliations strip, the news/update item, pagination, breadcrumbs, table of contents, and the footer.

**13) Style rules.** Global rules as tokens and do/don't statements: a single **spacing scale** (for example 4/8/12/16/24/32/48/64/96) used everywhere for consistent vertical rhythm; radius scale; border and shadow/elevation scale; the icon system (inline SVG, stroke width, sizing); the one site-wide link convention (resolving the current inconsistency); transition timing/easing; focus-ring style; image treatment (house style for portrait and logos); and z-index layers. Include a short "never do this" list.

**14) Interaction ideas.** See section 8 for the full dynamic layer; in this item, catalog the smaller interactions (card and link hover/focus, copy-to-clipboard feedback, sticky-header behavior, active-nav indication) with trigger, effect, duration/easing, and reduced-motion fallback for each.

**15) Modern + academic + technical + personal + timeless, at once.** Explain how the design achieves all of these simultaneously, pinning each to concrete decisions (which choices make it modern, which academic, which technical, which personal, which timeless), and flag and resolve any tension between them, especially between "dynamic" and "formal/timeless".

---

## 8. The dynamic, motion, and interactivity layer (design this explicitly)

I want the site to feel alive, within the static-hosting and timelessness constraints. Specify a coherent **motion and interaction system**, not scattered effects:

- **Motion principles and tokens:** standard durations and easings, a single "house" transition, and a hard rule that all of it is disabled or reduced under `prefers-reduced-motion`.
- **A signature dynamic element for the hero** suited to a quantitative economist: for example a subtle animated time-series line, a slowly drawing chart, or a faint network/graph motif. Specify the technique (inline SVG plus a few lines of vanilla JS, or CSS animation, or a small canvas), keep it lightweight, and give the reduced-motion static fallback.
- **Content interactivity that earns its place**, each specified with technique and a no-JS fallback: client-side **search** for posts (a JSON index plus a small script), **tag/topic filtering** on posts, publications, and software, optional **grouping/toggles** (for example collapse/expand a paper abstract or a BibTeX block), a **copy button** on code and install commands, an optional **light/dark toggle**, and smooth in-page anchor navigation with a scroll-aware active state.
- **Restraint rules:** motion must be subtle and formal, never block reading, never cause layout shift, and always be optional. Interactivity must degrade gracefully so the site is fully usable and crawlable without JavaScript.

Tie the signature dynamic element back to identity so it reads as intentional rather than decorative.

---

## 9. Output format contract for Phase 2

Structure the Phase 2 answer so Claude Code can implement top to bottom:

1. **Design concept** plus the 3 to 5 principles.
2. **Design tokens**, ready to emit as CSS custom properties under `:root`: color, type scale, spacing scale, radii, borders, shadows/elevation, breakpoints, transitions, motion, z-index. Present as a table of `name: value` pairs and instruct emission as CSS custom properties; include the dark set if proposed.
3. **Typography spec** (families, the exact Google Fonts request string, the full scale, element defaults).
4. **Component library** (item 12), each with structure, class names, variants, states, tokens.
5. **Page specs**, one per page (Home, Research, Software, Teaching index, Course detail, Posts index, Single post, About/CV, plus 404 and the shared section-header pattern), each as an ordered composition of components with layout, measurements, and responsive behavior.
6. **Global style rules, the motion/interaction system, and the dynamic signature** (items 13, 14, and section 8).
7. **Repo mapping / implementation notes for Claude Code**, naming the files each change touches. The repo currently uses these paths (the theme is being replaced, so new bespoke templates/partials will live at the top level, not under `themes/`):
   - global CSS: `assets/css/` (define the new stylesheet layout; the old `assets/css/extended/academic-layout.css` is being retired)
   - templates: `layouts/index.html`, `layouts/_default/{baseof,list,single,...}.html` and new page templates for research, software, teaching, teaching-course, about/cv
   - partials: `layouts/partials/` (header, footer, head, analytics, math, search, code-copy, and any profile/section-header partials you define)
   - shortcodes: `layouts/shortcodes/`
   - content and front matter: `content/{home,research,software,teaching,posts}/` plus a new about/cv content type
   - site config, menu, fonts, analytics hooks: `hugo.toml`
   For any new content type or front matter field, give the exact schema and a worked example. Mark each change as CSS-only, template, new-partial, or config.
8. **Migration notes:** what existing content maps where, what I must author or supply (About/CV front matter, publication years/venues, software topics), and what stays identical.
9. **Open decisions:** the default calls you made that I might override (final accent, whether Posts is renamed, whether dark mode ships, whether a portrait appears on the homepage, the hero motif).

Writing constraints: prefer tables and short code fragments over prose; give real values, not placeholders; when you must choose, choose and record it under "Open decisions" rather than listing options without a recommendation. Do not output finished CSS or full Go templates; the goal is a precise specification, and Claude Code writes the final code.

---

## 10. Handoff note (what happens after Phase 2)

Once you return the Phase 2 specification, I will give it to **Claude Code**, which will implement the new website in the **`redesign-2026`** branch of the existing `renatovassallo.github.io` Hugo repository. The production version on `main` will **not** be overwritten: the redesign is built and previewed on the branch, and merged only after I have reviewed, compared, and explicitly approved it. Design so the spec is safe to implement incrementally on a branch, reversible, and faithful to the Hugo + GitHub Pages + Google Analytics + front-matter foundation described above.
