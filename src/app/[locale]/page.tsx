import { setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  // Await the params to get the locale
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="flex min-h-screen flex-col bg-navy">
      <Navigation locale={locale} />
      <Hero />
      <FeaturedServices />

      {/* Placeholder for other sections */}
      <div id="fleet" className="min-h-[50vh] bg-navy flex flex-col items-center justify-center relative overflow-hidden border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/50 pointer-events-none" />
        <p className="text-gold tracking-[0.4em] uppercase text-xs mb-4 opacity-50 relative z-10">Exclusive Collection</p>
        <h2 className="text-4xl md:text-5xl font-serif text-white/20 relative z-10 tracking-widest text-center px-4">THE FLEET<br /><span className="text-xl md:text-2xl mt-4 block">Coming Soon</span></h2>
      </div>

      <Footer locale={locale} />
    </main>
  );
}
