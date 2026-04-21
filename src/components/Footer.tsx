import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-ink/10 bg-pearl">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 text-center">
        <div className="micro-label text-stone mb-5 space-y-1.5">
          <p>+49 911 — AUF ANFRAGE</p>
          <a
            href="mailto:hallo@coquille-vintage.de"
            className="hover:text-ink transition-colors"
          >
            hallo@coquille-vintage.de
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 micro-label text-stone">
          <Link href="/versand" className="hover:text-ink transition-colors">
            Versand / Rückgabe
          </Link>
          <Link href="/contact" className="hover:text-ink transition-colors">
            Kontakt
          </Link>
          <Link href="/about" className="hover:text-ink transition-colors">
            Atelier
          </Link>
          <Link href="/impressum" className="hover:text-ink transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-ink transition-colors">
            Datenschutz
          </Link>
        </nav>

        <p className="mt-8 text-[11px] tracking-[0.2em] uppercase text-stone/70">
          © {new Date().getFullYear()} Coquille Vintage
        </p>
      </div>
    </footer>
  );
}
