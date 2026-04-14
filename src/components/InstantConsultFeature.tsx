import React from 'react';
import { motion } from 'framer-motion';
import PhoneFrame from './ui/PhoneFrame';
import providerOffline from '../assets/provider_offline.jpg';
import { Zap, Clock, ShieldCheck } from 'lucide-react';

const InstantConsultFeature = () => {
    return (
        <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual */}
                    <div className="w-full lg:w-1/2 flex justify-center relative">
                        <div className="absolute inset-0 bg-primary-100 rounded-full blur-[100px] opacity-40 -z-10"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 w-full max-w-[340px] transform -rotate-2"
                        >
                            <PhoneFrame src={providerOffline} alt="Instant Consultations" className="shadow-2xl shadow-primary-900/10" />
                            
                            {/* Floating badge */}
                            <div className="absolute top-1/4 -right-8 md:-right-16 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow border border-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Doctor Response</p>
                                        <p className="font-extrabold text-gray-900">&lt; 3 Mins</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-3 block">On-Demand Care</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary-900 mb-6 leading-tight">
                            See a Doctor <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Right Now</span>
                        </h2>
                        <p className="text-lg text-secondary-500 mb-10 leading-relaxed font-sans max-w-lg">
                            No appointments. No waiting rooms. When you need medical guidance urgently, Ayura connects you with a verified, available doctor in minutes — from wherever you are.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-gray-900">Instant Access to Available Doctors</h4>
                                    <p className="text-secondary-500 leading-relaxed text-sm">Connect with a verified physician who is online and ready to attend to you — no scheduling, no delays, no friction.</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-gray-900">Anytime, Anywhere Care</h4>
                                    <p className="text-secondary-500 leading-relaxed text-sm">Whether it's a late-night concern or a sudden health question during work hours, qualified medical help is always just a tap away.</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-gray-900">Verified & Trustworthy Practitioners</h4>
                                    <p className="text-secondary-500 leading-relaxed text-sm">Every doctor on the Ayura platform is ABDM-verified with validated credentials, so you can consult with complete confidence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstantConsultFeature;

