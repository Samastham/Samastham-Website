import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import PhoneFrame from './ui/PhoneFrame';
import userAppHome from '../assets/user_app_home.jpg';
import userAppMap from '../assets/user_app_map.jpg';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-white via-primary-50 to-white" id="home">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-primary-200/40 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-secondary-200/40 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                            </div>
                            <span className="text-sm font-medium text-secondary-600">50K+ Patients Trusted</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-heading font-bold tracking-tight text-secondary-900 leading-[1.1] mb-6">
                            Engineering the Future of <br className="hidden lg:block" />
                            <span className="text-primary-600">Digital Health</span>
                        </h1>

                        <p className="text-xl text-secondary-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                            Ayura builds advanced AI ecosystems to bridge the gap between quality medical care
                            and the underserved. We don't just create apps; we engineer accessible healthcare infrastructure.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
                            <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-primary-500/20">
                                Partner With Us
                            </Button>
                            <Button variant="ghost" size="lg" className="w-full sm:w-auto">Explore Features</Button>
                        </div>

                        {/* Decorative spiral/spring from reference (simplified as SVG) */}
                        <div className="absolute -left-12 bottom-0 w-24 h-24 -z-10 opacity-20 text-primary-500 hidden lg:block">
                            <svg viewBox="0 0 100 100" fill="currentColor">
                                <path d="M20,50 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="10 15" />
                            </svg>
                        </div>

                    </motion.div>

                    {/* Right Content - Phones */}
                    <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none h-[600px] flex items-center justify-center">
                        {/* Phone 1 (Back/Left - Doctor/Availability Slots) */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-1/2 top-1/2 -translate-x-[60%] -translate-y-[60%] z-10 scale-90 rotate-[-6deg]"
                        >
                            <PhoneFrame src={userAppMap} alt="App Map Page" className="shadow-2xl shadow-primary-900/20" />
                        </motion.div>

                        {/* Phone 2 (Front/Right - Patient Home Page) */}
                        <motion.div
                            animate={{ y: [0, -30, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute left-1/2 top-1/2 -translate-x-[30%] -translate-y-[40%] z-20 rotate-[12deg]"
                        >
                            <PhoneFrame src={userAppHome} alt="Patient Home Page" className="shadow-2xl shadow-secondary-900/20" />
                        </motion.div>

                        {/* Abstract Blur behind phones */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-r from-primary-400/30 to-purple-400/30 blur-3xl -z-10 bg-blend-multiply"></div>
                    </div>

                </div >
            </div >
        </section >
    );
};

export default Hero;
