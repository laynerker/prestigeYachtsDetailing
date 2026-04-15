'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const t = useTranslations('Home');
    const locale = useLocale();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden bg-navy">
            {/* Parallax Background Image */}
            <motion.div style={{ y, opacity }} className="absolute inset-0">
                <Image
                    src="/assets/images/hero.png"
                    alt="Luxury Yacht"
                    fill
                    className="object-cover scale-105"
                    priority
                    quality={100}
                />
                {/* Refined Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/30 to-navy/90" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy to-transparent" />
            </motion.div>

            {/* Noise Overlay */}
            <div className="noise-overlay" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                    <span className="text-gold tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-6 block">
                        Prestige Yachts Detailing
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-gold mb-8 drop-shadow-2xl leading-[1.1] tracking-tight">
                        {t('title').split(' ').map((word, i) => (
                            <span key={i} className="inline-block mr-3 lg:mr-5">
                                {word}
                            </span>
                        ))}
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl font-light tracking-wide leading-relaxed"
                >
                    {t('subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link
                        href={`/${locale}/services`}
                        className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-medium text-white border border-white/20 rounded-full transition-all duration-500 hover:border-gold/50 bg-white/5 backdrop-blur-sm"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gold rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                        <span className="relative text-sm tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-gold-light">
                            {t('cta')}
                        </span>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 mb-4 overflow-hidden">
                    <motion.div
                        className="w-full h-1/2 bg-white"
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
            </motion.div>
        </section>
    );
}
