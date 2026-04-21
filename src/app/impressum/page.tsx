export default function Impressum() {
  return (
    <div className="px-6 md:px-10 pt-12 pb-24">
      <div className="max-w-2xl mx-auto">
        <p className="micro-label text-stone mb-3">Impressum</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-10">Angaben gemäß § 5 TMG</h1>
        <div className="prose text-[15px] leading-relaxed text-stone space-y-6">
          <p>
            Iridesca Studio<br />
            [Straße Hausnummer]<br />
            90XXX Nürnberg<br />
            Deutschland
          </p>
          <p>
            <span className="micro-label text-ink block mb-1">Vertreten durch</span>
            [Name Inhaber:in]
          </p>
          <p>
            <span className="micro-label text-ink block mb-1">Kontakt</span>
            E-Mail: hallo@iridesca-studio.de
          </p>
          <p>
            <span className="micro-label text-ink block mb-1">Umsatzsteuer-ID</span>
            [USt-IdNr. eintragen]
          </p>
          <p>
            <span className="micro-label text-ink block mb-1">Verantwortlich für den Inhalt</span>
            [Name, Anschrift wie oben]
          </p>
          <p className="text-xs text-stone/70 pt-8 border-t border-ink/10">
            Platzhalter — bitte vor Go-Live vervollständigen.
          </p>
        </div>
      </div>
    </div>
  );
}
