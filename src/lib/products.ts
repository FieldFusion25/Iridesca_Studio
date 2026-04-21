export type Product = {
  slug: string;
  name: string;
  price: number; // EUR in cents
  originalPrice?: number;
  currency: 'eur';
  category: 'Taschen' | 'Besteck' | 'Objekte' | 'Schmuck';
  description: string;
  details: string[];
  images: string[];
  soldOut?: boolean;
  onSale?: boolean;
};

// Unsplash photo IDs hand-picked for the mood:
// warm off-white backgrounds, vintage, pearl/shell, editorial stillife.
const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const products: Product[] = [
  {
    slug: 'muscheltasche-perlmutt-coquille',
    name: 'Perlmutt Coquille Handtasche',
    price: 48000,
    currency: 'eur',
    category: 'Taschen',
    description:
      'Handgefertigte Abendtasche aus natürlicher Perlmutt, gefasst in einem schlanken Messingrahmen. Ein ruhiges, schimmerndes Objekt — nicht laut, nicht glatt, sondern still und wertvoll.',
    details: [
      'Natürliches Perlmutt, individuell verlesen',
      'Messingverschluss, handpoliert',
      'Innenfutter aus Seide',
      'Italien, vermutlich 1960er',
      'ca. 22 × 14 × 6 cm',
    ],
    images: [
      img('photo-1590874103328-eac38a683ce7'),
      img('photo-1584917865442-de89df76afd3'),
    ],
  },
  {
    slug: 'perlmutt-loeffel-set-sechs',
    name: 'Perlmutt Löffel — Set zu Sechs',
    price: 22000,
    currency: 'eur',
    category: 'Besteck',
    description:
      'Sechs Kaviarlöffel aus massiver Perlmuschel. Klassisch serviert — weil Metall den Geschmack von Kaviar verändert, Perlmutt nicht. Ein Detail, das alles entscheidet.',
    details: [
      'Massive Perlmutt, einteilig geschnitten',
      'Länge: 9,5 cm',
      'Frankreich, frühes 20. Jahrhundert',
      'Handwäsche, lauwarmes Wasser',
    ],
    images: [
      img('photo-1587049352846-4a222e784d38'),
      img('photo-1506629082955-511b1aa562c8'),
    ],
  },
  {
    slug: 'vintage-kauri-muschel-clutch',
    name: 'Kauri Clutch',
    price: 32000,
    currency: 'eur',
    category: 'Taschen',
    description:
      'Clutch aus geflochtenen Kaurimuscheln auf Baumwollgeflecht. Eine Arbeit, die man nur noch selten sieht — jedes Stück braucht Tage, keine Stunden.',
    details: [
      'Kaurimuscheln auf Baumwollgeflecht',
      'Kordelverschluss',
      'ca. 28 × 18 cm',
      'Handwerk, Westafrika 1970er',
    ],
    images: [
      img('photo-1612290533196-7d8ba0bf5929'),
      img('photo-1584917865442-de89df76afd3'),
    ],
  },
  {
    slug: 'abalone-servierbesteck-paar',
    name: 'Abalone Servierbesteck',
    price: 18000,
    currency: 'eur',
    category: 'Besteck',
    description:
      'Ein Paar große Servierlöffel aus Abalone-Muschel mit silbermontierten Griffen. Für kalte Saucen, Tartar, alles wo Reinheit zählt.',
    details: [
      'Abalone-Muschel und 925 Silber',
      'Länge: 24 cm',
      'England, um 1920',
      'Punzen erhalten',
    ],
    images: [
      img('photo-1563822249366-3efb23b8e0c9'),
      img('photo-1506629082955-511b1aa562c8'),
    ],
    onSale: true,
    originalPrice: 24000,
  },
  {
    slug: 'perlmutt-zigarettenetui',
    name: 'Perlmutt Etui',
    price: 28000,
    currency: 'eur',
    category: 'Objekte',
    description:
      'Etui aus intarsiertem Perlmutt und geschwärztem Messing. Heute für Visitenkarten, einst für ganz andere Zeremonien.',
    details: [
      'Perlmutt-Intarsien auf Messing',
      'Federmechanismus funktional',
      'ca. 9 × 6 × 1,5 cm',
      'Wien, 1930er',
    ],
    images: [
      img('photo-1590086783191-a0694c7d1e6e'),
      img('photo-1584917865442-de89df76afd3'),
    ],
  },
  {
    slug: 'muschelkette-natur',
    name: 'Halskette — Natürliche Muscheln',
    price: 14000,
    currency: 'eur',
    category: 'Schmuck',
    description:
      'Lange Kette aus natürlichen, ungefärbten Muschelstücken auf Seidenfaden. Trägt sich wie ein Versprechen ans Meer.',
    details: [
      'Natürliche Muschelstücke',
      'Seidenfaden, handgeknüpft',
      'Länge: 82 cm',
      'Italien, 1960er',
    ],
    images: [
      img('photo-1599643478518-a784e5dc4c8f'),
      img('photo-1612290533196-7d8ba0bf5929'),
    ],
  },
  {
    slug: 'perlmutt-schatulle',
    name: 'Perlmutt Schatulle',
    price: 62000,
    currency: 'eur',
    category: 'Objekte',
    description:
      'Schatulle mit Perlmutt-Einlagen auf Mahagoni, Samt-Innenraum. Ursprünglich für Schmuck, hält heute, was sie soll: das Wertvolle ruhig.',
    details: [
      'Mahagoni, Perlmutt, Samt',
      'ca. 18 × 12 × 8 cm',
      'Frankreich, 19. Jahrhundert',
      'Schloss und Schlüssel funktional',
    ],
    images: [
      img('photo-1590086783191-a0694c7d1e6e'),
      img('photo-1587049352846-4a222e784d38'),
    ],
    soldOut: true,
  },
  {
    slug: 'seashell-teelicht-paar',
    name: 'Muschel Teelicht — Paar',
    price: 9800,
    currency: 'eur',
    category: 'Objekte',
    description:
      'Zwei große Natur-Muscheln, sorgsam poliert, als Teelichthalter. Das Licht fällt durch sie hindurch und wird dadurch weich.',
    details: [
      'Natürliche Muschel, poliert',
      'ca. 14 cm Durchmesser',
      'Mittelmeerraum, zeitgenössisch',
    ],
    images: [
      img('photo-1599643478518-a784e5dc4c8f'),
      img('photo-1612290533196-7d8ba0bf5929'),
    ],
  },
];

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(cents: number) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100);
}
