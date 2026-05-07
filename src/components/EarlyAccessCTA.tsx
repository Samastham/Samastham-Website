import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const perks = [
    'Priority access to the Ayura app on launch day',
    'Exclusive onboarding support from our health team',
    'Free 3-month premium plan for early subscribers',
    'Direct channel to shape the product roadmap',
];

const EarlyAccessCTA = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@') || !email.includes('.')) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        setSubmitted(true);
        setEmail('');
    };

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
                        Launching Soon — Limited Spots
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
                    Be First to Experience<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-400">
                        The Future of Healthcare
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-secondary-600 text-xl text-center max-w-2xl mx-auto mb-12 font-sans leading-relaxed"
                >
                    Join thousands of people already on the waitlist. Get exclusive early access, premium benefits, and help us build India's most accessible healthcare platform.
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

                {/* Email form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {submitted ? (
                        <div className="max-w-md mx-auto text-center bg-white border border-secondary-200 rounded-3xl px-8 py-10 shadow-xl shadow-secondary-200/50">
                            <div className="text-5xl mb-4">🎉</div>
                            <h3 className="text-secondary-900 font-bold text-2xl font-heading mb-2">You're on the list!</h3>
                            <p className="text-secondary-600 font-sans">We'll notify you the moment Ayura launches. Get ready to experience healthcare like never before.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate className="max-w-lg mx-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                    placeholder="Enter your email address"
                                    className="flex-1 bg-white border border-secondary-200 rounded-xl px-5 py-4 text-secondary-900 placeholder:text-secondary-400 focus:ring-2 focus:ring-primary-500 outline-none font-sans shadow-sm"
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:from-primary-400 hover:to-primary-500 transition-all shadow-xl shadow-primary-900/30 group whitespace-nowrap"
                                >
                                    Get Early Access
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                            {error && <p className="text-red-500 text-sm mt-2 text-center font-sans font-medium">{error}</p>}
                            <p className="text-secondary-500 text-xs text-center mt-4 font-sans font-medium">
                                No spam, ever. We respect your privacy. Unsubscribe anytime.
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default EarlyAccessCTA;
