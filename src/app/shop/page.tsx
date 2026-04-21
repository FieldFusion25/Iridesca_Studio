'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

const categories = ['Alle', 'Taschen', 'Besteck', 'Objekte', 'Schmuck'] as const;

function ShopContent() {
  const searchParams = useSearchParams();
  const active = searchParams.get('kategorie') ?? 'Alle';

  const filtered =
    active === 'Alle'
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div className="px-4 md:px-8 pt-6 pb-20">
      <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12">
        {/* Left sidebar — Lucia Zolea style */}
        <aside className="md:sticky md:top-[160px] md:self-start">
          <p className="micro-label mb-4 text-ink">Category</p>
          <ul className="flex md:flex-col gap-4 md:gap-2 overflow-x-auto whitespace-nowrap md:whitespace-normal pb-2 md:pb-0">
            {categories.map((c) => {
              const isActive = active === c;
              const href = c === 'Alle' ? '/shop' : `/shop?kategorie=${c}`;
              return (
                <li key={c}>
                  <Link
                    href={href}
                    className={`text-[13px] transition-colors ${
                      isActive ? 'text-ink font-medium' : 'text-stone hover:text-ink'
                    }`}
                  >
                    {c}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Right: product grid */}
        <div>
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-stone">
                In dieser Kategorie ist gerade nichts da.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="px-6 py-24 text-center">Lädt…</div>}>
      <ShopContent />
    </Suspense>
  );
}
