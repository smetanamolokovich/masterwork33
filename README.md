# Portfolio — Aituar Abdiluly

Next.js 14 (App Router) + Tailwind + shadcn/ui. Hotové k nasazení na Vercel.

## Lokální spuštění
```bash
npm install
npm run dev
# http://localhost:3000
```

## Build (kontrola před nasazením)
```bash
npm run build
```

## Nasazení na Vercel

### Varianta A — přes GitHub (doporučeno)
1. Vytvoř repozitář na GitHubu a nahraj projekt:
   ```bash
   git init
   git add .
   git commit -m "portfolio"
   git branch -M main
   git remote add origin https://github.com/<ty>/<repo>.git
   git push -u origin main
   ```
2. Na https://vercel.com → **Add New → Project** → importuj repozitář → **Deploy**.
3. Každý další `git push` web automaticky aktualizuje.

### Varianta B — přes CLI
```bash
npm i -g vercel
vercel          # náhled
vercel --prod   # produkce
```

Vercel přidělí doménu `*.vercel.app`; vlastní doménu nastavíš v Project → Settings → Domains.

## Kde upravit obsah
- `app/page.tsx` — texty, projekty (`projects`), zkušenosti (`timeline`), dovednosti (`skills`), kontakty.
- `app/layout.tsx` — title / SEO popis.
- Barvy a styl jsou v konstantě `css` v `app/page.tsx` (proměnné `--accent`, `--paper`, …).
