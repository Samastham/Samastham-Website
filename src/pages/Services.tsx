import React from 'react';
import { Search, Video, UserCheck, Stethoscope, TestTube, ChevronRight, Star, ShieldCheck, Clock, Activity } from 'lucide-react';

const specialties = [
    { name: 'Cardiology', icon: Activity, desc: 'Heart specialists' }, // Will import locally
    { name: 'Dermatology', icon: 'Sparkles', desc: 'Skin & hair care' }, // Using string as placeholder for custom icon if needed
    { name: 'Pediatrics', icon: 'Baby', desc: 'Child specialists' },
    { name: 'Orthopedics', icon: 'Bone', desc: 'Bone & joint care' },
    { name: 'Neurology', icon: 'Brain', desc: 'Brain & nerves' },
    { name: 'Dentistry', icon: 'Smile', desc: 'Dental care' },
];

const Services = () => {
    return (
        <div className="bg-secondary-50 min-h-screen pt-20">

            {/* 1. Hero Search Section */}
            <section className="bg-primary-600 text-white py-20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Your Health. Our Priority.</h1>
                    <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto font-sans">
                        Find the best doctors, clinics, and hospitals nearest to you. Book appointments instantly.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">
                        <div className="flex-1 flex items-center bg-secondary-50 p-3 rounded-xl border border-secondary-200">
                            <Search className="w-5 h-5 text-secondary-400 mr-3" />
                            <input type="text" placeholder="Search doctors, specialties, symptoms..." className="w-full bg-transparent outline-none text-secondary-900 border-none focus:ring-0 placeholder:text-secondary-400" />
                        </div>
                        <div className="flex-1 flex items-center bg-secondary-50 p-3 rounded-xl border border-secondary-200">
                            <svg className="w-5 h-5 text-secondary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <input type="text" placeholder="Your location..." className="w-full bg-transparent outline-none text-secondary-900 border-none focus:ring-0 placeholder:text-secondary-400" />
                        </div>
                        <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold transition-colors w-full md:w-auto">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Primary Consultation Categories */}
            <section className="py-16 -mt-10 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {[
                            { title: "Video Consult", icon: <Video className="w-8 h-8" />, desc: "Talk to a doctor online instantly within 15 minutes.", color: "bg-blue-50 text-blue-600" },
                            { title: "In-Clinic Visit", icon: <UserCheck className="w-8 h-8" />, desc: "Find top doctors near you and book confirmed appointments.", color: "bg-teal-50 text-teal-600" },
                            { title: "Surgeries", icon: <Stethoscope className="w-8 h-8" />, desc: "Safe and trusted surgery centers with expert surgeons.", color: "bg-purple-50 text-purple-600" },
                            { title: "Lab Tests", icon: <TestTube className="w-8 h-8" />, desc: "Sample collection from home and rapid digital reports.", color: "bg-orange-50 text-orange-600" },
                        ].map((cat, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-xl shadow-secondary-200/40 border border-secondary-100 hover:-translate-y-2 transition-transform cursor-pointer group">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${cat.color} group-hover:scale-110 transition-transform`}>
                                    {cat.icon}
                                </div>
                                <h3 className="text-xl font-heading font-bold text-secondary-900 mb-2">{cat.title}</h3>
                                <p className="text-secondary-500 text-sm mb-4">{cat.desc}</p>
                                <div className="flex items-center text-primary-600 font-semibold text-sm">
                                    Book Now <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* 3. Top Specialties */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-2">Consult Top Specialties</h2>
                            <p className="text-secondary-500 font-sans">Book appointments with certified specialists across India.</p>
                        </div>
                        <button className="hidden md:block text-primary-600 font-semibold hover:underline">View All Specialties</button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {/* Visual Icons for specialties */}
                        {[
                            { name: 'Dentistry', img: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' },
                            { name: 'Cardiology', img: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
                            { name: 'Dermatology', img: 'M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.1 0-6-2.27-6-6.2 0-2.47 2.05-5.69 6-9.45 3.95 3.76 6 6.98 6 9.45 0 3.93-2.9 6.2-6 6.2z' },
                            { name: 'Pediatrics', img: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
                            { name: 'Neurology', img: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z' },
                            { name: 'Orthopedics', img: 'M18.17 8.66l-6.49-6.49c-.39-.39-1.02-.39-1.41 0l-2.12 2.12c-.39.39-.39 1.02 0 1.41l1.41 1.41-5.66 5.66c-.39.39-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.66-5.66 1.41 1.41c.39.39 1.02.39 1.41 0l2.12-2.12c.38-.38.38-1.02-.01-1.41z' }
                        ].map((spec, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-6 bg-secondary-50 rounded-2xl border border-secondary-100 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer group">
                                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-primary-500 group-hover:text-primary-600 group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={spec.img} />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-secondary-900 text-center">{spec.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Trust Matrix / Value Prop */}
            <section className="py-20 bg-secondary-900 text-white border-t-4 border-primary-500 relative overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">Why Ayura Subscriptions Are Better</h2>

                    <div className="grid md:grid-cols-3 gap-10 text-center">
                        {[
                            { icon: <ShieldCheck className="w-10 h-10 mx-auto mb-4 text-primary-400" />, title: "100% Verified Doctors", desc: "Every doctor on Ayura undergoes a stringent 3-step verification process to ensure absolute clinical quality." },
                            { icon: <Star className="w-10 h-10 mx-auto mb-4 text-primary-400" />, title: "2 Million+ Patient Reviews", desc: "Make informed choices by reading genuine, verified patient feedback before booking." },
                            { icon: <Clock className="w-10 h-10 mx-auto mb-4 text-primary-400" />, title: "Zero Wait Times", desc: "Confirmed appointments that respect your time. Instant refunds for any delays over 30 mins." }
                        ].map((val, i) => (
                            <div key={i} className="p-4">
                                {val.icon}
                                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                                <p className="text-secondary-400 font-sans">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;
