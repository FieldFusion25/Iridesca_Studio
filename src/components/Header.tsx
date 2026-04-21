'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from '@/store/cart';

export default function Header() {
  const setOpen = useCart((s) => s.setOpen);
  const [count, setCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsub = useCart.subscribe((state) =>
      setCount(state.items.reduce((sum, i) => sum + i.quantity, 0))
    );
    setCount(useCart.getState().items.reduce((sum, i) => sum + i.quantity, 0));
    return unsub;
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-pearl/95 backdrop-blur-sm border-b border-ink/10'
          : 'bg-pearl border-b border-transparent'
      }`}
    >
      {/* Row 1: logo centered, cart top-right */}
      <div className="relative flex items-center justify-center pt-6 pb-3 px-6">
        <Link href="/" className="leading-none">
          <span
            className="text-[42px] md:text-[54px] tracking-normal text-ink"
            style={{
              fontFamily: "var(--font-script), 'Great Vibes', cursive",
              fontWeight: 400,
            }}
          >
            Iridesca Studio
          </span>
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 micro-label text-ink/80 hover:text-ink transition-colors"
          aria-label="Warenkorb öffnen"
        >
          CART ({count})
        </button>
      </div>

      {/* Row 2: horizontal nav centered */}
      <nav className="flex items-center justify-center gap-5 md:gap-9 pb-5 pt-1 text-[11px] tracking-[0.22em] uppercase font-medium text-ink/80 overflow-x-auto whitespace-nowrap px-6">
        <Link href="/" className="hover:text-ink transition-colors">Home</Link>
        <Link href="/shop" className="hover:text-ink transition-colors">Shop</Link>
        <Link href="/shop?kategorie=Taschen" className="hover:text-ink transition-colors">Taschen</Link>
        <Link href="/shop?kategorie=Besteck" className="hover:text-ink transition-colors">Besteck</Link>
        <Link href="/shop?kategorie=Objekte" className="hover:text-ink transition-colors">Objekte</Link>
        <Link href="/shop?kategorie=Schmuck" className="hover:text-ink transition-colors">Schmuck</Link>
        <Link href="/about" className="hover:text-ink transition-colors">Atelier</Link>
        <Link href="/contact" className="hover:text-ink transition-colors">Kontakt</Link>
      </nav>
    </header>
  );
}
