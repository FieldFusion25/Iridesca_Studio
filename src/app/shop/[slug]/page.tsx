import { notFound } from 'next/navigation';
import { products, findProduct } from '@/lib/products';
import ProductDetail from './ProductDetail';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return { title: 'Nicht gefunden — Iridesca Studio' };
  return {
    title: `${product.name} — Iridesca Studio`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
