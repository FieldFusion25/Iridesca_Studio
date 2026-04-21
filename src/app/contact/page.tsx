'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — in production, connect to your mail service
    setSent(true);
  };

  return (
    <div className="px-6 md:px-10 pt-12 pb-24">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <p className="micro-label text-stone mb-3">Contact</p>
          <h1 className="font-serif text-4xl md:text-6xl">Write to us</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Info */}
          <div>
            <p className="text-[15px] leading-relaxed text-stone mb-8">
              Questions about a specific piece? Looking for something in
              particular? Write to us — we reply within two business days,
              personally.
            </p>

            <div className="space-y-6">
              <div>
                <p className="micro-label mb-1">Email</p>
                <a
                  href="mailto:hallo@iridesca-studio.de"
                  className="font-serif text-lg hover:text-stone transition-colors"
                >
                  hallo@iridesca-studio.de
                </a>
              </div>
              <div>
                <p className="micro-label mb-1">Studio</p>
                <p className="font-serif text-lg leading-tight">
                  Nuremberg, Germany
                  <br />
                  <span className="text-stone text-[15px]">Visits by appointment</span>
                </p>
              </div>
              <div>
                <p className="micro-label mb-1">Sourcing & estates</p>
                <p className="text-[14px] leading-relaxed text-stone">
                  Do you own something that might belong here? We purchase
                  individual pieces and whole estates in the fields of shell,
                  mother-of-pearl and vintage accessories.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {sent ? (
              <div className="bg-shell p-8 text-center">
                <p className="font-serif text-2xl mb-2">Thank you.</p>
                <p className="text-sm text-stone">We'll be in touch shortly.</p>
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
                  <label className="micro-label block mb-2">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b border-ink/30 py-2 focus:border-ink outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="micro-label block mb-2">Message</label>
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
                  Send message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
