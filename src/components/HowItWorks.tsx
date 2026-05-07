import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    Search, CalendarCheck, Video, FlaskConical, Pill, FileText,
    ArrowRight, CheckCircle
} from 'lucide-react';

const journey = [
    {
        step: '01',
        Icon: Search,
        color: '#0093a1',
        gradFrom: '#0093a1',
        gradTo: '#26a5b0',
        label: 'Discover',
        title: 'Find the Right Care',
        desc: 'Search doctors by specialty, language & location. Filter by real-time availability and verified ratings — no phone calls needed.',
        tags: ['Doctor Search', 'Filter by Language', 'Live Availability'],
        side: 'left' as const,
    },
    {
        step: '02',
        Icon: CalendarCheck,
        color: '#7c3aed',
        gradFrom: '#7c3aed',
        gradTo: '#a855f7',
        label: 'Book',
        title: 'Book Instantly',
        desc: 'Confirm in-clinic appointments or video consultations in seconds. Slots update in real-time — no double-bookings, ever.',
        tags: ['One-Tap Booking', 'Real-Time Slots', 'Calendar Sync'],
        side: 'right' as const,
    },
    {
        step: '03',
        Icon: Video,
        color: '#059669',
        gradFrom: '#059669',
        gradTo: '#10b981',
        label: 'Consult',
        title: 'Get Treated',
        desc: 'Attend HD video consultations or visit the clinic. Need urgent help? Our AI health assistant guides you instantly — 24/7, in 22+ languages.',
        tags: ['HD Video Call', 'Instant AI Guidance', 'In-Clinic Visit'],
        side: 'left' as const,
    },
    {
        step: '04',
        Icon: FlaskConical,
        color: '#d97706',
        gradFrom: '#d97706',
        gradTo: '#f59e0b',
        label: 'Diagnose',
        title: 'Lab Tests at Home',
        desc: 'Book home sample collection from nearby NABL-certified labs. Reports are delivered digitally and auto-linked to your health profile.',
        tags: ['Home Collection', 'NABL Certified', 'Digital Reports'],
        side: 'right' as const,
    },
    {
        step: '05',
        Icon: Pill,
        color: '#dc2626',
        gradFrom: '#dc2626',
        gradTo: '#ef4444',
        label: 'Medicate',
        title: 'Medicines Delivered',
        desc: 'Order prescribed medicines and get them delivered to your door in under 2 hours. Smart reminders ensure you never miss a dose.',
        tags: ['2-Hour Delivery', 'Auto-Reminders', 'Prescription Linked'],
        side: 'left' as const,
    },
    {
        step: '06',
        Icon: FileText,
        color: '#64748b',
        gradFrom: '#334155',
        gradTo: '#64748b',
        label: 'Manage',
        title: 'Complete Health Record',
        desc: 'All prescriptions, lab reports, and visit histories stored securely in your ABHA health locker — shareable with any doctor, anytime.',
        tags: ['ABHA Locker', 'Secure Sharing', 'Full History'],
        side: 'right' as const,
    },
];

const cardVariants: Variants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const nodeVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, type: 'spring', stiffness: 250 } },
};

const HowItWorks = () => {
    return (
        <section className="py-24 bg-secondary-900 text-white relative overflow-hidden" id="how-it-works">
            {/* Radial ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(0,147,161,0.12),transparent)] pointer-events-none" />

            <div className="max-w-[950px] mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-primary-400 font-bold tracking-widest uppercase text-xs mb-5 border border-primary-500/30 bg-primary-500/10 px-5 py-2 rounded-full">
                        Your Healthcare Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black mb-5 leading-tight">
                        From Search to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-400 to-emerald-400">
                            Recovery
                        </span>
                    </h2>
                    <p className="text-secondary-400 text-lg max-w-xl mx-auto leading-relaxed font-sans">
                        Ayura guides you through every step of your health journey — seamlessly, in one app.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical center line */}
                    <div
                        className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 pointer-events-none"
                        style={{
                            background: 'linear-gradient(to bottom, transparent, #0093a170 10%, #1e293b 50%, #0093a170 90%, transparent)'
                        }}
                    />

                    <div className="flex flex-col gap-7">
                        {journey.map((item, i) => {
                            const isLeft = item.side === 'left';
                            return (
                                <div key={i} className="grid items-center" style={{ gridTemplateColumns: '1fr 80px 1fr' }}>

                                    {/* Left slot */}
                                    {isLeft ? (
                                        <motion.div
                                            variants={cardVariants}
                                            initial="hiddenLeft"
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.3 }}
                                            className="pr-5"
                                        >
                                            <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300 group cursor-default">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${item.gradFrom}30, ${item.gradTo}30)`, border: `1px solid ${item.color}40` }}>
                                                        <item.Icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={2} />
                                                    </div>
                                                    <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: item.color }}>
                                                        {item.step} · {item.label}
                                                    </span>
                                                </div>
                                                <h3 className="text-base font-heading font-bold text-white mb-2 leading-snug">{item.title}</h3>
                                                <p className="text-secondary-400 text-xs leading-relaxed font-sans mb-3">{item.desc}</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {item.tags.map(tag => (
                                                        <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ color: item.color, border: `1px solid ${item.color}50`, background: `${item.color}15` }}>{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <div className="pr-5" />
                                    )}

                                    {/* Center node */}
                                    <motion.div
                                        variants={nodeVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.5 }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 rounded-full blur-lg opacity-50 scale-150" style={{ background: item.color }} />
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg relative z-10 border-[3px] border-secondary-900"
                                                style={{ background: `linear-gradient(135deg, ${item.gradFrom}, ${item.gradTo})` }}
                                            >
                                                <item.Icon className="w-5 h-5 text-white" strokeWidth={2} />
                                            </div>
                                        </div>
                                        <div className="mt-1 text-[10px] font-black text-secondary-600 tracking-widest">{item.step}</div>
                                    </motion.div>

                                    {/* Right slot */}
                                    {!isLeft ? (
                                        <motion.div
                                            variants={cardVariants}
                                            initial="hiddenRight"
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.3 }}
                                            className="pl-5"
                                        >
                                            <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300 group cursor-default">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${item.gradFrom}30, ${item.gradTo}30)`, border: `1px solid ${item.color}40` }}>
                                                        <item.Icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={2} />
                                                    </div>
                                                    <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: item.color }}>
                                                        {item.step} · {item.label}
                                                    </span>
                                                </div>
                                                <h3 className="text-base font-heading font-bold text-white mb-2 leading-snug">{item.title}</h3>
                                                <p className="text-secondary-400 text-xs leading-relaxed font-sans mb-3">{item.desc}</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {item.tags.map(tag => (
                                                        <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ color: item.color, border: `1px solid ${item.color}50`, background: `${item.color}15` }}>{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <div className="pl-5" />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* End: You're Healthy */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mt-8"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl border-4 border-secondary-900">
                                <CheckCircle className="w-7 h-7 text-white" />
                            </div>
                            <span className="text-emerald-400 font-bold text-sm tracking-wide">You're Healthy ✦</span>
                        </div>
                    </motion.div>
                </div>

                {/* CTA */}
                <div className="text-center mt-14">
                    <a
                        href="#early-access"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:from-primary-400 hover:to-primary-500 transition-all shadow-xl shadow-primary-900/40 group"
                    >
                        Start Your Journey
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

