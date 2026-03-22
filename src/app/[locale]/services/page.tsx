import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ImageComparison from '@/components/ImageComparison';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function Services({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('Services');
    const itemsServices = [
        {
            title: "Wash Down",
            description: "Complete wash using professional marine-grade products, safe for all surfaces.",
            imageBefore: "/assets/images/services/wash_down_antes.webp",
            imageAfter: "/assets/images/services/wash_down_despues.webp",
            items: [
                "Hull",
                "Deck",
                "Removal of salt and marine residue",
                "Stainless steel"
            ]
        },
        {
            title: "Premium Detailed Wash",
            description: "An in-depth premium service focused on flawless finishes and impeccable presentation.",
            imageBefore: "/assets/images/services/Detailing_antes.webp",
            imageAfter: "/assets/images/services/Detailing_despues.webp",
            items: [
                "Complete exterior Wash",
                "Hand drying",
                "Compartment cleaning",
                "Cushions",
                "Strainer cleaning",
                "Water tank refill"
            ]
        },
        {
            title: "Teak Cleaning & Treatment",
            description: "Professional care for teak decks using specialized marine-grade products.",
            imageBefore: "/assets/images/services/Teak_antes.webp",
            imageAfter: "/assets/images/services/Teak_despues.webp",
            items: [
                "Deep cleaning",
                "Removal of dirt, salt and marine residue",
                "Natural color restoration (without damaging the wood)"
            ]
        },
        {
            title: "Metal Polish",
            description: "Professional restoration and protection of stainless steel surfaces.",
            imageBefore: "/assets/images/services/metal_polish_antes.webp",
            imageAfter: "/assets/images/services/metal_polish_despues.webp",
            items: [
                "Removal of stains and light oxidation",
                "Hand polishing",
                "Protection against marine corrosion"
            ]
        },
        {
            title: "Engine Room Care",
            description: "Careful cleaning and presentation of machinery spaces, respecting all mechanical and safety standars",
            imageBefore: "/assets/images/services/engine_room_antes.webp",
            imageAfter: "/assets/images/services/engine_room_despues.webp",
            items: [
                "Surface cleaning",
                "Oil residue control",
                "Respect for all mechanical components"
            ]
        }
    ]

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navigation locale={locale} />
            <PageHeader title={t('headerTitle')} imageSrc="/assets/images/hero.png" />

            {itemsServices.map((item, index) => (
                <section key={index} id={item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')} className="container mx-auto px-4 py-5 scroll-mt-32">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
                        {index % 2 === 0 ? (
                            <>
                                <div className="w-full md:w-1/2 h-[400px] bg-gray-200 rounded-lg relative overflow-hidden shadow-xl">
                                    <ImageComparison
                                        imageBefore={item.imageBefore}
                                        imageAfter={item.imageAfter}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h2 className="text-3xl font-serif font-bold text-navy mb-6 border-b-2 border-gold inline-block pb-2">{item.title}</h2>
                                    <h3 className="text-2xl font-medium text-gray-800 mb-4">{item.description}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Pricing subject to yacht size and condition.
                                        Weekly / Bi-weekly packages.
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {item.items.map(feature => (
                                            <li key={feature} className="flex items-center gap-3 text-gray-700">
                                                <span className="w-2 h-2 rounded-full bg-gold"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={`/${locale}/contact?service=${encodeURIComponent(item.title)}`} className="inline-block px-8 py-3 bg-navy text-white font-serif tracking-wide rounded hover:bg-gold transition-colors drop-shadow-md">
                                        {t('requestAppointment')}
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full md:w-1/2">
                                    <h2 className="text-3xl font-serif font-bold text-navy mb-6 border-b-2 border-gold inline-block pb-2">{item.title}</h2>
                                    <h3 className="text-2xl font-medium text-gray-800 mb-4">{item.description}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Pricing subject to yacht size and condition.
                                        Weekly / Bi-weekly packages.
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {item.items.map(feature => (
                                            <li key={feature} className="flex items-center gap-3 text-gray-700">
                                                <span className="w-2 h-2 rounded-full bg-gold"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={`/${locale}/contact?service=${encodeURIComponent(item.title)}`} className="inline-block px-8 py-3 bg-navy text-white font-serif tracking-wide rounded hover:bg-gold transition-colors drop-shadow-md">
                                        {t('requestAppointment')}
                                    </Link>
                                </div>
                                <div className="w-full md:w-1/2 h-[400px] bg-gray-200 rounded-lg relative overflow-hidden shadow-xl">
                                    <ImageComparison
                                        imageBefore={item.imageBefore}
                                        imageAfter={item.imageAfter}
                                        alt={item.title}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </section>
            ))}
            <Footer locale={locale} />
        </main>
    );
}
