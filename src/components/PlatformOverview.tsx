import React from 'react';
import { motion } from 'framer-motion';
import {
    Users, Stethoscope, FlaskConical, Pill, Building2,
    Brain, ShieldCheck, Globe2, Zap, Clock, BadgeCheck,
    TrendingUp, HeartPulse, BarChart3, Lock, Bell,
    UsersRound, PhoneCall, Megaphone, Mic
} from 'lucide-react';

// ─── Bento cells config ────────────────────────────────────────────────────
const patientFeatures = [
    { icon: Stethoscope, label: 'Doctor Consultations', desc: 'Book in-clinic or HD video with verified doctors.' },
    { icon: FlaskConical, label: 'Home Lab Tests', desc: 'NABL-certified sample collection at your doorstep.' },
    { icon: Pill, label: '2-Hour Medicine Delivery', desc: 'Order prescriptions and get them home fast.' },
    { icon: Brain, label: 'AI Health Assistant', desc: '24/7 multilingual health guidance — voice-first.' },
    { icon: ShieldCheck, label: 'ABHA Health Locker', desc: 'Secure, shareable digital medical records.' },
    { icon: Bell, label: 'Smart Reminders', desc: 'Auto-scheduled medication and follow-up alerts.' },
    { icon: UsersRound, label: 'Family Accounts', desc: 'Manage health records and appointments for your loved ones.' },
    { icon: PhoneCall, label: 'Emergency SOS', desc: 'One-tap urgent care and ambulance dispatch.' },
];

const providerFeatures = [
    { icon: BarChart3, label: 'Live Dashboard', desc: 'Real-time appointment, revenue & patient insights.' },
    { icon: Zap, label: 'Instant Consultations', desc: 'Receive urgent patient requests in under 3 mins.' },
    { icon: BadgeCheck, label: 'ABDM Verified Profile', desc: 'Government-grade digital identity for providers.' },
    { icon: Clock, label: 'Smart Scheduling', desc: 'AI-managed slots, no double bookings, no friction.' },
    { icon: Lock, label: 'Encrypted PHR', desc: 'Patient records secured end-to-end, always.' },
    { icon: TrendingUp, label: 'Business Intelligence', desc: 'Track growth, ratings & performance over time.' },
    { icon: Megaphone, label: 'Growth & Marketing', desc: 'Attract new patients with SEO-optimized digital presence.' },
    { icon: Mic, label: 'AI Transcription', desc: 'Automated clinic notes so you can focus on the patient.' },
];

const cardAnim = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

const PlatformOverview = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="services">
            {/* Subtle dot grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #0093a1 1px, transparent 1px)', backgroundSize: '28px 28px' }}
            />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50/60 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50/40 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-flex items-center gap-2 text-primary-600 font-bold tracking-widest uppercase text-xs mb-4 border border-primary-200 bg-primary-50 px-5 py-2 rounded-full">
                        <Globe2 className="w-3.5 h-3.5" /> The Complete Platform
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-secondary-900 mb-5 leading-tight">
                        Everything Healthcare,{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            One Ecosystem
                        </span>
                    </h2>
                    <p className="text-secondary-500 text-xl leading-relaxed font-sans">
                        Ayura unifies patients, doctors, clinics, labs, and pharmacies into a single intelligent network — powered by AI, governed by ABDM, designed for India.
                    </p>
                </motion.div>
                <div className="grid lg:grid-cols-2 gap-6">

                    {/* Patient card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-secondary-100 overflow-hidden"
                    >
                        {/* Header bar */}
                        <div className="bg-gradient-to-r from-primary-600 to-primary-500 px-7 py-5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                <Users className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-heading font-black text-white text-xl">For Patients</h3>
                                <p className="text-primary-100 text-xs font-sans">Your complete health companion</p>
                            </div>
                        </div>
                        {/* Feature grid */}
                        <div className="bg-white p-4 grid grid-cols-2 gap-3">
                            {patientFeatures.map((f, i) => (
                                <motion.div
                                    key={i}
                                    variants={cardAnim}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: i * 0.07, duration: 0.4 }}
                                    className="group flex gap-3 p-4 rounded-2xl bg-secondary-50 hover:bg-primary-50 border border-transparent hover:border-primary-100 transition-all duration-200 cursor-default"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-white border border-secondary-100 flex items-center justify-center flex-shrink-0 group-hover:border-primary-200 transition-colors shadow-sm">
                                        <f.icon className="w-4 h-4 text-primary-600" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-secondary-900 text-sm leading-tight mb-0.5">{f.label}</p>
                                        <p className="text-secondary-500 text-xs font-sans leading-relaxed">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Provider card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-secondary-100 overflow-hidden"
                    >
                        {/* Header bar */}
                        <div className="bg-gradient-to-r from-secondary-800 to-secondary-700 px-7 py-5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-heading font-black text-white text-xl">For Providers</h3>
                                <p className="text-secondary-400 text-xs font-sans">Doctors · Clinics · Hospitals · Labs</p>
                            </div>
                        </div>
                        {/* Feature grid */}
                        <div className="bg-white p-4 grid grid-cols-2 gap-3">
                            {providerFeatures.map((f, i) => (
                                <motion.div
                                    key={i}
                                    variants={cardAnim}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: i * 0.07, duration: 0.4 }}
                                    className="group flex gap-3 p-4 rounded-2xl bg-secondary-50 hover:bg-secondary-100 border border-transparent hover:border-secondary-200 transition-all duration-200 cursor-default"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-white border border-secondary-100 flex items-center justify-center flex-shrink-0 group-hover:border-secondary-300 transition-colors shadow-sm">
                                        <f.icon className="w-4 h-4 text-secondary-700" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-secondary-900 text-sm leading-tight mb-0.5">{f.label}</p>
                                        <p className="text-secondary-500 text-xs font-sans leading-relaxed">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>



            </div>
        </section>
    );
};

export default PlatformOverview;
