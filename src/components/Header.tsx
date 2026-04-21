'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/store/cart';

export default function Header() {
  const setOpen = useCart((s) => s.setOpen);
  const [count, setCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const unsub = useCart.subscribe((state) =>
      setCount(state.items.reduce((sum, i) => sum + i.quantity, 0))
    );
    setCount(useCart.getState().items.reduce((sum, i) => sum + i.quantity, 0));
    return unsub;
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const floating = isHome && !scrolled;
  const logoColor = floating ? 'text-pearl' : 'text-ink';
  const navColor = floating ? 'text-pearl/90' : 'text-ink/80';
  const cartColor = floating
    ? 'text-pearl/90 hover:text-pearl'
    : 'text-ink/80 hover:text-ink';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        floating
          ? 'bg-transparent border-b border-transparent'
          : 'bg-pearl/90 backdrop-blur-md border-b border-ink/10'
      }`}
    >
      <div className="relative flex items-center justify-center pt-6 pb-3 px-6">
        <Link href="/" className="leading-none">
          <span
            className={`text-[42px] md:text-[54px] tracking-normal transition-colors duration-700 ${logoColor}`}
            style={{
              fontFamily: "var(--font-script), 'Great Vibes', cursive",
              fontWeight: 400,
              textShadow: floating
                ? '0 2px 18px rgba(0,0,0,0.25)'
                : 'none',
            }}
          >
            Iridesca Studio
          </span>
        </Link>

        <button
          onClick={() => setOpen(true)}
          className={`absolute right-6 md:right-10 top-1/2 -translate-y-1/2 micro-label transition-colors duration-700 ${cartColor}`}
          aria-label="Open cart"
        >
          CART ({count})
        </button>
      </div>

      <nav
        className={`flex items-center justify-center gap-8 md:gap-14 pb-5 pt-1 text-[11px] tracking-[0.24em] uppercase font-medium overflow-x-auto whitespace-nowrap px-6 transition-colors duration-700 ${navColor}`}
      >
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/shop" className="nav-link">Shop</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
        <Link href="/versand" className="nav-link">Shipping & Returns</Link>
      </nav>
    </header>
  );
}
