'use client';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const CountUp = ({ end, duration = 2 }: { end: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            const percentage = Math.min(progress / (duration * 1000), 1);
            // Easing out function
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
            setCount(Math.floor(end * easeOutQuart));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(updateCount);
            }
        };

        animationFrame = requestAnimationFrame(updateCount);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isInView]);

    return <span ref={nodeRef}>{count}</span>;
}

export default function Stats() {
    const t = useTranslations('Home.stats');

    const stats = [
        { key: 'yachts', value: 12, suffix: '' },
        { key: 'clients', value: 150, suffix: '+' },
        { key: 'voyages', value: 500, suffix: '+' },
    ];

    return (
        <section className="py-20 bg-navy border-t border-white/5 relative z-20 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 text-center md:divide-x divide-white/10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.key}
                            className="p-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                        >
                            <div className="text-5xl md:text-6xl lg:text-7xl font-light font-serif text-white mb-6 flex items-baseline justify-center gap-1">
                                <CountUp end={stat.value} duration={2.5} />
                                <span className="text-gold text-4xl">{stat.suffix}</span>
                            </div>
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <span className="h-[1px] w-8 bg-gold/50"></span>
                                <p className="text-gold tracking-[0.2em] text-xs font-semibold uppercase">{t(stat.key)}</p>
                                <span className="h-[1px] w-8 bg-gold/50"></span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
