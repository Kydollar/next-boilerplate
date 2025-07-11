# Next Boilerplate 🚀

A modern, professional, and super chill Next.js starter kit. Built with React 19, TypeScript, TailwindCSS, Playwright, and all the cool dev tools you need for serious projects or just having fun!

## Features

- Next.js 15 + React 19 + TypeScript 5
- TailwindCSS 4 for styling
- Prettier & ESLint for clean code
- Husky & lint-staged for commit hygiene
- Automated releases with Semantic Release
- End-to-end testing with Playwright
- CI/CD ready (GitHub Actions)
- Dockerfile for easy deployment

## Getting Started

Clone this repo, install dependencies, and start hacking:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) and see your app in action. Edit `src/app/page.tsx` and watch your changes go live instantly.

## Testing

Run all tests (unit & e2e):

```bash
npm test        # unit tests
npm run e2e:headless  # e2e tests (Playwright)
```

## Lint & Format

Keep your code fresh:

```bash
npm run lint
npm run format
```

## Auto Release

Push to `main` and let Semantic Release handle changelogs, tags, and npm publish. No more manual releases!

## Deploy

Build a Docker image and ship it anywhere:

```bash
docker build -t next-boilerplate .
docker run -p 3000:3000 next-boilerplate
```

## Project Structure

- `src/` — Your main app code
- `public/` — Static assets
- `.github/workflows/ci.yml` — CI/CD config
- `Dockerfile` — Deployment config

## Contributing

PRs, issues, and feedback are always welcome! Just make sure your commits follow the convention and all tests/lints pass before pushing.

## Learn More

- [Next.js Docs](https://nextjs.org/docs) — All the features & APIs
- [Next.js Learn](https://nextjs.org/learn) — Interactive tutorials
- [Next.js GitHub](https://github.com/vercel/next.js) — Star & contribute!

## Deploy to Vercel

The easiest way to go live is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) — the creators of Next.js.

Check out the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Hidup Jokowi!✨
