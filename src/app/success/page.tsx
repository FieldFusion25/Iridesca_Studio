'use client';

import Link from 'next/link';
import { Suspense, useEffect } from 'react';
import { useCart } from '@/store/cart';

function SuccessContent() {
  const clear = useCart((s) => s.clear);

  // Clear cart on arrival (Stripe has taken the payment)
  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-xl mx-auto text-center">
        <p className="micro-label text-stone mb-6">Order confirmed</p>
        <h1 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
          Thank you.
          <br />
          <em className="italic font-light">Truly.</em>
        </h1>
        <p className="text-[15px] leading-relaxed text-stone mb-10">
          Your order has reached us. A confirmation is on its way to the email
          address you provided. Every piece is packed personally and ships
          within three business days from Nuremberg.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            href="/shop"
            className="micro-label border-b border-ink pb-1 hover:text-stone transition-colors"
          >
            Back to the collection
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading…</div>}>
      <SuccessContent />
    </Suspense>
  );
}
