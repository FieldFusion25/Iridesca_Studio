import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="px-6 md:px-10 pt-12 pb-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <p className="micro-label text-stone mb-3">Studio</p>
          <h1 className="font-serif text-4xl md:text-6xl">A small house</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
          <div className="relative aspect-[4/5] bg-shell overflow-hidden order-2 md:order-1">
            <Image
              src="/img/hero.jpeg"
              alt="Studio"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="font-serif text-2xl md:text-3xl leading-snug mb-6 italic">
              &ldquo;Every shell has two lives. The first in the water. The
              second with someone who understands it.&rdquo;
            </p>
            <p className="text-[15px] leading-relaxed text-stone">
              Iridesca Studio is a small, independent collection out of
              Nuremberg. We search flea markets in Provence, estate sales in
              Milan, auctions in Vienna. What we find, we restore with care.
              What we cannot sell in good conscience, we do not sell.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <p className="micro-label mb-4">01 — Curate</p>
            <p className="text-[14px] leading-relaxed text-stone">
              Every piece is chosen individually. We don't buy because something
              is on trend. We buy because we'd want to own it ourselves.
            </p>
          </div>
          <div>
            <p className="micro-label mb-4">02 — Restore</p>
            <p className="text-[14px] leading-relaxed text-stone">
              With trusted restorers in Germany. We don't paper over — we let
              age remain visible. A piece of mother-of-pearl is allowed to look
              its hundred years.
            </p>
          </div>
          <div>
            <p className="micro-label mb-4">03 — Send</p>
            <p className="text-[14px] leading-relaxed text-stone">
              In recycled tissue paper, wrapped by hand, insured. Every order
              comes with a handwritten note. Yes, really.
            </p>
          </div>
        </div>

        <div className="text-center mt-24">
          <Link
            href="/shop"
            className="micro-label border-b border-ink pb-1 hover:text-stone transition-colors"
          >
            To the collection →
          </Link>
        </div>
      </div>
    </div>
  );
}
