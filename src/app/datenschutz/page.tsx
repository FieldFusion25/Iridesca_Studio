export default function Datenschutz() {
  return (
    <div className="px-6 md:px-10 pt-12 pb-24">
      <div className="max-w-2xl mx-auto">
        <p className="micro-label text-stone mb-3">Datenschutz</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-10">Datenschutzerklärung</h1>
        <div className="text-[15px] leading-relaxed text-stone space-y-6">
          <p>
            Diese Seite ist ein Platzhalter. Vor Go-Live muss hier eine vollständige
            Datenschutzerklärung nach DSGVO stehen, die insbesondere folgende
            Verarbeitungen abdeckt:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Bestellabwicklung via Stripe (Drittland-Transfer USA)</li>
            <li>Server-Logs des Hosting-Providers (Vercel)</li>
            <li>Kontaktformular</li>
            <li>Cookies / Local Storage (Warenkorb)</li>
          </ul>
          <p>
            Empfehlung: Generator wie{' '}
            <a
              href="https://www.e-recht24.de/muster-datenschutzerklaerung.html"
              className="underline hover:text-ink"
              target="_blank"
              rel="noopener"
            >
              e-recht24
            </a>{' '}
            oder anwaltliche Prüfung.
          </p>
        </div>
      </div>
    </div>
  );
}
