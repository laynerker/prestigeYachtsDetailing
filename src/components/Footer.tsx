'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ locale }: { locale: string }) {
    const t = useTranslations('Footer');
    const navT = useTranslations('Navigation'); // Reuse nav translations

    return (
        <footer className="bg-navy relative overflow-hidden pt-24 pb-8 border-t border-gold/10">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20 text-center md:text-left">
                    
                    {/* Col 1: Brand & Slogan */}
                    <div className="col-span-1 md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
                        <Link href={`/${locale}`} className="transform hover:scale-105 transition-transform duration-500 ease-out mb-8 inline-block">
                            <Image
                                src="/assets/images/logoFooter.png"
                                alt="Prestige Yacht Detailing"
                                width={260}
                                height={90}
                                className="h-28 md:h-32 w-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                            />
                        </Link>

                        {/* Gradient divider: centered on mobile, left-aligned on desktop */}
                        <div className="w-56 md:w-48 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent md:from-gold/60 md:via-gold/30 md:to-transparent mb-8"></div>
                        
                        <p className="text-gold/80 leading-[2] text-sm lg:text-base font-light tracking-wide max-w-md mx-auto md:mx-0">
                            {t('slogan')}
                        </p>
                    </div>

                    {/* Col 2: Links */}
                    <div className="col-span-1 md:col-span-3 flex flex-col items-center md:items-start md:pl-8 lg:pl-16">
                        <p className="text-white/90 uppercase tracking-[0.2em] text-sm font-sans font-semibold mb-8 border-b border-gold/30 pb-2 hidden md:block w-full">{t('quickLinks')}</p>
                        <ul className="flex flex-col md:flex-col gap-6 md:gap-4 items-center md:items-start">
                            {['home', 'about', 'services', 'contact'].map((item) => (
                                <li key={item}>
                                    <Link 
                                        href={`/${locale}${item === 'home' ? '' : `/${item}`}`} 
                                        className="text-gold/80 hover:text-white uppercase tracking-[0.15em] text-xs md:text-sm font-medium transition-colors duration-300 relative group py-1 block"
                                    >
                                        {navT(item)}
                                        <span className="absolute bottom-0 left-1/2 md:left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0 opacity-50"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Contact Icons */}
                    <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start md:pl-8 lg:pl-16">
                        <p className="text-white/90 uppercase tracking-[0.2em] text-sm font-sans font-semibold mb-8 border-b border-gold/30 pb-2 hidden md:block w-full">{t('contact')}</p>
                        <ul className="flex flex-row md:flex-row flex-wrap items-center justify-center md:justify-start gap-4 lg:gap-6">
                            <li>
                                <a href="tel:+19548534995" title="+1 (954) 853-4995" className="block group" aria-label="Phone Number">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy group-hover:border-gold transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                        <Phone size={22} className="md:w-6 md:h-6 stroke-[1.5]" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@prestigeyachtsdetailing.com" title="contact@prestigeyachtsdetailing.com" className="block group" aria-label="Email Address">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy group-hover:border-gold transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                        <Mail size={22} className="md:w-6 md:h-6 stroke-[1.5]" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <Link href={`/${locale}/contact`} className="block group" title="Miami · Miami Beach · South Florida · Fort Lauderdale" aria-label="Location">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy group-hover:border-gold transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                        <MapPin size={22} className="md:w-6 md:h-6 stroke-[1.5]" />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest text-center md:text-left w-full">
                        {t('copyright')}
                    </div>
                </div>
            </div>
        </footer>
    );
}
