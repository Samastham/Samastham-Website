import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import userAppHome from '../assets/user_app_home.jpg';
import userAppMap from '../assets/user_app_map.jpg';

const Showcase = () => {
    return (
        <section className="py-24 overflow-hidden" id="showcase">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual */}
                    <div className="flex-1 relative flex justify-center">
                        <div className="absolute inset-0 bg-primary-200/30 rounded-full blur-3xl transform -translate-x-1/4"></div>
                        <motion.div
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 w-full max-w-[500px] mx-auto h-[600px] flex items-center justify-center"
                        >
                            {/* Back Left Image */}
                            <div className="absolute left-0 top-10 transform -rotate-6 w-56 shadow-2xl rounded-3xl border-4 border-white bg-white overflow-hidden z-0">
                                <img src={userAppMap} alt="Patient App Map" className="w-full h-auto" />
                            </div>

                            {/* Back Right Image */}
                            <div className="absolute right-0 top-16 transform rotate-6 w-56 shadow-2xl rounded-3xl border-4 border-white bg-white overflow-hidden z-0">
                                <img src={userAppMap} alt="Patient App Map 2" className="w-full h-auto" />
                            </div>

                            {/* Main Center Image */}
                            <div className="absolute top-0 transform w-64 shadow-2xl rounded-3xl border-4 border-white bg-white overflow-hidden z-10">
                                <img src={userAppHome} alt="Patient App Home" className="w-full h-auto" />
                            </div>

                            {/* Floating badge */}
                            <div className="absolute bottom-20 -right-4 bg-white/95 backdrop-blur py-3 px-5 rounded-xl shadow-xl border border-secondary-100 animate-bounce-slow z-20">
                                <p className="text-secondary-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">Doctor Verified</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-extrabold text-secondary-900">ABDM</span>
                                    <span className="text-xs font-semibold text-primary-600">Compliant</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <span className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-2 block">The Ayura Patient App</span>
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6 leading-tight">
                            Your Complete <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Healthcare Companion</span>
                        </h2>
                        <p className="text-lg text-secondary-500 mb-8 leading-relaxed font-sans">
                            Ayura puts all your healthcare needs in one place. Connect with top doctors, manage your medical history, and stay on top of your health journey instantly.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                'Book in-clinic appointments and home lab tests',
                                'Order medicines with 2-hour doorstep delivery',
                                'Consult top-tier doctors online via HD video',
                                'Set smart automated medicine reminders',
                                'Store and share secure digital health records',
                                'Read personalized, expert-verified health tips'
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

                        {/* App Download buttons removed for pre-launch phase */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
