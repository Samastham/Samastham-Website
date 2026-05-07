import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Late-night medical concerns were always stressful until I started using Ayura. The AI health assistant gave me immediate, accurate guidance in Hindi — without me having to type a single word.",
        name: "Ramesh K.",
        role: "Farmer",
        location: "Madhya Pradesh",
        initials: "RK",
        color: "bg-primary-600",
    },
    {
        quote: "Scheduling appointments in Tamil for my elderly parents is now effortless. Ayura's multilingual interface made quality healthcare feel genuinely accessible for the first time.",
        name: "Lakshmi I.",
        role: "Homemaker",
        location: "Chennai",
        initials: "LI",
        color: "bg-violet-600",
    },
    {
        quote: "The instant consultation feature is a game-changer. I connected with a qualified doctor within 3 minutes during a medical emergency at 2 AM. Truly remarkable.",
        name: "Arjun R.",
        role: "Software Engineer",
        location: "Hyderabad",
        initials: "AR",
        color: "bg-emerald-600",
    },
    {
        quote: "Managing my clinic through the Ayura Providers app has completely transformed how I run my practice. Patient scheduling, records, and consultations — all in one clean interface.",
        name: "Dr. Priya M.",
        role: "General Physician",
        location: "Bangalore",
        initials: "PM",
        color: "bg-orange-600",
    },
    {
        quote: "The ABHA health locker feature means I no longer carry physical reports. My entire medical history is available to share with any doctor in seconds. This is the future.",
        name: "Vikram S.",
        role: "Business Owner",
        location: "Pune",
        initials: "VS",
        color: "bg-primary-700",
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [dir, setDir] = useState(1);
    const intervalRef = useRef<ReturnType<typeof setInterval>>();

    const go = (next: number) => {
        const newIdx = (next + testimonials.length) % testimonials.length;
        setDir(newIdx > current ? 1 : -1);
        setCurrent(newIdx);
        // Reset auto-play timer on manual navigation
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setDir(1);
            setCurrent(p => (p + 1) % testimonials.length);
        }, 5000);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setDir(1);
            setCurrent(p => (p + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(intervalRef.current);
    }, []);

    const t = testimonials[current];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="testimonials">
            {/* BG blobs */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-primary-100/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-100/40 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[820px] relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-3 block">
                        What People Are Saying
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-secondary-900 leading-tight">
                        Real Stories,{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            Real Impact
                        </span>
                    </h2>
                </motion.div>

                {/* Card — no overlap, clean edges */}
                <AnimatePresence mode="wait" custom={dir}>
                    <motion.div
                        key={current}
                        custom={dir}
                        initial={{ opacity: 0, x: dir * 70 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: dir * -70 }}
                        transition={{ duration: 0.38, ease: 'easeInOut' }}
                        className="bg-white rounded-3xl border border-secondary-100 shadow-lg p-8 md:p-12 relative overflow-hidden"
                    >
                        {/* Decorative quote */}
                        <Quote className="absolute top-6 right-8 w-16 h-16 text-secondary-50 rotate-180 pointer-events-none" strokeWidth={1} />

                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>

                        {/* Quote text */}
                        <p className="text-xl md:text-2xl text-secondary-800 font-heading font-medium leading-relaxed mb-8 relative z-10">
                            "{t.quote}"
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0`}>
                                {t.initials}
                            </div>
                            <div>
                                <p className="font-bold text-secondary-900">{t.name}</p>
                                <p className="text-secondary-500 text-sm font-sans">{t.role} · {t.location}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Controls row — dots + buttons all in one centered row below the card */}
                <div className="flex items-center justify-center gap-4 mt-7">
                    {/* Prev button */}
                    <button
                        onClick={() => go(current - 1)}
                        className="w-10 h-10 rounded-full bg-white border border-secondary-200 shadow-sm flex items-center justify-center hover:border-primary-400 hover:text-primary-600 transition-colors flex-shrink-0"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Dot indicators */}
                    <div className="flex items-center gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => go(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    i === current
                                        ? 'w-8 bg-primary-600'
                                        : 'w-2 bg-secondary-200 hover:bg-secondary-400'
                                }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Next button */}
                    <button
                        onClick={() => go(current + 1)}
                        className="w-10 h-10 rounded-full bg-white border border-secondary-200 shadow-sm flex items-center justify-center hover:border-primary-400 hover:text-primary-600 transition-colors flex-shrink-0"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
