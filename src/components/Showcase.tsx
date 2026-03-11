import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import patientApp1 from '../assets/patient_app_1.png';
import patientApp2 from '../assets/patient_app_2.png';
import patientApp3 from '../assets/patient_app_3.png';

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
                                <img src={patientApp2} alt="Patient App Screen 2" className="w-full h-auto" />
                            </div>

                            {/* Back Right Image */}
                            <div className="absolute right-0 top-16 transform rotate-6 w-56 shadow-2xl rounded-3xl border-4 border-white bg-white overflow-hidden z-0">
                                <img src={patientApp1} alt="Patient App Screen 1" className="w-full h-auto" />
                            </div>

                            {/* Main Center Image */}
                            <div className="absolute top-0 transform w-64 shadow-2xl rounded-3xl border-4 border-white bg-white overflow-hidden z-10">
                                <img src={patientApp3} alt="Patient App Home" className="w-full h-auto" />
                            </div>

                            {/* Floating badge - Made smaller */}
                            <div className="absolute bottom-20 -right-4 bg-white/95 backdrop-blur py-3 px-5 rounded-xl shadow-xl border border-secondary-100 animate-bounce-slow z-20">
                                <p className="text-secondary-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">Efficiency</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-extrabold text-secondary-900">30%</span>
                                    <span className="text-xs font-semibold text-green-600">Faster Booking</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <span className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-2 block">Download the Ayura app</span>
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

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-secondary-900 hover:bg-secondary-800 text-white px-6 py-3 rounded-xl flex items-center justify-center transition-colors">
                                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.67 5.75.34 7.02-.74 1.77-1.47 3.32-2.39 4.19zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                                <div className="text-left leading-tight">
                                    <div className="text-[10px] text-gray-300">Download on the</div>
                                    <div className="text-sm font-semibold">App Store</div>
                                </div>
                            </button>
                            <button className="bg-white border border-secondary-200 hover:bg-secondary-50 text-secondary-900 px-6 py-3 rounded-xl flex items-center justify-center shadow-sm transition-colors">
                                <svg className="w-6 h-6 mr-3 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186C3.215 21.984 3 21.6 3 21.144V2.856c0-.456.216-.84.609-1.042zM15.541 10.25l-1.033-1.034L4.85 2.122A1.94 1.94 0 015.42 2l10.121 8.25zm.001 3.5L5.42 22a1.94 1.94 0 01-.57-.122l9.658-7.094 1.034-1.034zm1.439-1.438l3.153-1.821c.54-.312.54-.82 0-1.132l-3.153-1.82L15.442 12l1.538 1.538z" /></svg>
                                <div className="text-left leading-tight">
                                    <div className="text-[10px] text-secondary-500">GET IT ON</div>
                                    <div className="text-sm font-bold">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
