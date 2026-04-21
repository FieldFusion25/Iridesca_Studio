'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product, formatPrice, products } from '@/lib/products';
import { useCart } from '@/store/cart';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const handleAdd = () => {
    if (product.soldOut) return;
    add({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="px-6 md:px-10 pt-8 pb-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumb */}
        <nav className="micro-label text-stone mb-8">
          <Link href="/shop" className="hover:text-ink transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/shop?kategorie=${product.category}`}
            className="hover:text-ink transition-colors"
          >
            {product.category}
          </Link>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[4/5] bg-shell overflow-hidden mb-4">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative aspect-[4/5] bg-shell overflow-hidden transition-opacity ${
                      activeImage === i
                        ? 'opacity-100 ring-1 ring-ink'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="md:sticky md:top-[100px] md:self-start">
            <p className="micro-label text-stone mb-3">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-5">
              {product.name}
            </h1>
            <div className="text-xl mb-8">
              {product.onSale && product.originalPrice ? (
                <>
                  <span className="line-through text-stone mr-3">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="text-ink">{formatPrice(product.price)}</span>
                </>
              ) : (
                formatPrice(product.price)
              )}
            </div>

            <p className="text-[15px] leading-relaxed text-stone mb-8">
              {product.description}
            </p>

            <button
              onClick={handleAdd}
              disabled={product.soldOut}
              className={`w-full py-4 micro-label transition-colors ${
                product.soldOut
                  ? 'bg-sand text-stone cursor-not-allowed'
                  : added
                  ? 'bg-driftwood text-pearl'
                  : 'bg-ink text-pearl hover:bg-stone'
              }`}
            >
              {product.soldOut
                ? 'Nicht mehr verfügbar'
                : added
                ? 'In den Warenkorb gelegt ✓'
                : 'In den Warenkorb'}
            </button>

            <p className="text-xs text-stone mt-4">
              Einzelstück. Versand innerhalb von 3 Werktagen aus Nürnberg.
            </p>

            {/* Details */}
            <div className="mt-10 border-t border-ink/10 pt-8">
              <p className="micro-label mb-4">Details</p>
              <ul className="text-[14px] text-stone space-y-2">
                {product.details.map((d, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-driftwood">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-ink/10 pt-8">
              <p className="micro-label mb-3">Versand & Rückgabe</p>
              <p className="text-[14px] text-stone leading-relaxed">
                Versicherter Versand in Deutschland inklusive. EU-weit auf
                Anfrage. Rückgabe innerhalb von 14 Tagen ohne Angabe von
                Gründen.
              </p>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-32">
            <h2 className="font-serif text-3xl text-center mb-12">
              In derselben Vitrine
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-20">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
