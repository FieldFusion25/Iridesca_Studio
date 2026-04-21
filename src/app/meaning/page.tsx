import Link from 'next/link';

export const metadata = {
  title: 'What Iridesca Means — Iridesca Studio',
  description:
    'The name Iridesca comes from iridescent — a word for light that shifts, shimmers, and changes with the angle. An introduction to what we are and where our pieces come from.',
};

export default function MeaningPage() {
  return (
    <div className="px-6 md:px-10 pt-12 pb-24">
      <div className="max-w-[860px] mx-auto">

        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <p className="micro-label text-stone mb-4">The Name</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight">
            What Iridesca Means
          </h1>
        </div>

        {/* Etymology */}
        <div className="mb-16 md:mb-24">
          <p className="micro-label text-driftwood mb-8">The Name</p>
          <p className="font-serif text-2xl md:text-3xl leading-snug italic mb-8 text-ink">
            &ldquo;Iridesca&rdquo; is not a word you will find in any dictionary.
            It is one we made — from <em>iridescent</em>.
          </p>
          <p className="text-[15px] leading-relaxed text-stone">
            Iridescent describes something that shimmers with colour that
            changes depending on the angle — not because the object changes,
            but because the light does. That quality is what we have always
            been drawn to. The name is simply a description of the material.
          </p>
        </div>

        <div className="hairline mb-16 md:mb-24" />

        {/* Provenance */}
        <div className="mb-20 md:mb-28">
          <p className="micro-label text-driftwood mb-8">The Pieces</p>
          <p className="font-serif text-2xl md:text-3xl leading-snug italic mb-10 text-ink">
            Every piece in the collection is either a vintage find
            or made by hand — most from the workshops and markets
            of South-East Asia.
          </p>
          <p className="text-[15px] leading-relaxed text-stone mb-6">
            Mother-of-pearl has been worked in this part of the world for
            centuries. The craft knowledge lives in families, in small
            ateliers, in the hands of people who learned by watching and
            then by doing. We source directly and carefully — never at
            volume, never without knowing the provenance of what we carry.
          </p>
          <p className="text-[15px] leading-relaxed text-stone">
            We do not deal in copies, in quantity, or in the merely
            decorative. If a piece is here, it is because someone held it,
            considered it, and decided it deserved to continue.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/shop"
            className="micro-label border-b border-ink pb-1 hover:text-stone transition-colors"
          >
            To the collection →
          </Link>
        </div>

      </div>
    </div>
  );
}
