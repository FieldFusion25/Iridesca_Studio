export default function Versand() {
  return (
    <div className="px-6 md:px-10 pt-12 pb-24">
      <div className="max-w-2xl mx-auto">
        <p className="micro-label text-stone mb-3">Versand & Rückgabe</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-12">Alles zum Versand</h1>
        <div className="space-y-10 text-[15px] leading-relaxed text-stone">
          <section>
            <h2 className="font-serif text-2xl text-ink mb-3">Versand</h2>
            <p>
              Alle Bestellungen werden innerhalb von drei Werktagen aus Nürnberg
              versendet. Versicherter Versand innerhalb Deutschlands: 8,90 €.
              EU & UK: 18,90 €. Lieferzeit je nach Land 2–8 Werktage.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink mb-3">Verpackung</h2>
            <p>
              Jedes Stück wird von Hand in recyceltem Seidenpapier verpackt,
              in eine feste Schachtel gesetzt und mit einem handgeschriebenen
              Zettel versehen. Wir vermeiden Plastik, wo es geht.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink mb-3">Rückgabe</h2>
            <p>
              Sie haben 14 Tage Widerrufsrecht ab Erhalt der Ware. Schreiben
              Sie uns eine kurze E-Mail an hallo@coquille-vintage.de — wir
              kümmern uns um den Rest. Rücksendekosten trägt der Käufer, außer
              bei Transportschäden oder Mängeln.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink mb-3">Vintage-Zustand</h2>
            <p>
              Alle Stücke sind Vintage oder Antik. Leichte Gebrauchsspuren
              gehören dazu und sind Teil ihres Charakters — wir beschreiben
              jedes Stück so ehrlich wie möglich und zeigen Details auf den
              Fotos. Bei Fragen vor Kauf: schreiben Sie uns.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
