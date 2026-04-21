export type Product = {
  slug: string;
  name: string;
  price: number; // EUR in cents
  originalPrice?: number;
  currency: 'eur';
  description: string;
  details: string[];
  images: string[];
  soldOut?: boolean;
  onSale?: boolean;
};

// Drop product photos into:
//   public/img/products/<slug>/01.jpg, 02.jpg, ...
// The first image is the card's primary; the second is shown on hover.

export const products: Product[] = [
  {
    slug: 'caviar-spoons-horn-pearl',
    name: 'Caviar Spoons — Horn & Mother-of-Pearl',
    price: 26000, // placeholder — to be confirmed
    currency: 'eur',
    description:
      "A set of four caviar spoons in which mother-of-pearl meets blackened horn. The handle dark as ink, set with three silver studs and finished with a slender brass ferrule — the bowl a quiet, cool shimmer. Pearl doesn't taint the flavour; horn gives the hand a place to rest. A small, considered ceremony.",
    details: [
      'Mother-of-pearl bowl, horn handle with three silver studs',
      'Hand-polished brass ferrule',
      'Length approx. 10 cm',
      'France, early 20th century',
      'Hand wash, lukewarm water',
    ],
    images: [
      '/img/products/caviar-spoons-horn-pearl/01.jpg',
      '/img/products/caviar-spoons-horn-pearl/02.jpg',
      '/img/products/caviar-spoons-horn-pearl/03.jpg',
    ],
  },
  {
    slug: 'pearl-curios-trio',
    name: 'Mother-of-Pearl Curios — Trio',
    price: 18000, // placeholder
    currency: 'eur',
    description:
      'Three small creatures of pearl: a hand-carved fish with fine ribs, a hair clip whose metal has been gentled by the shell, and a cabochon cut from a single piece of natural shell. Each catches the light differently — all three come from the same quiet world. The silver tray shown in the photograph is a prop and is not included.',
    details: [
      'Fish: hand-carved mother-of-pearl, approx. 7 cm',
      'Hair clip: mother-of-pearl with metal clasp, approx. 6 cm',
      'Cabochon: natural mother-of-pearl, approx. 5 cm',
      'Europe, likely 1930s–1950s',
      'Each piece unique — visible patina throughout',
    ],
    images: [
      '/img/products/pearl-curios-trio/01.jpg',
      '/img/products/pearl-curios-trio/02.jpg',
      '/img/products/pearl-curios-trio/03.jpg',
      '/img/products/pearl-curios-trio/04.jpg',
    ],
  },
  {
    slug: 'pearl-shell-clutch',
    name: 'Mother-of-Pearl Clutch with Silver Chain',
    price: 46000, // placeholder
    currency: 'eur',
    description:
      'An evening clutch cut from a single mother-of-pearl shell, set into a chased silver-tone frame with a beaded rim. The long link chain carries it over the shoulder or lets it rest in the hand. Light, cool, unmistakable — the colour shifts with every turn of the wrist.',
    details: [
      'Natural mother-of-pearl shell, single piece',
      'Silver-tone metal frame with beaded ornament',
      'Detachable link chain, approx. 120 cm',
      'Fabric-lined interior',
      'Approx. 18 × 13 × 3 cm',
      'Vintage, mid-20th century',
    ],
    images: [
      '/img/products/pearl-shell-clutch/01.jpg',
      '/img/products/pearl-shell-clutch/02.jpg',
      '/img/products/pearl-shell-clutch/03.jpg',
      '/img/products/pearl-shell-clutch/04.jpg',
    ],
  },
  {
    slug: 'pearl-shell-clutch-mini',
    name: 'Mother-of-Pearl Clutch — Mini',
    price: 32000, // placeholder — to be confirmed
    currency: 'eur',
    description:
      'The smaller sibling of our shell clutch — the same single piece of natural mother-of-pearl, the same chased silver-tone frame, scaled down to a more intimate proportion. Light enough to forget you are carrying it. The colour shifts from pale champagne to deep iridescent blue depending on where the light finds it.',
    details: [
      'Natural mother-of-pearl shell, single piece',
      'Silver-tone metal frame with beaded ornament',
      'Detachable link chain, approx. 100 cm',
      'Fabric-lined interior',
      'Approx. 13 × 9 × 2.5 cm',
      'Vintage, mid-20th century',
    ],
    images: [
      '/img/products/pearl-shell-clutch-mini/01.jpg',
      '/img/products/pearl-shell-clutch-mini/02.jpg',
      '/img/products/pearl-shell-clutch-mini/03.jpg',
      '/img/products/pearl-shell-clutch-mini/04.jpg',
    ],
  },
  {
    slug: 'pearl-teaspoons-four',
    name: 'Mother-of-Pearl Tea Spoons — Set of Four',
    price: 17000, // placeholder
    currency: 'eur',
    description:
      'Four tea spoons, each cut in one piece from solid mother-of-pearl. The surface breaks the light in soft waves — every spoon a small fragment of the sea held in the hand. For caviar, tartare, sweetened rice — or a tea where metal simply has no place.',
    details: [
      'Solid mother-of-pearl, cut in one piece',
      'Length approx. 11 cm',
      'France, early 20th century',
      'Hand wash, lukewarm water',
      'Four individual pieces — slight colour variation is natural',
    ],
    images: [
      '/img/products/pearl-teaspoons-four/01.jpg',
      '/img/products/pearl-teaspoons-four/02.jpg',
      '/img/products/pearl-teaspoons-four/03.jpg',
      '/img/products/pearl-teaspoons-four/04.jpg',
    ],
  },
];

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(cents: number) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100);
}
