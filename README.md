# Next Boilerplate

Boilerplate profesional untuk Next.js, React 19, TypeScript, TailwindCSS, dan CI/CD.

## Fitur

- Next.js 15, React 19, TypeScript 5
- TailwindCSS 4, Prettier, ESLint, Husky, lint-staged
- Semantic Release otomatis (changelog, tag, publish)
- Testing dengan Playwright
- CI/CD dengan GitHub Actions
- Dockerfile siap deploy

## Pengembangan

Untuk memulai, jalankan server pengembangan:

```bash
npm install
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

Anda dapat mulai mengedit halaman dengan memodifikasi `app/page.tsx`. Halaman akan otomatis
memperbarui saat Anda mengedit file.

## Testing

Untuk menjalankan pengujian, gunakan perintah berikut:

```bash
npm test
```

## Lint & Format

Untuk memeriksa kesalahan dan memformat kode, jalankan:

```bash
npm run lint
npm run format
```

## Release Otomatis

Push ke branch `main` akan otomatis membuat rilis baru.

## Deployment

Untuk membangun image Docker, gunakan perintah berikut:

```bash
docker build -t next-boilerplate .
docker run -p 3000:3000 next-boilerplate
```

## Struktur Project

- `src/` - Source code utama
- `public/` - Static assets
- `.github/workflows/ci.yml` - CI/CD
- `Dockerfile` - Deployment

## Kontribusi

Pastikan commit mengikuti konvensi dan semua test/lint lolos sebelum push.

Anda dapat mempelajari lebih lanjut tentang Next.js dengan melihat sumber daya berikut:

- [Dokumentasi Next.js](https://nextjs.org/docs) - pelajari tentang fitur dan API Next.js.
- [Belajar Next.js](https://nextjs.org/learn) - tutorial interaktif Next.js.

Anda juga dapat mengunjungi [repository GitHub Next.js](https://github.com/vercel/next.js) - umpan
balik dan kontribusi Anda sangat diharapkan!

## Deploy di Vercel

Cara termudah untuk menerapkan aplikasi Next.js Anda adalah dengan menggunakan
[Platform Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
dari pencipta Next.js.

Lihat dokumentasi kami tentang
[penyebaran Next.js](https://nextjs.org/docs/app/building-your-application/deploying) untuk detail
lebih lanjut.
