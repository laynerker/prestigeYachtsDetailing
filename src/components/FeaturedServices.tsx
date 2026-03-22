'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function FeaturedServices() {
    const locale = useLocale();

    const services = [
        {
            title: 'Wash Down',
            image: '/assets/images/services/wash_down_despues.webp',
            id: 'wash-down'
        },
        {
            title: 'Premium Detailed Wash',
            image: '/assets/images/services/Detailing_despues.webp',
            id: 'premium-detailed-wash'
        },
        {
            title: 'Teak Cleaning & Treatment',
            image: '/assets/images/services/Teak_despues.webp',
            id: 'teak-cleaning-treatment'
        }
    ];

    return (
        <section className="py-24 bg-navy relative border-y border-white/5 overflow-hidden">
            {/* Background elements for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#07101e] to-navy pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Optional subtle header to anchor the section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <span className="h-[1px] w-12 bg-gold/30"></span>
                        <p className="text-gold tracking-[0.3em] text-xs font-semibold uppercase">Excellence</p>
                        <span className="h-[1px] w-12 bg-gold/30"></span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: i * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="group flex flex-col items-center"
                        >
                            <Link
                                href={`/${locale}/services#${service.id}`}
                                className="w-full relative flex flex-col items-center outline-none focus-visible:ring-1 focus-visible:ring-gold rounded-sm group cursor-pointer"
                            >
                                {/* Image Container with Elegant Framing */}
                                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#0a1526] mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5 group-hover:ring-gold/30 transition-all duration-700">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />

                                    <div className="absolute inset-4 border border-white/5 group-hover:border-gold/20 transition-colors duration-700 z-20 pointer-events-none" />

                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        unoptimized
                                        className="object-cover transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-1000 ease-[0.21,0.47,0.32,0.98]"
                                    />

                                    {/* Decorative corners */}
                                    <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-gold/0 group-hover:border-gold/60 transition-colors duration-700 z-20 pointer-events-none" />
                                    <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-gold/0 group-hover:border-gold/60 transition-colors duration-700 z-20 pointer-events-none" />
                                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-gold/0 group-hover:border-gold/60 transition-colors duration-700 z-20 pointer-events-none" />
                                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-gold/0 group-hover:border-gold/60 transition-colors duration-700 z-20 pointer-events-none" />
                                </div>

                                {/* Title container */}
                                <div className="text-center relative w-full translate-y-1 group-hover:translate-y-0 transition-transform duration-500 mt-4">
                                    <h3 className="text-xl lg:text-[1.65rem] font-serif tracking-wide transition-colors duration-500 drop-shadow-md" style={{ color: 'var(--color-gold)' }}>
                                        {service.title}
                                    </h3>
                                    <div className="h-[1px] w-12 group-hover:w-24 bg-gold/50 mx-auto mt-4 transition-all duration-700 ease-[0.21,0.47,0.32,0.98]" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
