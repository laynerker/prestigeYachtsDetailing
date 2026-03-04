'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Navigation({ locale }: { locale: string }) {
    const t = useTranslations('Navigation');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: `/${locale}`, label: t('home') },
        { href: `/${locale}/about`, label: t('about') },
        { href: `/${locale}/services`, label: t('services') },
        { href: `/${locale}/contact`, label: t('contact') },
    ];

    function cn(...inputs: (string | undefined | null | false)[]) {
        return twMerge(clsx(inputs));
    }

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'es' : 'en';
        const path = window.location.pathname;
        let newPath = path;
        if (path.startsWith('/en')) {
            newPath = path.replace('/en', '/es');
        } else if (path.startsWith('/es')) {
            newPath = path.replace('/es', '/en');
        } else {
            const parts = path.split('/');
            if (parts[1] === locale) {
                parts[1] = newLocale;
                newPath = parts.join('/');
            } else {
                newPath = `/${newLocale}${path}`;
            }
        }
        window.location.href = newPath;
    };

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                isScrolled ? 'bg-navy/95 backdrop-blur-md py-3 md:py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-4 md:py-6'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href={`/${locale}`} className="relative z-50 block" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                        src="/assets/images/logo.png"
                        alt="Prestige Yacht Detailing"
                        width={240}
                        height={80}
                        className={cn(
                            "w-auto object-contain transition-all duration-500",
                            isScrolled ? "h-10 md:h-14" : "h-12 md:h-20"
                        )}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gold hover:text-white transition-colors text-sm font-medium uppercase tracking-widest"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button 
                        onClick={toggleLanguage} 
                        className="text-gold hover:text-white transition-colors flex items-center gap-1.5 ml-4 border border-gold/30 hover:border-white/40 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider"
                    >
                        <Globe size={14} />
                        <span className="uppercase">{locale}</span>
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gold z-50 p-2 hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={cn(
                        'fixed inset-0 bg-navy/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden',
                        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                    )}
                >
                    <nav className="flex flex-col items-center gap-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-gold text-3xl font-serif hover:text-white transition-all duration-300 transform",
                                    isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                )}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        <div className={cn(
                            "mt-12 transition-all duration-500 transform",
                            isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        )}
                        style={{ transitionDelay: `${navLinks.length * 100}ms` }}
                        >
                            <button 
                                onClick={toggleLanguage} 
                                className="text-gold flex items-center gap-3 border border-gold/40 px-8 py-3 rounded-full hover:bg-gold hover:text-navy transition-all duration-300 text-lg font-medium"
                            >
                                <Globe size={24} />
                                <span className="uppercase">{locale === 'en' ? 'Español' : 'English'}</span>
                            </button>
                        </div>
                    </nav>
                    
                    {/* Background decorative element */}
                    <div className="absolute bottom-12 opacity-10 pointer-events-none">
                         <Image
                            src="/assets/images/logo.png"
                            alt="Logo Watermark"
                            width={300}
                            height={100}
                            className="w-auto h-20 object-contain grayscale"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
