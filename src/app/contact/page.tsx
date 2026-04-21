'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — in production connect to your mail service
    setSent(true);
  };

  return (
    <div className="px-6 md:px-10 pt-12 pb-24">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <p className="micro-label text-stone mb-3">Kontakt</p>
          <h1 className="font-serif text-4xl md:text-6xl">Schreiben Sie uns</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Info */}
          <div>
            <p className="text-[15px] leading-relaxed text-stone mb-8">
              Fragen zu einem Stück? Auf der Suche nach etwas Bestimmtem?
              Schreiben Sie uns — wir antworten innerhalb von zwei Werktagen,
              persönlich.
            </p>

            <div className="space-y-6">
              <div>
                <p className="micro-label mb-1">E-Mail</p>
                <a
                  href="mailto:hallo@coquille-vintage.de"
                  className="font-serif text-lg hover:text-stone transition-colors"
                >
                  hallo@coquille-vintage.de
                </a>
              </div>
              <div>
                <p className="micro-label mb-1">Atelier</p>
                <p className="font-serif text-lg leading-tight">
                  Nürnberg, Deutschland
                  <br />
                  <span className="text-stone text-[15px]">Besuche nach Vereinbarung</span>
                </p>
              </div>
              <div>
                <p className="micro-label mb-1">Antiquariat & Sourcing</p>
                <p className="text-[14px] leading-relaxed text-stone">
                  Sie haben etwas, das zu uns passen könnte? Wir kaufen
                  einzelne Stücke und ganze Nachlässe im Bereich Muschel,
                  Perlmutt und Vintage-Accessoires.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {sent ? (
              <div className="bg-shell p-8 text-center">
                <p className="font-serif text-2xl mb-2">Danke.</p>
                <p className="text-sm text-stone">Wir melden uns in Kürze.</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="micro-label block mb-2">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-ink/30 py-2 focus:border-ink outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="micro-label block mb-2">E-Mail</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b border-ink/30 py-2 focus:border-ink outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="micro-label block mb-2">Nachricht</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-ink/30 py-2 focus:border-ink outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 self-start bg-ink text-pearl px-8 py-3 micro-label hover:bg-stone transition-colors"
                >
                  Nachricht senden
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
