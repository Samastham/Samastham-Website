import React from 'react';
import { Target, Heart, Globe, Users, Award, Shield } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-20 bg-white min-h-screen">

            {/* 1. Hero / Mission */}
            <section className="relative py-24 bg-secondary-50 overflow-hidden border-b border-secondary-200">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-primary-200/40 rounded-full blur-3xl opacity-50" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-secondary-900 mb-6 leading-tight">
                            Making Quality Healthcare <br /> <span className="text-primary-600">Accessible to Billion+ People</span>
                        </h1>
                        <p className="text-xl text-secondary-600 mb-8 font-sans leading-relaxed">
                            Ayura is India's leading digital health ecosystem. We bridge the gap between world-class medical professionals and patients from every corner of the country using advanced AI and inclusive design.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Impact Counters */}
            <section className="py-16 bg-primary-600 text-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary-400/30">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">50M+</div>
                            <div className="text-primary-100 font-medium">Patients Covered</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">150K+</div>
                            <div className="text-primary-100 font-medium">Verified Doctors</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">98%</div>
                            <div className="text-primary-100 font-medium">Tier-2/3 Penetration</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">12+</div>
                            <div className="text-primary-100 font-medium">Regional Languages</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Values */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">Our Core Values</h2>
                        <p className="text-secondary-600 text-lg">The principles that drive every algorithm we write and every product we ship.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { icon: <Target className="w-8 h-8" />, title: "Patient-First Approach", desc: "Every decision is evaluated by how it improves patient outcomes and access." },
                            { icon: <Shield className="w-8 h-8" />, title: "Uncompromising Quality", desc: "Clinical excellence is non-negotiable. Only the top 5% of applying doctors are onboarded." },
                            { icon: <Globe className="w-8 h-8" />, title: "Radical Inclusivity", desc: "Building UI for users who have never used digital tools before. Total tech democratisation." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-secondary-50 rounded-2xl border border-secondary-100 hover:shadow-xl transition-shadow">
                                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-secondary-900 mb-3 font-heading">{item.title}</h3>
                                <p className="text-secondary-600 leading-relaxed font-sans">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Leadership Board Placeholder */}
            <section className="py-24 bg-secondary-900 text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-48 h-48 mx-auto rounded-full bg-secondary-800 mb-6 overflow-hidden border-4 border-secondary-700 group-hover:border-primary-500 transition-colors">
                                    {/* Image placeholder */}
                                    <img src={`https://i.pravatar.cc/300?img=${i + 11}`} alt="Leader" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-1 font-heading">Executive Name</h3>
                                <p className="text-primary-400 text-sm uppercase tracking-wider font-semibold">C-Level Title</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
