import React, { useState } from 'react';
import { Check } from 'lucide-react';
import providerHome from '../assets/provider_home.jpg';
import providerAssistant from '../assets/provider_assistant.jpg';
import providerInstant from '../assets/provider_instant.jpg';
import ProviderDetailsModal from '../components/ProviderDetailsModal';

const Providers = () => {
    const [modalType, setModalType] = useState<'doctors' | 'clinics' | 'hospitals' | null>(null);

    return (
        <div className="pt-20 bg-white font-sans text-secondary-900 pb-20">

            {/* 1. Page Header */}
            <div className="bg-[#f8f9fa] py-8 border-b border-gray-200">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <h1 className="text-3xl font-bold mb-2">Providers</h1>
                    <div className="flex gap-6 text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">ABDM</span>
                        <span>For doctors</span>
                        <span>For clinics</span>
                        <span>For hospitals</span>
                    </div>
                </div>
            </div>

            {/* 2. For Doctors */}
            <section className="py-24 bg-[#f8f9fa]">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                        {/* Left: Device Mockups */}
                        <div className="w-full lg:w-1/2 relative lg:pr-12 flex justify-center lg:justify-start">
                            {/* Background Mobile */}
                            <div className="absolute left-0 top-0 w-[260px] h-[520px] bg-white rounded-[32px] border-[8px] border-gray-100 shadow-xl overflow-hidden opacity-60 transform -rotate-6 origin-bottom-left hidden lg:block">
                                <img src={providerAssistant} alt="Provider Assistant" className="w-full h-full object-cover" />
                            </div>
                            {/* Foreground Mobile */}
                            <div className="relative z-10 w-[280px] h-[560px] bg-white rounded-[36px] border-[10px] border-gray-50 shadow-2xl overflow-hidden transform translate-y-8">
                                <img src={providerHome} alt="Provider Home" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Right: Copy & Features */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[44px] text-gray-600 font-semibold mb-6 leading-tight">For doctors</h2>
                            <p className="text-[22px] text-[#2d2d2d] font-bold mb-10 leading-[1.4] max-w-lg">
                                Build your digital presence and enhance patient experience with Ayura
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "1L+ doctors",
                                    "30 Cr+ patients",
                                    "20+ countries"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <Check className="w-4 h-4 text-[#f59e0b] mr-3 flex-shrink-0" strokeWidth={2.5} />
                                        <span className="text-[17px]">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button 
                                onClick={() => setModalType('doctors')}
                                className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-3.5 px-8 rounded flex-shrink-0 transition-colors shadow-sm"
                            >
                                Learn more
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. For Clinics */}
            <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                        {/* Left: Copy & Features */}
                        <div className="w-full lg:w-[45%]">
                            <h2 className="text-[44px] text-gray-600 font-semibold mb-6 leading-tight">For clinics</h2>
                            <p className="text-[22px] text-[#2d2d2d] font-bold mb-10 leading-[1.4] max-w-md">
                                Powerful tools and software that help millions of patients discover you on Ayura
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Trusted by 60K clinics",
                                    "Offering premium experience to over 2.5 Cr+ patients",
                                    "Higher online visibility for doctors across 5 countries"
                                ].map((item, i) => (
                                    <li key={i} className="flex flex-start text-gray-700">
                                        <Check className="w-4 h-4 text-[#f59e0b] mr-3 flex-shrink-0 mt-1" strokeWidth={2.5} />
                                        <span className="text-[17px]">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button 
                                onClick={() => setModalType('clinics')}
                                className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-3.5 px-8 rounded flex-shrink-0 transition-colors shadow-sm"
                            >
                                Learn more
                            </button>
                        </div>

                        {/* Right: Device Mockups */}
                        <div className="w-full lg:w-[55%] relative flex justify-end">
                            {/* Background Tablet/Web App */}
                            <div className="w-full max-w-[650px] aspect-[16/10] bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden flex flex-col relative right-0 mr-10 lg:mr-20">
                                <div className="h-8 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                </div>
                                <div className="flex flex-1 overflow-hidden relative">
                                    <div className="w-16 bg-[#283593] flex-shrink-0"></div>
                                    <div className="flex-1 p-6 relative">
                                        <div className="h-10 border-b border-gray-200 mb-4 flex items-center font-bold text-gray-700 text-lg">Calendar</div>
                                        {/* Mock grid */}
                                        <div className="grid grid-cols-7 h-[80%] border-t border-l border-gray-200">
                                            {[...Array(35)].map((_, i) => (
                                                <div key={i} className={`border-b border-r border-gray-200 p-1 
                                                    ${[12, 18, 24].includes(i) ? 'bg-pink-100' : ''}
                                                    ${[8, 22].includes(i) ? 'bg-blue-100' : ''}
                                                    ${[15, 29].includes(i) ? 'bg-green-100' : ''}
                                                `}>
                                                    {[12, 18, 24, 8, 22, 15, 29].includes(i) && <div className="w-full h-full rounded bg-white/50 border border-black/5"></div>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Overlay fading gradient to simulate cut-off on the right edge */}
                                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
                                </div>
                            </div>

                            {/* Foreground Mobile */}
                            <div className="absolute -bottom-10 right-0 lg:-right-4 w-[240px] h-[480px] bg-white rounded-[32px] border-[8px] border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden z-20">
                                <img src={providerInstant} alt="Provider Instant Consultations" className="w-full h-full object-cover" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. For Hospitals */}
            <section className="py-24 bg-[#f8f9fa]">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                        {/* Left: Device Mockups */}
                        <div className="w-full lg:w-1/2 relative lg:pr-12 min-h-[400px]">
                            {/* Background Tablet/Desktop */}
                            <div className="absolute left-0 top-0 w-full max-w-[550px] aspect-[16/10] bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                                <div className="h-10 bg-[#2d2d2d] flex items-center px-4">
                                    <div className="text-[#f59e0b] font-bold text-xs uppercase tracking-wider">Querent</div>
                                    <div className="ml-4 text-white/50 text-xs">Business Intelligence</div>
                                </div>
                                <div className="p-6">
                                    <div className="text-sm font-bold text-gray-800 mb-4">Performance overview for</div>

                                    {/* Top metrics grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-[#4ade80] h-20 rounded p-3 text-white">
                                            <div className="text-xs opacity-90 mb-1">Revenue</div>
                                            <div className="font-bold text-lg">₹3,336 Lakhs</div>
                                            <div className="text-[10px]">+ 121 Lakhs</div>
                                        </div>
                                        <div className="flex items-end gap-2 h-20 p-2 border border-gray-100 rounded">
                                            <div className="w-1/6 bg-green-400 h-[60%] rounded-t"></div>
                                            <div className="w-1/6 bg-green-400 h-[80%] rounded-t"></div>
                                            <div className="w-1/6 bg-green-400 h-[40%] rounded-t"></div>
                                            <div className="w-1/6 bg-green-400 h-[90%] rounded-t"></div>
                                            <div className="w-1/6 bg-green-400 h-[70%] rounded-t"></div>
                                        </div>
                                    </div>
                                    <div className="w-full h-8 bg-blue-900 rounded-t p-2">
                                        <div className="text-white text-[10px] font-bold uppercase">Hospital Performance Overview</div>
                                    </div>
                                </div>
                            </div>

                            {/* Foreground Mobile */}
                            <div className="absolute top-1/2 -translate-y-[40%] right-0 lg:-right-8 w-[220px] h-[440px] bg-white border-[6px] border-gray-50 rounded-[28px] shadow-2xl overflow-hidden z-10">
                                <img src={providerAssistant} alt="Provider Assistant Dashboard" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Right: Copy & Features */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[44px] text-gray-600 font-semibold mb-6 leading-tight">For hospitals</h2>
                            <p className="text-[22px] text-[#2d2d2d] font-bold mb-10 leading-[1.4] max-w-lg">
                                Technology products and hospital management softwares trusted by the industry
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "7K+ hospitals",
                                    "17+ countries",
                                    "2.8 Cr+ patients managed"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <Check className="w-4 h-4 text-[#f59e0b] mr-3 flex-shrink-0" strokeWidth={2.5} />
                                        <span className="text-[17px]">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button 
                                onClick={() => setModalType('hospitals')}
                                className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-3.5 px-8 rounded flex-shrink-0 transition-colors shadow-sm"
                            >
                                Learn more
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* Detailed Modals */}
            <ProviderDetailsModal 
                isOpen={modalType !== null} 
                onClose={() => setModalType(null)} 
                type={modalType} 
            />
        </div>
    );
};

export default Providers;
