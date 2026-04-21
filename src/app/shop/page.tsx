import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Shop — Iridesca Studio',
  description: 'The current collection, hand-picked and restored.',
};

export default function ShopPage() {
  return (
    <div className="px-4 md:px-8 pt-6 pb-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="micro-label text-stone mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl">Currently in the Studio</h1>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-serif text-2xl text-stone">
              The vitrine is empty at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
