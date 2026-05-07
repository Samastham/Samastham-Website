import React from 'react';
import { motion } from 'framer-motion';
import patientApp1 from '../assets/patient_app_1.png';
import patientApp2 from '../assets/patient_app_2.png';
import patientApp3 from '../assets/patient_app_3.png';
import { CheckCircle2, Zap, ShieldCheck, Bell } from 'lucide-react';

const features = [
    'Book in-clinic appointments and home lab tests',
    'Order medicines with 2-hour doorstep delivery',
    'Consult top-tier doctors online via HD video',
    'Set smart automated medicine reminders',
    'Store and share secure digital health records',
    'Read personalized, expert-verified health tips',
];

const floatingBadges = [
    { icon: <Zap className="w-3.5 h-3.5 text-emerald-600" />, label: 'Doctor Response', value: '< 3 Mins', bg: 'bg-white', pos: 'top-[8%] left-[-4%]' },
    { icon: <ShieldCheck className="w-3.5 h-3.5 text-primary-600" />, label: 'Verified', value: 'ABDM Compliant', bg: 'bg-white', pos: 'bottom-[18%] right-[-2%]' },
    { icon: <Bell className="w-3.5 h-3.5 text-violet-600" />, label: 'Smart Reminders', value: 'Auto-Scheduled', bg: 'bg-white', pos: 'bottom-[38%] left-[-6%]' },
];

const Showcase = () => {
    return (
        <section className="py-24 overflow-hidden bg-white" id="showcase">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* ── Visual: 3-phone composite ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 relative flex justify-center items-center min-h-[580px]"
                    >
                        {/* Glow blob */}
                        <div className="absolute inset-0 bg-primary-200/25 rounded-full blur-[90px] scale-75 pointer-events-none" />

                        {/* Phone 1 — far left, tilted back */}
                        <motion.div
                            animate={{ y: [0, -14, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                            className="absolute left-[2%] top-[10%] w-[42%] z-10 -rotate-[8deg]"
                            style={{ transformOrigin: 'bottom center' }}
                        >
                            <div className="bg-secondary-900 rounded-[28px] p-[5px] shadow-2xl shadow-secondary-900/25 border border-secondary-800">
                                <div className="rounded-[24px] overflow-hidden">
                                    <img src={patientApp1} alt="Ayura patient app screen 1" className="w-full h-auto block" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Phone 2 — center, front, upright */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="relative w-[44%] z-30"
                            style={{ transformOrigin: 'bottom center' }}
                        >
                            <div className="bg-secondary-900 rounded-[30px] p-[6px] shadow-[0_40px_80px_rgba(0,0,0,0.28)] border border-secondary-800">
                                <div className="rounded-[25px] overflow-hidden">
                                    <img src={patientApp2} alt="Ayura patient app home screen" className="w-full h-auto block" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Phone 3 — far right, tilted back */}
                        <motion.div
                            animate={{ y: [0, -16, 0] }}
                            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                            className="absolute right-[2%] top-[10%] w-[42%] z-10 rotate-[8deg]"
                            style={{ transformOrigin: 'bottom center' }}
                        >
                            <div className="bg-secondary-900 rounded-[28px] p-[5px] shadow-2xl shadow-secondary-900/25 border border-secondary-800">
                                <div className="rounded-[24px] overflow-hidden">
                                    <img src={patientApp3} alt="Ayura patient app screen 3" className="w-full h-auto block" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating badges */}
                        {floatingBadges.map((badge, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
                                className={`absolute ${badge.pos} ${badge.bg} rounded-xl shadow-xl border border-secondary-100 px-3.5 py-2.5 z-40`}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-lg bg-secondary-50 flex items-center justify-center flex-shrink-0">
                                        {badge.icon}
                                    </div>
                                    <div>
                                        <p className="text-[9px] text-secondary-400 font-bold uppercase tracking-wider">{badge.label}</p>
                                        <p className="text-xs font-black text-secondary-900 leading-none">{badge.value}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* ── Content ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 max-w-lg"
                    >
                        <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-3 block">
                            The Ayura Patient App
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-heading font-black text-secondary-900 mb-5 leading-tight">
                            Your Complete{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Healthcare Companion
                            </span>
                        </h2>
                        <p className="text-lg text-secondary-500 mb-8 leading-relaxed font-sans">
                            Ayura puts every healthcare need in one place. Connect with top doctors, 
                            manage your medical history, and stay on top of your health — instantly.
                        </p>

                        <ul className="space-y-3">
                            {features.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ delay: i * 0.07, duration: 0.4 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                    <span className="text-secondary-700 font-medium font-sans text-sm">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
