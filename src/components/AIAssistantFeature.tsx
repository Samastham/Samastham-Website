import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Globe2, ShieldCheck, Stethoscope, Sparkles, Brain } from 'lucide-react';

const languages = ['English', 'हिन्दी', 'தமிழ்', 'తెలుగు', 'বাংলা', 'ਪੰਜਾਬੀ'];

const capabilities = [
    {
        icon: <Stethoscope className="w-5 h-5" />,
        title: "Symptom Intelligence",
        desc: "Conversationally understands and analyzes reported symptoms to provide contextual, evidence-based health information."
    },
    {
        icon: <Globe2 className="w-5 h-5" />,
        title: "Multilingual Voice Interface",
        desc: "Communicates fluently across 22+ Indian regional languages via natural voice input — no typing required."
    },
    {
        icon: <Brain className="w-5 h-5" />,
        title: "Adaptive Clinical Guidance",
        desc: "Provides tiered recommendations: ranging from preventive home care for minor complaints to urgent physician referrals."
    },
    {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "Medically Validated Responses",
        desc: "All outputs are grounded in curated clinical knowledge bases reviewed and validated by licensed healthcare professionals."
    }
];

const AIAssistantFeature = () => {
    const [activeLang, setActiveLang] = useState(0);

    // Rotate language on interval-like loop for demo
    const handleLangCycle = () => {
        setActiveLang(prev => (prev + 1) % languages.length);
    };

    return (
        <section className="py-28 bg-secondary-900 text-white relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary-500/15 text-primary-400 px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase border border-primary-500/20 mb-6">
                        <Sparkles className="w-4 h-4" />
                        Ayura Intelligence
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                        A Medical AI That <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
                            Understands Everyone
                        </span>
                    </h2>
                    <p className="text-secondary-400 text-xl max-w-2xl mx-auto leading-relaxed font-sans">
                        Ayura's embedded clinical AI delivers conversational health guidance through voice — bridging language barriers and providing medically sound responses accessible to every patient, anywhere.
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left - Visual demo mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <div className="relative w-full max-w-[380px]">
                            {/* Main phone frame */}
                            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-6 shadow-2xl">
                                {/* Top bar */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                                            <Stethoscope className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="font-bold text-white text-sm">Ayura AI</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                        <span className="text-green-400 text-xs font-bold">Listening</span>
                                    </div>
                                </div>

                                {/* Waveform animation */}
                                <div 
                                    className="flex items-end justify-center gap-1 h-20 mb-6 cursor-pointer"
                                    onClick={handleLangCycle}
                                >
                                    {[3,6,10,14,9,13,7,12,8,5,11,4,9,13,6].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [`${h * 3}px`, `${h * 5}px`, `${h * 3}px`] }}
                                            transition={{ duration: 0.8 + i * 0.07, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-2 rounded-full bg-gradient-to-b from-primary-400 to-primary-600 origin-bottom"
                                            style={{ height: `${h * 3}px` }}
                                        />
                                    ))}
                                </div>

                                {/* Active language badge */}
                                <div className="text-center mb-6">
                                    <motion.div
                                        key={activeLang}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="inline-block bg-primary-500/20 border border-primary-500/30 text-primary-300 font-bold px-5 py-2 rounded-full text-sm"
                                    >
                                        Speaking in: {languages[activeLang]}
                                    </motion.div>
                                </div>

                                {/* Sample conversation */}
                                <div className="space-y-3">
                                    <div className="bg-white/5 rounded-2xl rounded-bl-none p-4 text-sm text-secondary-300 leading-relaxed">
                                        "मुझे तीन दिनों से गले में दर्द और बुखार है।"
                                    </div>
                                    <div className="bg-primary-600/30 border border-primary-500/20 rounded-2xl rounded-br-none p-4 text-sm text-white leading-relaxed ml-4">
                                        Based on your symptoms, this may be a pharyngeal infection. I recommend steam inhalation and warm fluids. If fever exceeds 102°F for over 2 days, consult a physician immediately.
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                                    <span className="text-secondary-500 text-xs">Tap waveform to switch language</span>
                                    <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary-500 transition-colors">
                                        <Mic className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Language pills floating */}
                            <div className="absolute -top-4 -right-4 bg-white/10 border border-white/10 backdrop-blur px-3 py-1.5 rounded-full text-xs text-white font-bold">
                                22+ Languages
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white/10 border border-white/10 backdrop-blur px-3 py-1.5 rounded-full text-xs text-white font-bold">
                                Clinically Validated
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Capabilities */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-6">
                            {capabilities.map((cap, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary-500/20 border border-primary-500/20 text-primary-400 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                                        {cap.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1.5">{cap.title}</h4>
                                        <p className="text-secondary-400 text-sm leading-relaxed">{cap.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIAssistantFeature;
