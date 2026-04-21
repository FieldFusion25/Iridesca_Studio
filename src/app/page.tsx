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

      <div className="absolute inset-x-0 top-0 h-44 md:h-56 bg-gradient-to-b from-pearl/50 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-ink/70 via-ink/25 to-transparent pointer-events-none" />

      <div className="absolute inset-x-0 bottom-[14%] md:bottom-[18%] flex flex-col items-center text-center px-6 text-pearl">
        <span className="micro-label text-pearl/80 animate-hero-fade [animation-delay:500ms] opacity-0">
          Nürnberg · Seit 2024
        </span>

        <h1 className="font-serif text-[34px] md:text-6xl leading-[1.08] mt-5 md:mt-7 max-w-[720px] animate-hero-fade [animation-delay:800ms] opacity-0">
          Perlmutt, handverlesen.<br />
          <span className="italic text-pearl/90">Zeitlos, zerbrechlich, wahr.</span>
        </h1>

        <Link
          href="/shop"
          className="group mt-10 md:mt-14 inline-flex items-center gap-4 px-10 md:px-12 py-4 border border-pearl/70 text-pearl micro-label backdrop-blur-[2px] hover:bg-pearl hover:text-ink hover:border-pearl transition-all duration-500 animate-hero-fade [animation-delay:1100ms] opacity-0"
        >
          Explore now
          <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
        </Link>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-pearl/70 animate-hero-fade [animation-delay:1500ms] opacity-0">
        <span className="text-[10px] tracking-[0.35em] uppercase mb-2">Scroll</span>
        <span className="block w-px h-8 bg-pearl/50 animate-scroll-line origin-top" />
      </div>
    </section>
  );
}
