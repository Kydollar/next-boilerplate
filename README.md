# Next Boilerplate 🚀

A modern, professional, and super chill Next.js starter kit. Built with React 19, TypeScript, TailwindCSS, Playwright, and all the cool dev tools you need for serious projects or just having fun!

## 📦 Features

- ⚛️ [**React 19**](https://react.dev/) + [**Next.js 15 App Router**](https://nextjs.org/docs/app)
- 🧠 [**TypeScript 5**](https://www.typescriptlang.org/docs/) with strict configs
- 🎨 [**Tailwind CSS 4**](https://tailwindcss.com/docs) with [Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- 🧹 [**ESLint 9**](https://eslint.org/docs/latest/) + [**Prettier 3**](https://prettier.io/docs/en/index.html) + [**lint-staged**](https://github.com/okonet/lint-staged)
- 🧪 [**Playwright**](https://playwright.dev/docs/intro) for end-to-end testing
- 🛡️ [**Husky**](https://typicode.github.io/husky) for pre-commit hooks
- 🧼 [**knip**](https://knip.dev/docs) for unused dependencies check
- 🚀 [**Semantic Release**](https://semantic-release.gitbook.io/semantic-release/) for automated changelogs, tagging, and GitHub Releases
- 🔒 **CI-ready** via [GitHub Actions](https://docs.github.com/en/actions)
- 🧩 [**Radix UI**](https://www.radix-ui.com/) for accessible UI primitives
- 🪄 [**shadcn/ui**](https://ui.shadcn.com/docs) for beautiful UI components
- 📚 [**Storybook**](https://storybook.js.org/docs/react) for building and documenting UI components (soon)


## 🚀 Getting Started

Clone this repo, install dependencies, and start it tomorrow *jk:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and see your app in action. Edit `src/app/page.tsx` and watch your changes go live instantly.

## 🧪 Testing

Run all tests (unit & e2e):

```bash
# Run all E2E tests in headless mode
npm run e2e:headless

# Or launch the Playwright UI
npm run e2e:ui
```

## 🧹 Lint & Format

Keep your code fresh:

```bash
# Lint code (ESLint)
npm run lint

# Format check (Prettier)
npm run format

# Fix all issues
npm run lint:fix
npm run format:fix
```

## 🔎 Type & Dependency Checks

```bash
# TypeScript strict check
npm run check:types

# Detect unused files/deps/exports
npm run check:deps
```

## 🚀 Release Automation

### Auto Release

Push to `main` and let [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) handle changelogs, tags, and npm publish. No more manual releases!

### Manual trigger (usually handled via CI)

Releases are managed by [Semantic Release](https://semantic-release.gitbook.io/semantic-release/):

```bash
npm run release
```

#### Automatically:

- Updates changelog
- Creates GitHub releases
- Bumps versions
- Tags releases

## 🤝 Contributing

PRs, issues, and feedback are always welcome! Just make sure your commits follow the convention and all tests/lints pass before pushing.

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs) — All the features & APIs
- [Next.js Learn](https://nextjs.org/learn) — Interactive tutorials
- [Next.js GitHub](https://github.com/vercel/next.js) — Star & contribute!
- [React Docs](https://react.dev/learn) — Modern React concepts
- [Storybook Docs](https://storybook.js.org/docs/react) — Build and document components
- [Tailwind CSS Docs](https://tailwindcss.com/docs) — Utility-first styling

## ▲ Deploy to Vercel (soon)

The easiest way to go live is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) — the creators of Next.js.

Check out the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Hidup Jokowi!✨
