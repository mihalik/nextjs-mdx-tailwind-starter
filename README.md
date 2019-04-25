# Next.js + MDX + Tailwind starter

### Overview

This has become my starting config for [Next.js](https://nextjs.org) and the starter for a bunch of my new projects. Overall it mostly just blends a bunch of Next.js examples into a cohesive, production-ready bundle with a focus on static deployments (I use Firebase Hosting for most of my deployments).

### What's included?

- 100% Lighthouse score except for PWA
- [Next.js](https://nextjs.org) with scripts for `npm run export`.
- [MDX](https://mdxjs.com) for a weird content/component hybrid that is actually super-awesome.
- [next-seo](https://github.com/garmeeh/next-seo) for setting all the meta tags in MDX.
- [Tailwind CSS](https://tailwindcss.com/) and all the plugins for Next.js to make it work. This includes [purgecss](https://www.purgecss.com) to only ship the CSS used.
- [eslint-config-unobtrusive](https://github.com/suchipi/eslint-config-unobtrusive) because I let prettier handle all my formatting but want to catch stupid coding mistakes.

### Usage

- Clone this repo
- `npm run dev`
  - Edit `/components/Base.js` or `/components/Base.css` to edit the base page styles
  - Edit `index.mdx` or add your own pages
- `npm run export` to get the static versions in the `out` directory

### Potential Concerns

- Does not currently include any CSS for the styling of the markdown. Probably something like [this](https://github.com/tailwindcss/docs/blob/master/source/_assets/less/markdown.less) should be included in `Base.css`.
- `purgecss` and `cssnano` only run on the production build and this could cause production-only problems if there are issues with those packages. But, since the css output is cached as the files are changed, new selectors are not picked up as files are edited in local dev mode. So the dev mode experience is broken if `purgecss` is enabled.
- MDX has a habit of wrapping all your lines with `<p>` tags. So, using some elements (`<h1>`, etc) inside MDX will cause React `validateDOMNesting` warnings. This is an MDX issue rather issue with this project.
- Need to move `mdPlugins` to `remarkPlugins` before MDX 2.0
