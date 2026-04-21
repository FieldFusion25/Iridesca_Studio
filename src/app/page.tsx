import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';

export default function Home() {
  // Flatten all product images into one big mosaic list (like Lucia Zolea's homepage)
  const mosaic = products.flatMap((p) =>
    p.images.map((src, i) => ({
      src,
      alt: p.name,
      href: `/shop/${p.slug}`,
      key: `${p.slug}-${i}`,
    }))
  );

  return (
    <div>
      {/* Hero: full-width editorial image, no text */}
      <section className="px-4 md:px-8">
        <Link
          href="/shop"
          className="block relative w-full aspect-[16/10] md:aspect-[16/9] bg-ink overflow-hidden group"
        >
          <Image
            src="/img/hero.jpeg"
            alt="Iridesca Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.02]"
          />
        </Link>
      </section>

      {/* Mosaic grid of product photos — Lucia Zolea signature */}
      <section className="px-4 md:px-8 mt-4 md:mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {mosaic.map((img) => (
            <Link
              key={img.key}
              href={img.href}
              className="relative aspect-[3/4] bg-shell overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Small centered contact footer-strip (like Lucia Zolea) */}
      <section className="mt-24 md:mt-32 pb-8 text-center">
        <div className="micro-label text-stone space-y-2">
          <p>+49 911 — AUF ANFRAGE</p>
          <p>hallo@iridesca-studio.de</p>
        </div>
      </section>
    </div>
  );
}
