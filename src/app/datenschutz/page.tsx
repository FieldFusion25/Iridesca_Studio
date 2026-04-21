export default function Privacy() {
  return (
    <div className="px-6 md:px-10 pt-12 pb-24">
      <div className="max-w-2xl mx-auto">
        <p className="micro-label text-stone mb-3">Privacy</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-10">Privacy Policy</h1>
        <div className="text-[15px] leading-relaxed text-stone space-y-6">
          <p>
            This page is a placeholder. Before launch, a complete GDPR privacy
            policy must be published here, covering at minimum the following
            processing activities:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Order processing via Stripe (third-country transfer to the USA)</li>
            <li>Server logs of the hosting provider (Vercel)</li>
            <li>Contact form</li>
            <li>Cookies / local storage (shopping cart)</li>
          </ul>
          <p>
            Recommendation: use a generator such as{' '}
            <a
              href="https://www.e-recht24.de/muster-datenschutzerklaerung.html"
              className="underline hover:text-ink"
              target="_blank"
              rel="noopener"
            >
              e-recht24
            </a>{' '}
            or have it reviewed by a lawyer.
          </p>
        </div>
      </div>
    </div>
  );
}
