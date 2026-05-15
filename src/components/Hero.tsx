import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Search, Stethoscope, FlaskConical, Pill, MessageSquare, Star, ShieldCheck, Bell, Video } from 'lucide-react';

// ─── App Mockup ──────────────────────────────────────────────────────────────
const quickActions = [
    { icon: Stethoscope, label: 'Doctors', color: '#0093a1' },
    { icon: FlaskConical, label: 'Labs', color: '#d97706' },
    { icon: Pill, label: 'Medicines', color: '#dc2626' },
    { icon: MessageSquare, label: 'AI Chat', color: '#2563eb' },
];

const AppMockup = () => {
    const [activeDoc, setActiveDoc] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setActiveDoc(p => (p + 1) % 2), 3000);
        return () => clearInterval(t);
    }, []);

    const doctors = [
        { name: 'Dr. Ananya Rao', spec: 'Cardiologist', rating: '4.9', avail: 'Available Now', color: '#0093a1' },
        { name: 'Dr. Priya Menon', spec: 'Neurologist', rating: '4.8', avail: 'In 15 min', color: '#7c3aed' },
    ];
    const doc = doctors[activeDoc];

    return (
        <div className="relative w-[300px] mx-auto">
            {/* Phone frame */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[6px] border-secondary-800"
                style={{ background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 100%)' }}>
                {/* Status bar */}
                <div className="flex items-center justify-between px-5 pt-4 pb-2">
                    <span className="text-white/50 text-[10px] font-bold">9:41</span>
                    <div className="flex gap-1">
                        {[3,2.5,2].map((h,i) => <div key={i} className="w-1 rounded-sm bg-white/50" style={{height:`${h*4}px`}} />)}
                        <div className="w-4 h-2.5 rounded-sm border border-white/50 ml-1 relative"><div className="absolute inset-[2px] left-[2px] right-[3px] bg-white/50 rounded-sm" /></div>
                    </div>
                </div>

                {/* App content */}
                <div className="px-4 pb-6 space-y-4">
                    {/* Greeting */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-white/40 text-xs font-sans">Good morning 👋</p>
                            <p className="text-white font-black text-base font-heading">Rahul Sharma</p>
                        </div>
                        <div className="relative">
                            <motion.div animate={{scale:[1,1.2,1]}} transition={{duration:2,repeat:Infinity}} className="w-2 h-2 rounded-full bg-primary-400 absolute -top-0.5 -right-0.5 z-10" />
                            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                                <Bell className="w-4 h-4 text-white/60" />
                            </div>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="flex items-center gap-2 bg-white/8 rounded-2xl px-3 py-2.5 border border-white/10">
                        <Search className="w-3.5 h-3.5 text-white/30" />
                        <span className="text-white/30 text-xs font-sans">Search doctors, labs, medicines...</span>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-4 gap-2">
                        {quickActions.map((a, i) => (
                            <motion.div key={i} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.3+i*0.1}}
                                className="flex flex-col items-center gap-1.5">
                                <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{background:`${a.color}20`,border:`1px solid ${a.color}40`}}>
                                    <a.icon className="w-5 h-5" style={{color:a.color}} strokeWidth={2} />
                                </div>
                                <span className="text-white/50 text-[9px] font-semibold">{a.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Health score bar */}
                    <div className="bg-white/5 rounded-2xl p-3 border border-white/8">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Health Score</span>
                            <span className="text-emerald-400 text-xs font-black">82 / 100</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                            <motion.div className="h-full rounded-full" style={{background:'linear-gradient(to right,#0093a1,#10b981)'}} initial={{width:0}} animate={{width:'82%'}} transition={{duration:1.5,delay:0.5,ease:'easeOut'}} />
                        </div>
                    </div>

                    {/* Upcoming doctor card */}
                    <div>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2">Recommended</p>
                        <AnimatePresence mode="wait">
                            <motion.div key={activeDoc} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:0.4}}
                                className="rounded-2xl p-3 border" style={{background:`${doc.color}15`,borderColor:`${doc.color}35`}}>
                                <div className="flex items-center gap-2.5">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm flex-shrink-0" style={{background:`linear-gradient(135deg,${doc.color},${doc.color}99)`}}>Dr</div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white font-bold text-xs leading-none mb-1">{doc.name}</p>
                                        <p className="text-white/50 text-[9px]">{doc.spec}</p>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <p className="text-yellow-400 text-[10px] font-bold">★ {doc.rating}</p>
                                        <p className="text-[9px] font-bold" style={{color:doc.color}}>{doc.avail}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-2.5">
                                    <button className="flex-1 py-1.5 rounded-xl text-white text-[10px] font-bold flex items-center justify-center gap-1" style={{background:doc.color}}>
                                        <Video className="w-3 h-3" />Video
                                    </button>
                                    <button className="flex-1 py-1.5 rounded-xl text-[10px] font-bold" style={{background:`${doc.color}20`,color:doc.color}}>Clinic</button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Floating AI badge */}
            <motion.div initial={{opacity:0,scale:0.7,x:30}} animate={{opacity:1,scale:1,x:0}} transition={{delay:1,duration:0.5}}
                className="absolute -right-10 top-[18%] bg-white rounded-2xl shadow-xl px-3 py-2.5 border border-slate-100">
                <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">AI Companion</p>
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-extrabold text-secondary-900">Always On</span>
                </div>
            </motion.div>

            {/* Floating shield badge */}
            <motion.div initial={{opacity:0,scale:0.7,x:-30}} animate={{opacity:1,scale:1,x:0}} transition={{delay:1.2,duration:0.5}}
                className="absolute -left-10 bottom-[22%] bg-white rounded-2xl shadow-xl px-3 py-2.5 border border-slate-100">
                <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">ABDM</p>
                <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-xs font-extrabold text-secondary-900">Verified</span>
                </div>
            </motion.div>

            {/* Glow behind phone */}
            <div className="absolute inset-0 -z-10 rounded-[40px] blur-3xl opacity-30" style={{background:'radial-gradient(circle, #0093a1 0%, #7c3aed 60%, transparent 80%)'}} />
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

                    {/* ── RIGHT: App Mockup ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                        className="flex-1 relative flex justify-center items-center max-w-[580px] lg:max-w-none w-full mt-10 lg:mt-0"
                    >
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                            <AppMockup />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
