import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="px-6 md:px-10 pt-12 pb-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <p className="micro-label text-stone mb-3">Atelier</p>
          <h1 className="font-serif text-4xl md:text-6xl">Ein kleines Haus</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
          <div className="relative aspect-[4/5] bg-shell overflow-hidden order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=85"
              alt="Atelier"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="font-serif text-2xl md:text-3xl leading-snug mb-6 italic">
              &bdquo;Jede Muschel hat zwei Leben. Das erste im Wasser. Das zweite
              bei jemandem, der sie versteht.&ldquo;
            </p>
            <p className="text-[15px] leading-relaxed text-stone">
              Iridesca Studio ist eine kleine, unabhängige Sammlung aus
              Nürnberg. Wir suchen auf Flohmärkten in der Provence, bei
              Haushaltsauflösungen in Mailand, auf Auktionen in Wien. Was wir
              finden, restaurieren wir mit Vorsicht. Was wir nicht guten
              Gewissens verkaufen können, verkaufen wir nicht.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <p className="micro-label mb-4">01 — Kuratieren</p>
            <p className="text-[14px] leading-relaxed text-stone">
              Jedes Stück wird einzeln ausgewählt. Wir kaufen nichts, weil es
              trendy ist. Wir kaufen, weil wir es selbst besitzen wollen
              würden.
            </p>
          </div>
          <div>
            <p className="micro-label mb-4">02 — Restaurieren</p>
            <p className="text-[14px] leading-relaxed text-stone">
              Mit geprüften Restauratoren in Deutschland. Wir patchen nicht
              über, wir lassen Alter sichtbar. Ein Perlmutt-Stück darf nach
              hundert Jahren aussehen.
            </p>
          </div>
          <div>
            <p className="micro-label mb-4">03 — Versenden</p>
            <p className="text-[14px] leading-relaxed text-stone">
              In recycelter Seidenpapierbox, von Hand verpackt, versichert.
              Jede Bestellung bekommt einen handgeschriebenen Zettel. Nein,
              wirklich.
            </p>
          </div>
        </div>

        <div className="text-center mt-24">
          <Link
            href="/shop"
            className="micro-label border-b border-ink pb-1 hover:text-stone transition-colors"
          >
            Zur Sammlung →
          </Link>
        </div>
      </div>
    </div>
  );
}
