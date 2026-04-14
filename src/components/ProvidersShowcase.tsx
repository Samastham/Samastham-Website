import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import providerHomeNew from '../assets/provider_home_new.jpg';
import providerOffline from '../assets/provider_offline.jpg';
import providerNotifications from '../assets/provider_notifications.jpg';

const ProvidersShowcase = () => {
    return (
        <section className="py-24 overflow-hidden bg-slate-50" id="providers-showcase">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    {/* Visual */}
                    <div className="flex-1 relative flex justify-center">
                        <div className="absolute inset-0 bg-primary-200/20 rounded-full blur-3xl transform translate-x-1/4"></div>
                        <motion.div
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 w-full max-w-[500px] mx-auto h-[600px] flex items-center justify-center"
                        >
                            {/* Back Left Image */}
                            <div className="absolute left-0 top-10 transform -rotate-6 w-56 shadow-2xl rounded-3xl border-4 border-white bg-white overflow-hidden z-0">
                                <img src={providerNotifications} alt="Provider Notifications" className="w-full h-auto" />
                            </div>

                            {/* Back Right Image */}
                            <div className="absolute right-0 top-16 transform rotate-6 w-56 shadow-2xl rounded-3xl border-4 border-white bg-white overflow-hidden z-0">
                                <img src={providerOffline} alt="Provider Offline Toggle" className="w-full h-auto" />
                            </div>

                            {/* Main Center Image */}
                            <div className="absolute top-0 transform w-64 shadow-2xl rounded-3xl border-4 border-white bg-white overflow-hidden z-10">
                                <img src={providerHomeNew} alt="Provider Home Dashboard" className="w-full h-auto" />
                            </div>

                            {/* Floating badge */}
                            <div className="absolute bottom-20 -left-4 bg-white/95 backdrop-blur py-3 px-5 rounded-xl shadow-xl border border-secondary-100 animate-bounce-slow z-20">
                                <p className="text-primary-600 text-[10px] font-bold uppercase tracking-wider mb-0.5">Verified</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-extrabold text-secondary-900">ABDM</span>
                                    <span className="text-xs font-semibold text-green-600">Compliant</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <span className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-2 block">For Healthcare Providers</span>
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6 leading-tight">
                            The Modern OS for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Medical Practices</span>
                        </h2>
                        <p className="text-lg text-secondary-500 mb-8 leading-relaxed font-sans">
                            Ayura Providers gives you the tools to manage your clinic, connect with patients instantly, and join India's digital health revolution through ABDM-verified profiles.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                'Instant ABDM/HPR government-verified onboarding',
                                'Smart AI Assistant for hands-free roster management',
                                'Receive and manage instant online consultation requests',
                                'Complete clinic management with smart scheduling',
                                'Real-time business intelligence and performance metrics',
                                'Secure, encrypted digital health records (PHR)'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-secondary-700 font-medium font-sans">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Removed CTA buttons for pre-launch info phase */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProvidersShowcase;
