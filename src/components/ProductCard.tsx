import Link from 'next/link';
import Image from 'next/image';
import { Product, formatPrice } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  const primary = product.images[0];
  const secondary = product.images[1] ?? product.images[0];

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block product-image-fade"
    >
      <div className="relative aspect-[4/5] bg-shell overflow-hidden">
        <Image
          src={primary}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="primary object-cover"
        />
        <Image
          src={secondary}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="secondary object-cover opacity-0"
        />
        {product.soldOut && (
          <div className="absolute top-4 left-4 bg-pearl/90 micro-label px-3 py-1">
            sold out
          </div>
        )}
        {product.onSale && !product.soldOut && (
          <div className="absolute top-4 left-4 bg-ink text-pearl micro-label px-3 py-1">
            sale
          </div>
        )}
      </div>
      <div className="mt-3 text-center">
        <h3 className="font-serif text-[17px] md:text-[18px] leading-tight text-ink">
          {product.name}
        </h3>
        <div className="mt-1 text-[13px] text-stone">
          {product.onSale && product.originalPrice ? (
            <>
              <span className="line-through mr-2">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-ink">{formatPrice(product.price)}</span>
            </>
          ) : (
            formatPrice(product.price)
          )}
        </div>
      </div>
    </Link>
  );
}
