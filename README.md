# CV — Nicklas L. Jensen

Personligt CV-site bygget i Next.js (App Router) og TypeScript. Ingen eksterne UI-afhængigheder — layout og design er ren CSS.

## Kør lokalt

```bash
npm install
npm run dev
```

Åbn http://localhost:3000

## Rediger indholdet

**Alt indhold ligger i `content/cv.ts`.** Du behøver ikke røre resten af projektet for at opdatere dit CV — navn, kontaktoplysninger, profiltekst, kompetencer, jobs, uddannelse og projekter styres derfra.

Søg efter `TODO` i den fil — det er felterne, du mangler at udfylde:

- telefonnummer
- by / område
- GitHub-brugernavn
- LinkedIn-URL
- hvilken database du har brugt
- engelskniveau
- domænet i `site.url` når siden er deployet

## Læg din PDF på siden

Læg PDF-filen i `public/` og sørg for at navnet matcher `person.cvPdf` i `content/cv.ts` (standard: `/CV-Nicklas-L-Jensen.pdf`). Så virker "Hent CV som PDF"-knappen.

Siden har også et print-stylesheet, så `Ctrl + P` giver et pænt sort-på-hvidt PDF uden knapper og baggrund.

## Deploy til Vercel

1. Opret et repo på GitHub og push projektet:

   ```bash
   git init
   git add .
   git commit -m "CV site"
   git branch -M main
   git remote add origin https://github.com/<dit-brugernavn>/<repo>.git
   git push -u origin main
   ```

2. Gå til [vercel.com/new](https://vercel.com/new), vælg repoet og klik **Deploy**. Vercel genkender Next.js automatisk — der skal ikke sættes noget op.

3. Hvert push til `main` deployer automatisk. Pull requests får deres eget preview-link.

Alternativt uden GitHub:

```bash
npm i -g vercel
vercel
```

## Eget domæne

I Vercel: **Settings → Domains → Add**. Tilføj domænet og opret de DNS-records, Vercel viser, hos din udbyder. SSL-certifikat sættes op automatisk.

## Struktur

```
app/
  layout.tsx     # metadata, <html lang="da">
  page.tsx       # hele siden
  globals.css    # design, responsivt layout, print-styles
content/
  cv.ts          # ← alt indhold
public/           # læg din PDF her
```
