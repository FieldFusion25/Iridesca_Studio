'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Product, formatPrice, products } from '@/lib/products';
import { useCart } from '@/store/cart';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const total = product.images.length;

  const prev = () => setActiveImage((i) => (i - 1 + total) % total);
  const next = () => setActiveImage((i) => (i + 1) % total);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

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

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="px-6 md:px-10 pt-8 pb-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumb */}
        <nav className="micro-label text-stone mb-8">
          <Link href="/shop" className="hover:text-ink transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink/60">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div>
            {/* Main slide */}
            <div
              className="relative aspect-[4/5] bg-shell overflow-hidden mb-4 select-none"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {product.images.map((src, i) => (
                <div
                  key={src}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: i === activeImage ? 1 : 0, pointerEvents: i === activeImage ? 'auto' : 'none' }}
                >
                  <Image
                    src={src}
                    alt={i === 0 ? product.name : ''}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}

              {/* Arrows */}
              {total > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-pearl/80 hover:bg-pearl transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-pearl/80 hover:bg-pearl transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </>
              )}

              {/* Counter */}
              {total > 1 && (
                <span className="absolute bottom-3 right-3 micro-label text-[10px] bg-pearl/80 px-2 py-1">
                  {activeImage + 1} / {total}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {total > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative aspect-[4/5] bg-shell overflow-hidden transition-opacity ${
                      activeImage === i
                        ? 'opacity-100 ring-1 ring-ink'
                        : 'opacity-50 hover:opacity-100'
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
                ? 'No longer available'
                : added
                ? 'Added to cart ✓'
                : 'Add to cart'}
            </button>

            <p className="text-xs text-stone mt-4">
              One of a kind. Ships within 3 business days from Nuremberg.
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
              <p className="micro-label mb-3">Shipping & Returns</p>
              <p className="text-[14px] text-stone leading-relaxed">
                Insured shipping within Germany included. EU and international on
                request. Returns accepted within 14 days, no questions asked.
              </p>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-32">
            <h2 className="font-serif text-3xl text-center mb-12">
              From the same vitrine
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
