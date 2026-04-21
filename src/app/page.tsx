import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="relative -mt-[128px] md:-mt-[148px] h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <Image
        src="/img/hero.jpeg"
        alt="Iridesca Studio — Perlmutt & Muschel"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="object-cover animate-hero-zoom"
      />

      {/* Editorial darkening — top for header, bottom for CTA, plus a soft full vignette */}
      <div className="absolute inset-0 bg-ink/15 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-48 md:h-64 bg-gradient-to-b from-ink/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-ink/80 via-ink/40 to-transparent pointer-events-none" />

      <div className="absolute inset-x-0 bottom-[16%] md:bottom-[20%] flex flex-col items-center text-center px-6 text-pearl">
        <span className="micro-label text-pearl/75 animate-hero-fade [animation-delay:500ms] opacity-0">
          Nürnberg · Seit 2024
        </span>

        <h1 className="font-serif text-[34px] md:text-6xl leading-[1.08] mt-5 md:mt-7 max-w-[720px] animate-hero-fade [animation-delay:800ms] opacity-0 drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
          Perlmutt, handverlesen.<br />
          <span className="italic text-pearl/90">Zeitlos, zerbrechlich, wahr.</span>
        </h1>

        <Link
          href="/shop"
          className="group mt-10 md:mt-14 inline-flex items-center gap-4 px-10 md:px-12 py-4 bg-ink text-pearl micro-label hover:bg-pearl hover:text-ink transition-colors duration-500 animate-hero-fade [animation-delay:1100ms] opacity-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
        >
          <Image
            src="/img/hero2.jpeg"
            alt="Iridesca Studio"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.02]"
          />
        </Link>
      </div>
    </section>
  );
}
