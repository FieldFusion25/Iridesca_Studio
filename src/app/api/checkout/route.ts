import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { findProduct } from '@/lib/products';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const secret = process.env.STRIPE_SECRET_KEY;
    if (!secret) {
      return NextResponse.json(
        { error: 'Stripe is not configured. STRIPE_SECRET_KEY is missing.' },
        { status: 500 }
      );
    }

    const stripe = new Stripe(secret);

    const body = await req.json();
    const items: { slug: string; quantity: number }[] = body.items ?? [];

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty.' }, { status: 400 });
    }

    const line_items = items
      .map((i) => {
        const p = findProduct(i.slug);
        if (!p || p.soldOut) return null;
        return {
          price_data: {
            currency: p.currency,
            product_data: {
              name: p.name,
              description: p.description.slice(0, 250),
              images: [p.images[0]],
              metadata: { slug: p.slug },
            },
            unit_amount: p.price,
          },
          quantity: Math.max(1, Math.min(i.quantity, 10)),
        };
      })
      .filter(Boolean) as Stripe.Checkout.SessionCreateParams.LineItem[];

    if (line_items.length === 0) {
      return NextResponse.json(
        { error: 'None of the products are available.' },
        { status: 400 }
      );
    }

    const origin =
      process.env.NEXT_PUBLIC_URL ??
      req.headers.get('origin') ??
      'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      shipping_address_collection: {
        allowed_countries: [
          'DE', 'AT', 'CH', 'FR', 'IT', 'ES', 'NL', 'BE', 'LU',
          'DK', 'SE', 'NO', 'FI', 'PL', 'CZ', 'GB', 'IE', 'PT',
        ],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 890, currency: 'eur' },
            display_name: 'Shipping — Germany',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 2 },
              maximum: { unit: 'business_day', value: 4 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 1890, currency: 'eur' },
            display_name: 'Shipping — EU & UK',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 4 },
              maximum: { unit: 'business_day', value: 8 },
            },
          },
        },
      ],
      locale: 'en',
      billing_address_collection: 'required',
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[checkout]', err);
    return NextResponse.json(
      { error: 'Could not create a checkout session.' },
      { status: 500 }
    );
  }
}
