import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, CreditCard, QrCode, FileText, Heart,
    CheckCircle2, ArrowRight, Zap, Globe2, Lock, BadgeCheck,
    Building2, PhoneCall, Wallet, ClipboardList, Link2, Star
} from 'lucide-react';

// ─── ABHA Data ─────────────────────────────────────────────────────────────
const abhaFeatures = [
    { icon: QrCode, title: 'Unique Health ID', desc: 'A 14-digit government-linked digital identity that identifies you across every hospital, clinic, lab, and pharmacy in India.' },
    { icon: FileText, title: 'Unified Health Records', desc: 'Prescriptions, lab reports, discharge summaries and imaging results — all linked to one ID, accessible anywhere.' },
    { icon: Link2, title: 'One-Click Record Sharing', desc: 'Share your full medical history with any doctor in seconds using a QR code or OTP — no paperwork, no delays.' },
    { icon: Lock, title: 'You Control Your Data', desc: 'Grant or revoke access to your records anytime. No doctor or hospital can view your data without your consent.' },
    { icon: Globe2, title: 'Works Across India', desc: 'Accepted at every ABDM-registered facility. Whether in Chennai or Chandigarh, your records travel with you.' },
    { icon: BadgeCheck, title: 'ABDM & Govt. Verified', desc: 'Issued under the Ayushman Bharat Digital Mission. Fully compliant with NHA regulations and DPDP Act.' },
];

const abhaSteps = [
    { n: '01', title: 'Link Your ABHA', desc: 'Connect your existing ABHA ID or create one in seconds using Aadhaar or mobile number.' },
    { n: '02', title: 'Auto-Sync Records', desc: 'Every consultation, prescription and report on Ayura is automatically added to your ABHA locker.' },
    { n: '03', title: 'Share Instantly', desc: 'When visiting any doctor, share your entire history via QR code in one tap — no uploads needed.' },
];

// ─── Insurance Data ─────────────────────────────────────────────────────────
const insuranceFeatures = [
    { icon: Wallet, title: 'Coverage Checker', desc: 'Instantly check what your insurance policy covers — hospitalisation, OPD, surgeries, daycare, and more.' },
    { icon: Building2, title: 'Cashless Hospitals', desc: 'Find the nearest cashless empanelled hospitals from your insurer directly within the Ayura app.' },
    { icon: ClipboardList, title: 'Claim Filing', desc: 'File reimbursement claims digitally. Upload bills, reports and discharge summaries right from your health locker.' },
    { icon: Zap, title: 'Pre-Auth Assistance', desc: 'We help you raise pre-authorisation requests with your TPA before planned hospitalisations — stress-free.' },
    { icon: PhoneCall, title: 'Dedicated Support', desc: 'A claims concierge team available to guide you through every step of the insurance process in your language.' },
    { icon: Star, title: 'Policy Management', desc: 'Store all your health insurance policies in one place. Get renewal reminders before your coverage lapses.' },
];

const insurancePlans = [
    { type: 'Individual', icon: '👤', covers: ['OPD Consultations', 'Hospitalisation', 'Pre & Post Care', 'Day Care Surgery', 'Ambulance Cover'] },
    { type: 'Family Floater', icon: '👨‍👩‍👧', covers: ['All Individual Benefits', 'Covers entire family', 'Single sum insured', 'Maternity Cover', 'New-born Care'] },
    { type: 'Senior Citizen', icon: '👴', covers: ['No pre-medical checkup', 'Pre-existing conditions', 'Higher sum insured', 'Domiciliary care', 'Annual health check'] },
];

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

const InsuranceABHA = () => {
    const [tab, setTab] = useState<'insurance' | 'abha'>('abha');

    return (
        <div className="pt-20 bg-white font-sans text-secondary-900 pb-20">

            {/* ── Hero Banner ── */}
            <div className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-slate-800 to-secondary-900 py-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_0%,rgba(0,147,161,0.15),transparent)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_100%,rgba(124,58,237,0.1),transparent)] pointer-events-none" />
                <div className="container mx-auto px-6 max-w-[1100px] relative z-10 text-center">
                    <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 text-primary-400 font-bold tracking-widest uppercase text-xs mb-6 border border-primary-500/30 bg-primary-500/10 px-5 py-2 rounded-full">
                        <Heart className="w-3 h-3" /> Healthcare Security
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-black text-white mb-5 leading-tight">
                        Your Health,{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-400 to-emerald-400">
                            Always Protected
                        </span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-secondary-400 text-xl max-w-2xl mx-auto leading-relaxed font-sans mb-10">
                        Ayura integrates your ABHA digital health identity and insurance coverage — so you're always prepared, financially and medically.
                    </motion.p>

                    {/* Tab switcher */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                        className="inline-flex bg-white/10 border border-white/15 rounded-2xl p-1.5 gap-1">
                        {(['abha', 'insurance'] as const).map(t => (
                            <button key={t} onClick={() => setTab(t)}
                                className="px-8 py-3 rounded-xl font-bold text-sm transition-all duration-250"
                                style={tab === t ? { background: t === 'abha' ? '#7c3aed' : '#0891b2', color: '#fff' } : { color: '#94a3b8' }}>
                                {t === 'abha' ? '🛡️ ABHA Health ID' : '💳 Insurance'}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* ═══════════════════ ABHA SECTION ═══════════════════ */}
            {tab === 'abha' && (
                <div>
                    {/* What is ABHA */}
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-6 max-w-[1100px]">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                {/* Left: content */}
                                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
                                    <span className="inline-flex items-center gap-2 text-violet-600 font-bold tracking-widest uppercase text-xs mb-4 border border-violet-200 bg-violet-50 px-4 py-1.5 rounded-full">
                                        <BadgeCheck className="w-3 h-3" /> What is ABHA?
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-heading font-black text-secondary-900 mb-5 leading-tight">
                                        India's National{' '}
                                        <span className="text-violet-600">Digital Health ID</span>
                                    </h2>
                                    <p className="text-secondary-500 text-lg leading-relaxed font-sans mb-6">
                                        ABHA (Ayushman Bharat Health Account) is a unique 14-digit health identifier issued by the Government of India under the National Health Authority. It acts as your digital health passport — linking every medical interaction you've ever had into one secure, shareable record.
                                    </p>
                                    <p className="text-secondary-500 text-lg leading-relaxed font-sans mb-8">
                                        With Ayura, your ABHA ID is the backbone of your healthcare journey. Every consultation, prescription, lab report and hospital visit is automatically filed against your ID — available whenever, wherever you need it.
                                    </p>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-zGMjk63nlaqcMLH_aeYALwibVSHQWeDLiyw5Gv-yedIORQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-7 py-4 rounded-xl font-bold transition-all shadow-lg shadow-violet-200 group">
                                        Link Your ABHA <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </motion.div>

                                {/* Right: ABHA card mockup */}
                                <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                                    className="flex justify-center">
                                    <div className="relative w-full max-w-[360px]">
                                        {/* Card */}
                                        <div className="rounded-3xl p-6 shadow-2xl shadow-violet-200/50 text-white"
                                            style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9 50%, #4c1d95)' }}>
                                            <div className="flex items-center justify-between mb-8">
                                                <div>
                                                    <p className="text-violet-300 text-[10px] font-bold uppercase tracking-widest mb-1">Ayushman Bharat Health Account</p>
                                                    <p className="text-white font-black text-lg tracking-wider">91-0000-0000-7821</p>
                                                </div>
                                                <ShieldCheck className="w-10 h-10 text-violet-300" />
                                            </div>
                                            <div className="flex items-end justify-between">
                                                <div>
                                                    <p className="text-violet-300 text-[10px] font-bold uppercase tracking-widest mb-1">Account Holder</p>
                                                    <p className="text-white font-bold text-base">Rahul Sharma</p>
                                                    <p className="text-violet-300 text-xs">DOB: 12 Jan 1990</p>
                                                </div>
                                                {/* QR grid */}
                                                <div className="w-14 h-14 rounded-xl grid grid-cols-5 gap-0.5 p-1.5 bg-white/20">
                                                    {[...Array(25)].map((_, i) => (
                                                        <div key={i} className="rounded-sm" style={{ background: [0,2,6,8,12,16,18,22,24,3,11,13,21].includes(i) ? 'white' : 'transparent' }} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Linked records badges */}
                                        {[
                                            { label: '12 Prescriptions', top: '-16px', right: '-16px', bg: '#7c3aed' },
                                            { label: '8 Lab Reports', bottom: '24px', left: '-20px', bg: '#059669' },
                                        ].map((b, i) => (
                                            <motion.div key={i} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.2 }}
                                                className="absolute bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2"
                                                style={{ top: b.top, right: b.right, bottom: b.bottom, left: b.left }}>
                                                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: b.bg }} />
                                                <span className="text-xs font-bold text-secondary-800 whitespace-nowrap">{b.label}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* ABHA Features */}
                    <section className="py-16 bg-slate-50">
                        <div className="container mx-auto px-6 max-w-[1100px]">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-heading font-black text-secondary-900 mb-3">What ABHA Does For You</h2>
                                <p className="text-secondary-500 font-sans max-w-xl mx-auto">Everything your health record needs, secured and always with you.</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {abhaFeatures.map((f, i) => (
                                    <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                        className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-violet-200 hover:shadow-lg transition-all duration-300 group">
                                        <div className="w-11 h-11 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-4 group-hover:bg-violet-100 transition-colors">
                                            <f.icon className="w-5 h-5 text-violet-600" strokeWidth={2} />
                                        </div>
                                        <h3 className="font-bold text-secondary-900 mb-2">{f.title}</h3>
                                        <p className="text-secondary-500 text-sm leading-relaxed font-sans">{f.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* How to get started */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-6 max-w-[800px]">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-heading font-black text-secondary-900 mb-3">Get Started in 3 Steps</h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {abhaSteps.map((s, i) => (
                                    <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                                        className="text-center">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 text-white font-black text-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-violet-200">
                                            {s.n}
                                        </div>
                                        <h3 className="font-bold text-secondary-900 mb-2">{s.title}</h3>
                                        <p className="text-secondary-500 text-sm font-sans leading-relaxed">{s.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* ═══════════════════ INSURANCE SECTION ═══════════════════ */}
            {tab === 'insurance' && (
                <div>
                    {/* What we offer */}
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-6 max-w-[1100px]">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
                                    <span className="inline-flex items-center gap-2 text-cyan-600 font-bold tracking-widest uppercase text-xs mb-4 border border-cyan-200 bg-cyan-50 px-4 py-1.5 rounded-full">
                                        <CreditCard className="w-3 h-3" /> Insurance on Ayura
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-heading font-black text-secondary-900 mb-5 leading-tight">
                                        Healthcare Coverage,{' '}
                                        <span className="text-cyan-600">Zero Hassle</span>
                                    </h2>
                                    <p className="text-secondary-500 text-lg leading-relaxed font-sans mb-5">
                                        Navigating health insurance is stressful — endless paperwork, confusing terms, rejected claims. Ayura changes that by embedding your insurance experience directly into your healthcare journey.
                                    </p>
                                    <p className="text-secondary-500 text-lg leading-relaxed font-sans mb-8">
                                        Check your live coverage, find cashless hospitals nearby, file claims digitally and get guided support — all without leaving the app.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-zGMjk63nlaqcMLH_aeYALwibVSHQWeDLiyw5Gv-yedIORQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-7 py-4 rounded-xl font-bold transition-all shadow-lg shadow-cyan-100 group">
                                            Check My Coverage <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Coverage card mockup */}
                                <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                                    className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-100 overflow-hidden">
                                    <div className="px-6 py-5 border-b border-slate-100 bg-gradient-to-r from-cyan-50 to-slate-50">
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Your Active Policy</p>
                                        <p className="text-lg font-black text-secondary-900">Star Health — Family Floater</p>
                                        <p className="text-sm text-slate-500">Sum Insured: ₹10,00,000 · Renews Oct 2025</p>
                                    </div>
                                    <div className="p-6 space-y-3">
                                        {[
                                            { label: 'Hospitalisation', covered: true },
                                            { label: 'OPD Consultations', covered: true },
                                            { label: 'Day Care Surgery', covered: true },
                                            { label: 'Maternity Cover', covered: true },
                                            { label: 'Dental (Major)', covered: false },
                                        ].map((item, i) => (
                                            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1 }}
                                                className="flex items-center gap-3">
                                                <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.covered ? 'bg-emerald-100' : 'bg-slate-100'}`}>
                                                    {item.covered
                                                        ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                                        : <span className="text-slate-400 text-xs font-black">×</span>}
                                                </span>
                                                <span className={`text-sm font-medium ${item.covered ? 'text-secondary-800' : 'text-slate-400'}`}>{item.label}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="px-6 pb-5">
                                        <div className="bg-cyan-50 border border-cyan-100 rounded-xl px-4 py-3 flex items-center justify-between">
                                            <span className="text-sm font-bold text-secondary-800">Nearest Cashless Hospital</span>
                                            <span className="text-sm font-black text-cyan-600">Apollo · 2.1 km →</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Insurance features */}
                    <section className="py-16 bg-slate-50">
                        <div className="container mx-auto px-6 max-w-[1100px]">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-heading font-black text-secondary-900 mb-3">Everything Insurance, Inside Ayura</h2>
                                <p className="text-secondary-500 font-sans max-w-xl mx-auto">From coverage checks to claims — handled end to end in the app.</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {insuranceFeatures.map((f, i) => (
                                    <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                        className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 group">
                                        <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-100 transition-colors">
                                            <f.icon className="w-5 h-5 text-cyan-600" strokeWidth={2} />
                                        </div>
                                        <h3 className="font-bold text-secondary-900 mb-2">{f.title}</h3>
                                        <p className="text-secondary-500 text-sm leading-relaxed font-sans">{f.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Plan types */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-6 max-w-[1000px]">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-heading font-black text-secondary-900 mb-3">Plans Ayura Supports</h2>
                                <p className="text-secondary-500 font-sans">Compatible with all major insurance types and TPAs in India.</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {insurancePlans.map((p, i) => (
                                    <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                                        className="rounded-2xl border border-slate-100 p-6 hover:border-cyan-200 hover:shadow-xl transition-all duration-300">
                                        <div className="text-4xl mb-3">{p.icon}</div>
                                        <h3 className="text-lg font-black text-secondary-900 mb-4">{p.type}</h3>
                                        <ul className="space-y-2">
                                            {p.covers.map(c => (
                                                <li key={c} className="flex items-start gap-2 text-sm text-secondary-600">
                                                    <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                                                    {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* ── Bottom CTA ── */}
            <section className="py-16 bg-gradient-to-br from-secondary-900 to-slate-800 text-white text-center">
                <div className="container mx-auto px-6 max-w-[700px]">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
                            Ready to Secure Your Health?
                        </h2>
                        <p className="text-secondary-400 font-sans mb-8 leading-relaxed">
                            Join the Ayura waitlist and be among the first to experience seamless ABHA integration and smart insurance management.
                        </p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-zGMjk63nlaqcMLH_aeYALwibVSHQWeDLiyw5Gv-yedIORQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-primary-400 hover:to-primary-500 transition-all shadow-xl group">
                            Join the Waitlist <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default InsuranceABHA;
