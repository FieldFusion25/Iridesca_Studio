# Coquille Vintage

Editorial Vintage-Shop für Muscheltaschen, Perlmutt-Löffel und handverlesene Vintage-Objekte. Gebaut im Stil von [luciazolea.com](https://www.luciazolea.com).

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Zustand · Stripe Checkout

---

## Start in 3 Minuten

```bash
# 1. Installieren
npm install

# 2. .env einrichten
cp .env.example .env.local
# → STRIPE_SECRET_KEY und NEXT_PUBLIC_URL eintragen

# 3. Dev-Server
npm run dev
```

Seite läuft auf [http://localhost:3000](http://localhost:3000).

---

## Stripe einrichten

1. Account unter [stripe.com](https://stripe.com) anlegen.
2. Im Dashboard → **Developers → API keys** → `Secret key` kopieren (`sk_test_…` für Test-Mode).
3. In `.env.local`:
   ```
   STRIPE_SECRET_KEY=sk_test_deinKey
   NEXT_PUBLIC_URL=http://localhost:3000
   ```
4. **Testen mit Kreditkartennummer:** `4242 4242 4242 4242` · beliebiges zukünftiges Datum · beliebige CVC.

**Für Live-Schaltung:**
- `sk_live_…` Key benutzen
- `NEXT_PUBLIC_URL=https://deine-domain.de`
- In Stripe: Webhook optional einrichten für Bestellbenachrichtigung (nicht zwingend nötig — Stripe schickt automatisch Rechnungsmails)

---

## Struktur

```
src/
├── app/
│   ├── page.tsx              ← Homepage (Hero + Featured)
│   ├── shop/
│   │   ├── page.tsx          ← Alle Produkte, Kategorie-Filter
│   │   └── [slug]/page.tsx   ← Produkt-Detailseite
│   ├── cart/page.tsx         ← Warenkorb (Vollseite)
│   ├── success/page.tsx      ← Danke-Seite nach Stripe
│   ├── about/page.tsx        ← Atelier-Geschichte
│   ├── contact/page.tsx      ← Kontaktformular
│   └── api/checkout/route.ts ← Stripe Session API
├── components/
│   ├── Header.tsx            ← Sticky Nav, Logo, Cart-Counter
│   ├── Footer.tsx
│   ├── CartDrawer.tsx        ← Slide-In Warenkorb
│   └── ProductCard.tsx       ← Grid-Karte mit Image-Hover
├── lib/
│   └── products.ts           ← Produkt-Datenbank (aktuell 8 Stück)
└── store/
    └── cart.ts               ← Zustand mit localStorage
```

---

## Produkte bearbeiten

Alle Produkte leben in **`src/lib/products.ts`**. Beispiel:

```ts
{
  slug: 'neues-produkt',                 // URL: /shop/neues-produkt
  name: 'Perlmutt Teller',
  price: 18000,                           // in Cent → 180€
  currency: 'eur',
  category: 'Objekte',
  description: '…',
  details: ['Perlmutt', '…'],
  images: [
    'https://images.unsplash.com/....jpg',
    'https://images.unsplash.com/....jpg',
  ],
  // soldOut: true,
  // onSale: true, originalPrice: 24000,
}
```

**Kategorien:** `Taschen` · `Besteck` · `Objekte` · `Schmuck` (in `src/lib/products.ts` erweiterbar, dann auch in Header-Nav + `src/app/shop/page.tsx` nachziehen).

**Eigene Bilder statt Unsplash:** Bilder nach `public/products/` legen, dann z.B. `'/products/tasche-1.jpg'`.

---

## Deploy auf Vercel

```bash
# Einmalig
npx vercel

# Oder: Repo auf GitHub pushen → auf vercel.com "Import Project"
```

In den Vercel Project Settings **Environment Variables** setzen:
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_URL` = deine Vercel-URL oder Custom Domain

---

## Design-DNA

- **Off-White-Palette:** warmes Papier-Weiß (`#FBF8F2`), Sand, Driftwood, Ink
- **Typo:** Cormorant Garamond (Serif, Display) × Inter (UI-Sans)
- **Grid:** 3 Spalten, großzügige Abstände, Produktnamen zentriert unter dem Bild
- **Interaktion:** Image-Hover-Swap auf Produktkarten, Cart-Drawer von rechts, subtiles Film-Grain-Overlay
- **Sticky Header:** zentriertes Logo, Nav links, Warenkorb rechts — exakt wie Lucia Zolea

---

## Was noch zu tun wäre (optional)

- [ ] Stripe Webhook für automatische Bestellmail-Benachrichtigung an dich
- [ ] Kontaktformular an Mailservice anbinden (Resend, Postmark)
- [ ] Impressum / Datenschutz / AGB-Seiten ausfüllen
- [ ] Newsletter-Integration (Mailchimp, Brevo)
- [ ] Mehrere Bilder pro Produkt im Karussell auf Mobile

---

Bei Fragen: Emre @ SolveTrail.
