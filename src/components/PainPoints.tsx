import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Users, Clock, AlertCircle } from 'lucide-react';

const crisisStats = [
    {
        icon: <TrendingDown className="w-8 h-8" />,
        value: '1:1000',
        label: 'Doctor-to-Patient Ratio',
        desc: 'India has one of the world\'s most severe doctor shortages, leaving millions without accessible care.',
        color: 'text-red-500',
        bg: 'bg-red-50',
        border: 'border-red-100',
    },
    {
        icon: <Users className="w-8 h-8" />,
        value: '65%',
        label: 'Rural Healthcare Gap',
        desc: '65% of India\'s population lives in rural areas with less than 30% access to quality healthcare infrastructure.',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
        border: 'border-orange-100',
    },
    {
        icon: <Clock className="w-8 h-8" />,
        value: '4+ hrs',
        label: 'Average Wait Time',
        desc: 'Patients in Tier-2 and Tier-3 cities spend an average of 4 hours waiting to see a doctor.',
        color: 'text-yellow-600',
        bg: 'bg-yellow-50',
        border: 'border-yellow-100',
    },
    {
        icon: <AlertCircle className="w-8 h-8" />,
        value: '₹5L Cr+',
        label: 'Economic Loss Annually',
        desc: 'Preventable diseases cost India over ₹5 lakh crore per year due to delayed and inaccessible care.',
        color: 'text-primary-600',
        bg: 'bg-primary-50',
        border: 'border-primary-100',
    },
];

const PainPoints = () => {
    return (
        <section className="py-28 bg-white relative overflow-hidden" id="problem">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/20 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-100/20 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-flex items-center gap-2 text-red-500 font-bold tracking-widest uppercase text-sm mb-4">
                        <AlertCircle className="w-4 h-4" />
                        The Problem We're Solving
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary-900 mb-6 leading-tight">
                        The Healthcare Access{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                            Crisis in India
                        </span>
                    </h2>
                    <p className="text-secondary-500 text-xl leading-relaxed font-sans">
                        Millions of Indians struggle daily with fragmented, inaccessible, and unaffordable healthcare.
                        Ayura is engineered to bridge this critical gap — permanently.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {crisisStats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`p-8 rounded-3xl border ${stat.border} ${stat.bg} group hover:scale-105 transition-transform duration-300 cursor-default`}
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-white border ${stat.border} flex items-center justify-center mb-6 ${stat.color} shadow-sm`}>
                                {stat.icon}
                            </div>
                            <div className={`text-4xl font-heading font-black mb-2 ${stat.color}`}>
                                {stat.value}
                            </div>
                            <h3 className="font-bold text-secondary-900 mb-3 text-lg">{stat.label}</h3>
                            <p className="text-secondary-500 text-sm leading-relaxed font-sans">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bridge statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary-900/20">
                        Ayura was built to solve every single one of these problems. 🩺
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PainPoints;
