export default function Imprint() {
  return (
    <div className="px-6 md:px-10 pt-12 pb-24">
      <div className="max-w-2xl mx-auto">
        <p className="micro-label text-stone mb-3">Imprint</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-10">
          Information pursuant to § 5 TMG
        </h1>
        <div className="prose text-[15px] leading-relaxed text-stone space-y-6">
          <p>
            Iridesca Studio<br />
            [Street & number]<br />
            90XXX Nuremberg<br />
            Germany
          </p>
          <p>
            <span className="micro-label text-ink block mb-1">Represented by</span>
            [Name of owner]
          </p>
          <p>
            <span className="micro-label text-ink block mb-1">Contact</span>
            Email: hallo@iridesca-studio.de
          </p>
          <p>
            <span className="micro-label text-ink block mb-1">VAT ID</span>
            [VAT ID to be added]
          </p>
          <p>
            <span className="micro-label text-ink block mb-1">Responsible for content</span>
            [Name, address as above]
          </p>
          <p className="text-xs text-stone/70 pt-8 border-t border-ink/10">
            Placeholder — to be completed before launch.
          </p>
        </div>
      </div>
    </div>
  );
}
