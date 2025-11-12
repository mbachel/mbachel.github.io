# Personal Website — Matthew Bachelder

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](./)

Personal portfolio website built with Next.js, TypeScript and Tailwind CSS. The site showcases projects, an experience/education timeline, and includes a static-friendly contact form.

## Table of Contents

- [What this project does](#what-this-project-does)
- [Why it's useful / Key features](#why-its-useful--key-features)
- [Quickstart](#quickstart)
- [Build & export (GitHub Pages)](#build--export-github-pages)
- [Contact form & environment notes](#contact-form--environment-notes)
- [Project structure](#project-structure)
- [Where to get help](#where-to-get-help)
- [Who maintains and how to contribute](#who-maintains-and-how-to-contribute)
- [License](#license)

## What this project does

This repository contains the source for Matthew Bachelder's personal website. It is a modern, accessible portfolio built with Next.js and Tailwind CSS. The site includes:

- A home/hero section with profile and animated background
- Skills grid with client-side filtering and sorting
- Experience/education timeline
- A contact form that works from static hosting using Formspree

## Why it's useful / Key features

- Fast, accessible, and responsive UI using Next.js + Tailwind CSS
- TypeScript throughout for safer development
- Theme support (light/dark) driven by CSS variables and `next-themes`
- Client-side enhancements (Isotope filtering, framer-motion transitions) while remaining exportable to static hosts

## Quickstart

Prerequisites

- Node.js 18+ (or current LTS)
- npm or yarn
- Recommended: VS Code with Tailwind CSS IntelliSense

Install dependencies

```powershell
# from repository root (PowerShell)
npm install
# or
yarn
```

Run development server

```powershell
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser.

## Build & export (GitHub Pages)

This project can be statically exported using `next export` and hosted on GitHub Pages.

```powershell
npm run build
npm run export
# The static site will be in the `out/` folder
```

Notes

- Static export disables server-only features like API routes and SSR. If you need serverless functions, use Vercel or Netlify instead.
- For GitHub Pages deployment, consider using the `gh-pages` package and a script that publishes the `out/` folder.

## Contact form & environment notes

- The included `ContactForm` component uses `@formspree/react` and is safe for static hosting; the Formspree form ID is public by design.
- Never commit private keys or service account files. Keep secrets in environment variables on your CI provider or local machine.

## Project structure (high level)

```
src/
	components/    # React components (Navbar, Hero, Projects, ContactForm, etc.)
	pages/         # Next.js Pages router: pages and special files (_app.tsx, _document.tsx)
	app/           # global CSS (globals.css)
public/          # static assets
```

Key files

- `src/pages/_app.tsx` — application wrapper (Providers, Navbar, Footer)
- `src/pages/_document.tsx` — custom HTML document (font links, meta)
- `src/components/ContactForm.tsx` — Formspree integration
- `src/components/Hero.tsx` — Hero with animated background
- `src/app/globals.css` — CSS variables and Tailwind directives

## Where to get help

- Issues and Pull Requests: use the repository's GitHub Issues and PRs
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- Formspree docs: https://formspree.io/docs

## Who maintains and how to contribute

Maintainer: Matthew Bachelder

If you'd like to contribute, please open an issue to discuss planned changes. For small fixes, fork the repo, create a feature branch, and submit a pull request.

## License

This project references the repository `LICENSE` file for licensing details.

---