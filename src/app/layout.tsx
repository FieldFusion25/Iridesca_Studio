import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Pinyon_Script } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Coquille Vintage — Muscheltaschen & Vintage Objekte aus Perlmutt',
  description:
    'Kuratierte Vintage-Sammlung: Muscheltaschen, Perlmutt-Löffel, seltene Objekte. Jedes Stück handverlesen.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable} ${pinyon.variable}`}>
      <body className="relative">
        <Header />
        <CartDrawer />
        <main className="pt-[128px] md:pt-[148px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
