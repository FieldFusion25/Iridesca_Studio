'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useCart } from '@/store/cart';
import { formatPrice } from '@/lib/products';

export default function CartPage() {
  const { items, remove, updateQuantity, total } = useCart();
  const [hydrated, setHydrated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => setHydrated(true), []);

  const displayItems = hydrated ? items : [];
  const displayTotal = hydrated ? total() : 0;

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: displayItems.map((i) => ({ slug: i.slug, quantity: i.quantity })),
        }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert(data.error || 'Checkout fehlgeschlagen.');
    } catch {
      alert('Etwas ist schiefgegangen.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 md:px-10 pt-12 pb-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="micro-label text-stone mb-3">Warenkorb</p>
          <h1 className="font-serif text-4xl md:text-6xl">Ihre Auswahl</h1>
        </div>

        {displayItems.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-serif text-2xl mb-6">Noch leer.</p>
            <Link
              href="/shop"
              className="micro-label border-b border-ink pb-1 hover:text-stone transition-colors"
            >
              Zur Sammlung →
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-[1fr_360px] gap-12 md:gap-16">
            {/* Items */}
            <ul className="flex flex-col">
              {displayItems.map((item, i) => (
                <li
                  key={item.slug}
                  className={`flex gap-6 py-6 ${
                    i !== 0 ? 'border-t border-ink/10' : ''
                  }`}
                >
                  <Link
                    href={`/shop/${item.slug}`}
                    className="relative w-[140px] h-[175px] bg-shell flex-shrink-0 overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="140px"
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <Link
                        href={`/shop/${item.slug}`}
                        className="font-serif text-xl leading-tight hover:text-stone transition-colors block"
                      >
                        {item.name}
                      </Link>
                      <div className="text-sm text-stone mt-2">
                        {formatPrice(item.price)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-ink/20">
                        <button
                          onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                          className="w-9 h-9 text-stone hover:text-ink transition-colors"
                        >
                          −
                        </button>
                        <span className="w-9 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                          className="w-9 h-9 text-stone hover:text-ink transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => remove(item.slug)}
                        className="micro-label text-stone hover:text-ink transition-colors"
                      >
                        Entfernen
                      </button>
                    </div>
                  </div>
                  <div className="font-serif text-lg self-start py-1">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </li>
              ))}
            </ul>

            {/* Summary */}
            <aside className="bg-shell p-8 h-fit md:sticky md:top-[100px]">
              <p className="micro-label mb-5">Zusammenfassung</p>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-stone">Zwischensumme</span>
                <span className="font-serif text-lg">{formatPrice(displayTotal)}</span>
              </div>
              <div className="flex justify-between mb-5">
                <span className="text-sm text-stone">Versand</span>
                <span className="text-sm text-stone">Im Checkout</span>
              </div>
              <div className="hairline mb-5" />
              <div className="flex justify-between items-baseline mb-8">
                <span className="micro-label">Gesamt</span>
                <span className="font-serif text-2xl">{formatPrice(displayTotal)}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full bg-ink text-pearl py-4 micro-label hover:bg-stone transition-colors disabled:opacity-50"
              >
                {loading ? 'Wird weitergeleitet…' : 'Zur Kasse'}
              </button>
              <p className="text-xs text-stone mt-4 text-center leading-relaxed">
                Bezahlung sicher via Stripe.
                <br />
                Kreditkarte, Klarna, Apple Pay & mehr.
              </p>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
