# jtu1008.github.io

Personal academic website of Jingxuan Tu, built with [Astro](https://astro.build).
Migrated from the original Jekyll (minimal-mistakes) site.

## Develop

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Project structure

```
public/assets/        images + CV (served as-is)
src/components/        BaseHead, Masthead, AuthorProfile, Footer
src/layouts/          PageLayout — two-column academic shell
src/pages/            Markdown pages (home, about, research, pub, service, …)
src/data/site.ts      site/author config + navigation
src/styles/global.css Tailwind v4 + minimal-mistakes-ish theme
```

To edit content, change the Markdown files in `src/pages/`. To change the
name/bio/nav, edit `src/data/site.ts`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. **One-time setup:** in the repo's
**Settings → Pages**, set **Source = GitHub Actions**.
