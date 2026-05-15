import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const perks = [
    'Priority access to the platform on launch day',
    'Be part of our exclusive early tester community',
    'Stay updated with our mission and progress',
    'Help shape the future of accessible healthcare',
];

const EarlyAccessCTA = () => {
    return (
        <section
            className="py-28 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/20 border-t border-secondary-100"
            id="early-access"
        >
            {/* Ambient glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-100/40 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-[100px] pointer-events-none" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container mx-auto px-6 max-w-[900px] relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm">
                        <Sparkles className="w-4 h-4" />
                        Launching Soon — Join the Mission
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-heading font-black text-secondary-900 text-center mb-6 leading-tight"
                >
                    Be Part of the<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-400">
                        Ayura Revolution
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-secondary-600 text-xl text-center max-w-2xl mx-auto mb-12 font-sans leading-relaxed"
                >
                    We're building the future of healthcare in India. Join our waitlist today to get exclusive updates and be the first to experience the platform when we go live.
                </motion.p>

                {/* Perks list */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-12"
                >
                    {perks.map((perk, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0" />
                            <span className="text-secondary-700 font-sans font-medium text-sm">{perk}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="https://forms.google.com" // Replace with actual user form link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-primary-400 hover:to-primary-500 transition-all shadow-xl shadow-primary-900/20 group"
                    >
                        Interested as a Patient?
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="https://forms.google.com" // Replace with actual doctor form link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-secondary-900 text-secondary-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-secondary-50 transition-all shadow-lg"
                    >
                        Interested as a Doctor?
                    </a>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-secondary-500 text-xs text-center mt-8 font-sans font-medium"
                >
                    Select the appropriate form above to help us tailor your experience.
                </motion.p>
            </div>
        </section>
    );
};

export default EarlyAccessCTA;
