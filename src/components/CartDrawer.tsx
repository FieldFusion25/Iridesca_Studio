'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useCart } from '@/store/cart';
import { formatPrice } from '@/lib/products';

export default function CartDrawer() {
  const { isOpen, setOpen, items, remove, updateQuantity, total } = useCart();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const handleCheckout = async () => {
    setCheckoutLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({ slug: i.slug, quantity: i.quantity })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Checkout fehlgeschlagen.');
      }
    } catch (err) {
      alert('Etwas ist schiefgegangen. Bitte erneut versuchen.');
    } finally {
      setCheckoutLoading(false);
    }
  };

  const displayItems = hydrated ? items : [];
  const displayTotal = hydrated ? total() : 0;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-ink/40 z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full md:w-[460px] bg-pearl z-[70] shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
          <span className="micro-label">Warenkorb ({displayItems.length})</span>
          <button
            onClick={() => setOpen(false)}
            className="micro-label hover:text-ink transition-colors"
            aria-label="Schließen"
          >
            Schließen
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {displayItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-24">
              <div className="font-serif text-2xl">Noch leer.</div>
              <p className="text-sm text-stone max-w-[260px]">
                Die schönsten Stücke finden ihren Weg von selbst.
              </p>
              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="micro-label mt-4 border-b border-ink pb-1 hover:text-stone transition-colors"
              >
                Zum Shop
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {displayItems.map((item) => (
                <li key={item.slug} className="flex gap-4">
                  <Link
                    href={`/shop/${item.slug}`}
                    onClick={() => setOpen(false)}
                    className="relative w-[96px] h-[120px] bg-shell flex-shrink-0 overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link
                        href={`/shop/${item.slug}`}
                        onClick={() => setOpen(false)}
                        className="font-serif text-[17px] leading-tight hover:text-stone transition-colors block"
                      >
                        {item.name}
                      </Link>
                      <div className="text-sm text-stone mt-1">
                        {formatPrice(item.price)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-ink/20">
                        <button
                          onClick={() =>
                            updateQuantity(item.slug, item.quantity - 1)
                          }
                          className="w-7 h-7 text-stone hover:text-ink transition-colors"
                        >
                          −
                        </button>
                        <span className="w-7 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.slug, item.quantity + 1)
                          }
                          className="w-7 h-7 text-stone hover:text-ink transition-colors"
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
                </li>
              ))}
            </ul>
          )}
        </div>

        {displayItems.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-6">
            <div className="flex justify-between mb-1">
              <span className="micro-label">Zwischensumme</span>
              <span className="font-serif text-lg">{formatPrice(displayTotal)}</span>
            </div>
            <p className="text-xs text-stone mb-5">
              Versand wird im nächsten Schritt berechnet.
            </p>
            <button
              onClick={handleCheckout}
              disabled={checkoutLoading}
              className="w-full bg-ink text-pearl py-4 micro-label hover:bg-stone transition-colors disabled:opacity-50"
            >
              {checkoutLoading ? 'Wird weitergeleitet…' : 'Zur Kasse'}
            </button>
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="block text-center mt-3 micro-label text-stone hover:text-ink transition-colors"
            >
              Warenkorb ansehen
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
