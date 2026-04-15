import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ImageComparison from '@/components/ImageComparison';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';
import ServiceButton from '@/components/ServiceButton';

export default async function Services({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('Services');
    const tContact = await getTranslations('Contact');
    const itemsServices = [
        {
            title: "Wash Down",
            id: "washDown",
            imageBefore: "/assets/images/services/wash_down_antes.webp",
            imageAfter: "/assets/images/services/wash_down_despues.webp",
            itemCount: 4
        },
        {
            title: "Premium Detailed Wash",
            id: "premiumDetailedWash",
            imageBefore: "/assets/images/services/Detailing_antes.webp",
            imageAfter: "/assets/images/services/Detailing_despues.webp",
            itemCount: 6
        },
        {
            title: "Teak Cleaning & Treatment",
            id: "teakCleaning",
            imageBefore: "/assets/images/services/Teak_antes.webp",
            imageAfter: "/assets/images/services/Teak_despues.webp",
            itemCount: 3
        },
        {
            title: "Metal Polish",
            id: "metalPolish",
            imageBefore: "/assets/images/services/metal_polish_antes.webp",
            imageAfter: "/assets/images/services/metal_polish_despues.webp",
            itemCount: 3
        },
        {
            title: "Engine Room Care",
            id: "engineRoomCare",
            imageBefore: "/assets/images/services/engine_room_antes.webp",
            imageAfter: "/assets/images/services/engine_room_despues.webp",
            itemCount: 3
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
                                    <h3 className="text-2xl font-medium text-gray-800 mb-4">{t(`items.${item.id}.description`)}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {t('pricingNote')}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {Array.from({ length: item.itemCount }).map((_, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700">
                                                <span className="w-2 h-2 rounded-full bg-gold"></span>
                                                {t(`items.${item.id}.items.${i}`)}
                                            </li>
                                        ))}
                                    </ul>
                                    <ServiceButton 
                                        serviceTitle={item.title}
                                        whatsappText={encodeURIComponent(tContact('defaultMessage', { service: item.title }))}
                                        buttonText={t('requestAppointment')}
                                        locale={locale}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full md:w-1/2">
                                    <h2 className="text-3xl font-serif font-bold text-navy mb-6 border-b-2 border-gold inline-block pb-2">{item.title}</h2>
                                    <h3 className="text-2xl font-medium text-gray-800 mb-4">{t(`items.${item.id}.description`)}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {t('pricingNote')}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {Array.from({ length: item.itemCount }).map((_, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700">
                                                <span className="w-2 h-2 rounded-full bg-gold"></span>
                                                {t(`items.${item.id}.items.${i}`)}
                                            </li>
                                        ))}
                                    </ul>
                                    <ServiceButton 
                                        serviceTitle={item.title}
                                        whatsappText={encodeURIComponent(tContact('defaultMessage', { service: item.title }))}
                                        buttonText={t('requestAppointment')}
                                        locale={locale}
                                    />
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
