export default function Shipping() {
  return (
    <div className="px-6 md:px-10 pt-12 pb-24">
      <div className="max-w-2xl mx-auto">
        <p className="micro-label text-stone mb-3">Shipping & Returns</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-12">All about delivery</h1>
        <div className="space-y-10 text-[15px] leading-relaxed text-stone">
          <section>
            <h2 className="font-serif text-2xl text-ink mb-3">Shipping</h2>
            <p>
              All orders ship within three business days from Nuremberg.
              Insured shipping within Germany: €8.90. EU & UK: €18.90.
              Delivery times range from 2–8 business days depending on
              destination.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink mb-3">Packaging</h2>
            <p>
              Every piece is wrapped by hand in recycled tissue paper, placed
              in a sturdy box and accompanied by a handwritten note. We avoid
              plastic wherever possible.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink mb-3">Returns</h2>
            <p>
              You have 14 days from receipt of the item to return it. Drop us a
              short email at hallo@iridesca-studio.de — we'll take care of the
              rest. Return shipping is at the buyer's expense, unless the item
              arrives damaged or flawed.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink mb-3">Vintage condition</h2>
            <p>
              Every piece is vintage or antique. Light signs of wear are part of
              the story — we describe each item as honestly as possible and
              show details in the photographs. Questions before buying? Just
              write to us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
