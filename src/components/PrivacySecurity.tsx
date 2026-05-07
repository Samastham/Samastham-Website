import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Database, Key, BadgeCheck } from 'lucide-react';

const privacyFeatures = [
    {
        icon: <Lock className="w-6 h-6" />,
        title: 'End-to-End Encryption',
        desc: 'All health data, consultations, and records are encrypted using AES-256 military-grade encryption — accessible only to you.',
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: 'ABHA Health Locker',
        desc: 'Your digital health records are stored in your personal ABHA (Ayushman Bharat Health Account) locker — government-backed and fully portable.',
    },
    {
        icon: <Eye className="w-6 h-6" />,
        title: 'Consent-Based Sharing',
        desc: 'You decide who sees your health data. Share records with doctors, labs, or hospitals with a single tap — and revoke access anytime.',
    },
    {
        icon: <Key className="w-6 h-6" />,
        title: 'Zero-Trust Architecture',
        desc: 'Our systems are built on a zero-trust security model. Even our internal teams cannot access your raw health records.',
    },
    {
        icon: <BadgeCheck className="w-6 h-6" />,
        title: 'ABDM & NHA Compliant',
        desc: 'Fully compliant with Ayushman Bharat Digital Mission and National Health Authority standards — meeting the highest regulatory bar in India.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'ISO 27001 Aligned',
        desc: 'Our data security practices align with international ISO 27001 standards and HIPAA guidelines for maximum patient data protection.',
    },
];

const PrivacySecurity = () => {
    return (
        <section className="py-28 bg-slate-50 relative overflow-hidden" id="security">
            {/* Background accent */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-50 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    {/* Left - Visual Shield */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-2/5 flex justify-center"
                    >
                        <div className="relative w-[320px] h-[380px] flex items-center justify-center">
                            {/* Animated rings */}
                            {[1, 2, 3].map((ring) => (
                                <motion.div
                                    key={ring}
                                    animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.2, 0.4] }}
                                    transition={{ duration: 3 + ring, repeat: Infinity, ease: 'easeInOut', delay: ring * 0.5 }}
                                    className="absolute rounded-full border-2 border-primary-200"
                                    style={{ width: `${220 + ring * 60}px`, height: `${220 + ring * 60}px` }}
                                />
                            ))}

                            {/* Center shield */}
                            <div className="relative z-10 w-48 h-48 bg-gradient-to-br from-primary-600 to-primary-800 rounded-[40px] flex flex-col items-center justify-center shadow-2xl shadow-primary-900/30 rotate-3">
                                <ShieldCheck className="w-20 h-20 text-white mb-2" strokeWidth={1.5} />
                                <span className="text-white font-bold text-sm tracking-wider uppercase">Secure</span>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-4 right-0 bg-white border border-secondary-100 rounded-xl shadow-lg px-4 py-2.5 text-xs font-bold text-secondary-700">
                                ABDM ✓
                            </div>
                            <div className="absolute bottom-8 left-0 bg-white border border-secondary-100 rounded-xl shadow-lg px-4 py-2.5 text-xs font-bold text-secondary-700">
                                ISO 27001 ✓
                            </div>
                            <div className="absolute top-1/2 -left-4 bg-primary-600 text-white rounded-xl shadow-lg px-4 py-2.5 text-xs font-bold">
                                AES-256
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <div className="w-full lg:w-3/5">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="mb-12"
                        >
                            <span className="inline-flex items-center gap-2 text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">
                                <ShieldCheck className="w-4 h-4" />
                                Privacy & Security
                            </span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary-900 mb-6 leading-tight">
                                Your Health Data,{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                    Your Control
                                </span>
                            </h2>
                            <p className="text-secondary-500 text-xl leading-relaxed font-sans">
                                We take patient privacy with absolute seriousness. Every system, every interaction, every record — built with security as the default, not an afterthought.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-5">
                            {privacyFeatures.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className="flex gap-4 p-5 rounded-2xl bg-white border border-secondary-100 hover:border-primary-200 hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary-900 mb-1">{feature.title}</h4>
                                        <p className="text-secondary-500 text-sm leading-relaxed font-sans">{feature.desc}</p>
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

export default PrivacySecurity;
