import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Zap, ShieldCheck, Star } from 'lucide-react';
import heroPerson from '../assets/hero_person.png';

// ─── Animated counter ───────────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, inView = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, inView]);
    return count;
}

const statsData = [
    { value: 500, suffix: '+', label: 'Verified Doctors' },
    { value: 200, suffix: '+', label: 'Partner Clinics' },
    { value: 22, suffix: '+', label: 'Indian Languages' },
    { value: 3, suffix: 'min', label: 'Avg. Response' },
];

const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const count = useCounter(value, 1800, inView);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return (
        <div ref={ref} className="text-center">
            <div className="text-2xl lg:text-3xl font-heading font-black text-secondary-900 leading-none">
                {count}{suffix}
            </div>
            <div className="text-xs text-secondary-500 font-sans mt-1">{label}</div>
        </div>
    );
};

// ─── Animated headline words ─────────────────────────────────────────────────
const words = ['Doctor', 'Patient', 'Hospital', 'Lab', 'Medicines', 'Clinic'];

const Hero = () => {
    const [wordIdx, setWordIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setWordIdx(p => (p + 1) % words.length), 2400);
        return () => clearInterval(t);
    }, []);

    return (
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/30" id="home">
            {/* Soft gradient mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_0%,rgba(0,147,161,0.07),transparent)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/20 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

            {/* Subtle dot grid */}
            <div
                className="absolute inset-0 opacity-[0.018] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #0093a1 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            />

            {/* Wide container — max 1440 with tighter horizontal padding */}
            <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-4">

                    {/* ── LEFT: Content ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, ease: 'easeOut' }}
                        className="flex-1 text-center lg:text-left"
                    >
                        {/* Launch badge */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-7"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse flex-shrink-0" />
                            🩺 India's Complete Healthcare Platform
                        </motion.div> */}

                        {/* ── Headline — UNIQUE & IMPACTFUL ── */}
                        <h1 className="font-heading font-black tracking-tight text-secondary-900 leading-[1.1] mb-6">
                            {/* Line 1 */}
                            <span className="block text-[2.75rem] md:text-5xl lg:text-[4.2rem] xl:text-[4.5rem]">
                                Your Health.
                            </span>
                            {/* Line 2 — animated swap */}
                            <span className="block text-[2.75rem] md:text-5xl lg:text-[4.2rem] xl:text-[4.5rem]">
                                Your{' '}
                                <span className="relative inline-block">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={wordIdx}
                                            initial={{ opacity: 0, y: 20, clipPath: 'inset(0 0 100% 0)' }}
                                            animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
                                            exit={{ opacity: 0, y: -20, clipPath: 'inset(100% 0 0% 0)' }}
                                            transition={{ duration: 0.45, ease: 'easeInOut' }}
                                            className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-teal-400 inline-block px-1"
                                        >
                                            {words[wordIdx]}
                                        </motion.span>
                                    </AnimatePresence>
                                    {/* Underline accent */}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-primary-500 to-teal-400"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
                                        key={`line-${wordIdx}`}
                                    />
                                </span>
                            </span>
                            {/* Line 3 — emotional payoff */}
                            <span className="block text-[2.2rem] md:text-4xl lg:text-[3.6rem] xl:text-[4.2rem] text-primary-500 font-black mt-2">
                                Instantly.
                            </span>
                        </h1>

                        {/* Sub copy */}
                        <p className="text-lg text-secondary-500 mb-9 max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans">
                            Ayura connects you with verified doctors, labs, pharmacies & hospitals — all in one intelligent app.
                            Built for India's 1.4 billion. Designed for <em>you</em>.
                        </p>

                        {/* Stats row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 pt-7 border-t border-secondary-100 max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-12">
                            {statsData.map((s, i) => <StatCounter key={i} {...s} />)}
                        </div>

                        {/* Trust pills */}
                        {/* <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                            {[
                                { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: 'ABDM Verified' },
                                { icon: <Zap className="w-3.5 h-3.5" />, text: '< 3 Min Response' },
                                { icon: <Star className="w-3.5 h-3.5" />, text: '4.9★ Rated' },
                            ].map((pill, i) => (
                                <span key={i} className="inline-flex items-center gap-1.5 bg-white border border-secondary-100 text-secondary-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                                    <span className="text-primary-500">{pill.icon}</span>
                                    {pill.text}
                                </span>
                            ))}
                        </div> */}



                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start mb-12">
                            <a
                                href="#early-access"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-xl font-bold text-base hover:from-primary-500 hover:to-primary-400 transition-all shadow-xl shadow-primary-900/20 group w-full sm:w-auto justify-center"
                            >
                                Get Early Access
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#how-it-works"
                                className="inline-flex items-center gap-2 text-secondary-600 hover:text-secondary-900 font-semibold px-4 py-4 transition-colors group w-full sm:w-auto justify-center"
                            >
                                <div className="w-10 h-10 rounded-full border-2 border-secondary-200 flex items-center justify-center group-hover:border-primary-400 transition-colors">
                                    <Play className="w-4 h-4 ml-0.5 fill-current" />
                                </div>
                                See How It Works
                            </a>
                        </div>

                    </motion.div>

                    {/* ── RIGHT: Single hero image ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                        className="flex-1 relative flex justify-center items-center lg:items-end max-w-[580px] lg:max-w-none w-full mt-10 lg:mt-0"
                    >
                        {/* Soft glow behind image */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[60%] bg-gradient-to-t from-primary-100/60 via-primary-50/30 to-transparent rounded-full blur-[60px] pointer-events-none" />

                        {/* Main hero image */}
                        <motion.img
                            src={heroPerson}
                            alt="Ayura — healthcare in your hands"
                            className="relative z-10 w-full max-w-[520px] object-contain mix-blend-darken filter drop-shadow-xl"
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        {/* Floating badge — top left */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: -20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                            className="absolute top-[12%] left-0 z-20 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl px-4 py-3 border border-white"
                        >
                            <p className="text-[9px] text-secondary-400 font-bold uppercase tracking-wider mb-0.5">AYURA</p>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="font-extrabold text-secondary-900 text-sm">Complete Healthcare Platform</span>
                            </div>
                        </motion.div>

                        {/* Floating badge — bottom right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 1.1, duration: 0.5 }}
                            className="absolute bottom-[14%] right-0 z-20 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl px-4 py-3 border border-white"
                        >
                            <p className="text-[9px] text-secondary-400 font-bold uppercase tracking-wider mb-0.5">Response Time</p>
                            <div className="flex items-center gap-1.5">
                                <span className="font-extrabold text-secondary-900 text-sm">{'<'} 3 Minutes</span>
                                <span className="text-base">⚡</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
