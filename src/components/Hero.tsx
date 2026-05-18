import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Search, Stethoscope, FlaskConical, Pill, MessageSquare, Star, ShieldCheck, Bell, Video, Users } from 'lucide-react';
import heroPersonImg from '../assets/hero_person.png';

// ─── Animated headline words ─────────────────────────────────────────────────
const words = ['Doctor', 'Patient', 'Hospital', 'Lab', 'Medicines', 'Clinic'];

const Hero = () => {
    const [wordIdx, setWordIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setWordIdx(p => (p + 1) % words.length), 2400);
        return () => clearInterval(t);
    }, []);

    return (
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f4fbfb 0%, #e8f6f5 50%, #9dd1d1 100%)' }} id="home">
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
                                href="https://docs.google.com/forms/d/e/1FAIpQLSd-zGMjk63nlaqcMLH_aeYALwibVSHQWeDLiyw5Gv-yedIORQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer"
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

                    {/* ── RIGHT: Hero Image ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                        className="flex-1 relative flex justify-center items-end w-full mt-16 lg:mt-0 min-h-[400px] md:min-h-[500px]"
                    >
                        {/* Background subtle shapes */}
                        <div className="absolute inset-0 bg-primary-300/20 rounded-full blur-[120px] -z-10 transform translate-y-10" />
                        
                        <div className="relative w-full max-w-[650px] flex justify-center items-center">
                            {/* Seamless Blended Image */}
                            <div className="relative w-full flex justify-center" style={{ 
                                WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, black 60%, transparent 100%)', 
                                maskImage: 'radial-gradient(50% 50% at 50% 50%, black 60%, transparent 100%)'
                            }}>
                                <img 
                                    src={heroPersonImg} 
                                    alt="Healthcare Professionals" 
                                    className="w-[120%] h-auto object-contain object-center max-h-[700px] z-10"
                                />
                            </div>

                            {/* Floating Badge 1: Live Consultation (Glassmorphic) */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.6, type: 'spring' }}
                                className="absolute -left-4 md:-left-8 bottom-12 md:bottom-24 bg-white/70 backdrop-blur-md p-3 md:p-4 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 border border-white/60 z-20"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                    <Video className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Instant</p>
                                    <p className="text-sm md:text-base font-black text-secondary-900">Video Consult</p>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2: Verified Experts (Glassmorphic) */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
                                className="absolute -right-4 md:-right-8 top-24 md:top-32 bg-white/70 backdrop-blur-md p-3 md:p-4 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-3 border border-white/60 z-20"
                            >
                                <div className="flex -space-x-2 shadow-sm rounded-full">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center z-20"><ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-primary-500" /></div>
                                </div>
                                <div className="pr-4">
                                    <p className="text-base md:text-lg font-black text-secondary-900 leading-tight">5,000+</p>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Verified Doctors</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
