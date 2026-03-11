import React from 'react';
import { Check, Star, MessageSquare, Clock, Phone } from 'lucide-react';

interface ServicesShowcaseProps {
    onConsultClick?: () => void;
    onOrderClick?: () => void;
}

const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onConsultClick, onOrderClick }) => {
    return (
        <div className="bg-white font-sans text-secondary-900 border-t border-gray-100">
            {/* 1. Medicine Delivery Section */}
            <section className="py-24 bg-[#f8f9fa] overflow-hidden">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        {/* Left: Copy & Features */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[44px] text-gray-800 font-semibold mb-6 leading-tight">
                                Authentic medicines.<br />
                                <span className="font-bold">Delivered to your door.</span>
                            </h2>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "100% genuine health products",
                                    "Extensive catalog of essential medicines",
                                    "Ultra-fast neighborhood delivery"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-600">
                                        <Check className="w-5 h-5 text-primary-500 mr-4 flex-shrink-0" strokeWidth={2.5} />
                                        <span className="text-[17px]">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-6">
                                <button
                                    onClick={onOrderClick}
                                    className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 px-8 rounded flex-shrink-0 transition-colors shadow-sm"
                                >
                                    Shop Pharmacy
                                </button>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
                                        <Clock className="w-4 h-4 text-primary-500" />
                                    </div>
                                    <p className="text-xs text-secondary-500 max-w-[140px] leading-tight">
                                        Latest order delivered <span className="font-bold text-secondary-800">45 minutes</span> ago nearby
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Illustration */}
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end min-h-[400px]">
                            {/* CSS Illustration of an eco-friendly modern care package */}
                            <div className="relative w-80 h-80">
                                {/* Back flap */}
                                <div className="absolute bottom-16 left-10 w-60 h-32 bg-primary-400 origin-bottom transform translate-y-12 translate-x-4 rotate-x-[-60deg] skew-x-[-30deg]"></div>

                                {/* Bottles/Items inside */}
                                <div className="absolute bottom-20 left-20 w-16 h-40 bg-secondary-200 rounded-t-xl overflow-hidden transform rotate-[-10deg]">
                                    <div className="w-full h-8 bg-secondary-300 rounded-t-xl mb-1"></div>
                                    <div className="w-full h-4 bg-white/40"></div>
                                </div>
                                <div className="absolute bottom-24 left-32 w-20 h-32 bg-secondary-800 rounded-t-xl shadow-lg border-2 border-secondary-700 rounded-tl-sm transform rotate-[5deg]">
                                    <div className="w-full h-12 bg-primary-500 mt-6 border-y-2 border-primary-300"></div>
                                </div>
                                {/* Medicine sheet */}
                                <div className="absolute bottom-12 left-40 w-24 h-44 bg-teal-100 rounded-xl transform rotate-[15deg] shadow-2xl p-3 flex flex-wrap gap-2 content-start">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <div key={i} className="w-6 h-6 rounded-full bg-white shadow-sm border border-teal-200"></div>
                                    ))}
                                </div>

                                {/* Front Box */}
                                <div className="absolute bottom-8 left-10 w-60 h-32 bg-primary-500 rounded-b-lg border-t-4 border-primary-400 shadow-2xl">
                                    <div className="absolute -left-12 -top-1 w-12 h-2 bg-primary-400 transform -rotate-[30deg] origin-right"></div>
                                    <div className="absolute -right-12 -top-1 w-12 h-2 bg-primary-400 transform rotate-[30deg] origin-left"></div>

                                    {/* Logo shape on box */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                        <div className="w-12 h-12 rotate-45 border-4 border-white"></div>
                                    </div>
                                </div>
                                <div className="absolute bottom-10 left-8 w-64 h-3 bg-primary-700 rounded-full blur-md -z-10 opacity-30"></div>

                                {/* Floating elements */}
                                <div className="absolute top-10 left-0 w-6 h-12 bg-secondary-200 rounded-full transform rotate-45 border-4 border-white shadow-sm"></div>
                                <div className="absolute bottom-40 -left-6 w-8 h-8 rounded-full bg-primary-200 shadow-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Video Consult Section */}
            <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                        {/* Left: Device Mockup */}
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
                            <div className="w-[300px] h-[600px] bg-white rounded-[36px] border-[12px] border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden relative">
                                {/* Phone Header */}
                                <div className="bg-secondary-900 p-4 pt-8 pb-3 relative">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                            <img src="https://ui-avatars.com/api/?name=Ananya+Sharma&background=f3f4f6&color=4b5563" alt="Doctor" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-sm">Dr. Ananya Sharma</div>
                                            <div className="text-primary-200 text-[10px] font-medium">Session in progress</div>
                                        </div>
                                    </div>
                                    <div className="absolute right-4 top-1/2 mt-1 bg-white/10 p-2 rounded-full backdrop-blur-sm">
                                        <Phone className="w-3.5 h-3.5 text-white" />
                                    </div>
                                </div>

                                {/* Chat Interface */}
                                <div className="flex-1 p-4 bg-slate-50 h-[calc(100%-140px)] overflow-y-auto space-y-4">
                                    <div className="bg-primary-500 text-white p-3 rounded-2xl rounded-tr-sm text-xs max-w-[85%] ml-auto shadow-sm">
                                        I uploaded my recent blood work. Can you review the lipid panel?
                                        <div className="text-[8px] text-white/80 text-right mt-1.5">09:14 AM</div>
                                    </div>
                                    <div className="bg-white border border-gray-200 text-gray-700 p-3 rounded-2xl rounded-tl-sm text-xs max-w-[85%] shadow-sm">
                                        Hello Priya, let me pull that up on my dashboard.
                                        <div className="text-[8px] text-gray-400 text-right mt-1.5">09:15 AM</div>
                                    </div>
                                    <div className="bg-primary-500 text-white p-3 rounded-2xl rounded-tr-sm text-xs max-w-[85%] ml-auto flex items-center gap-2 shadow-sm">
                                        <div className="bg-white/20 p-2 rounded border border-white/30 text-white">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        </div>
                                        <div>
                                            <div className="font-bold">Lab_Results_Dec.pdf</div>
                                            <div className="text-[9px] text-white/80 mt-0.5">Shared attachment</div>
                                        </div>
                                        <div className="text-[8px] text-white/80 text-right mt-1 ml-auto self-end">09:15 AM</div>
                                    </div>
                                    <div className="bg-white border border-gray-200 text-gray-700 p-3 rounded-2xl rounded-tl-sm text-xs max-w-[85%] shadow-sm">
                                        Your LDL levels are slightly elevated. I'm writing a prescription and adding some diet recommendations to your file.
                                        <div className="text-[8px] text-gray-400 text-right mt-1.5">09:18 AM</div>
                                    </div>
                                </div>

                                {/* Chat Input Box */}
                                <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-white border-t border-gray-200 flex items-center px-4 justify-between">
                                    <div className="flex items-center gap-3 text-gray-400 w-full">
                                        <MessageSquare className="w-5 h-5 text-gray-300" />
                                        <div className="text-xs text-gray-400 flex-1">Type your response...</div>
                                        <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-primary-600 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Copy & Features */}
                        <div className="w-full lg:w-1/2 lg:pl-8">
                            <h2 className="text-[44px] text-gray-600 font-semibold mb-6 leading-tight">
                                Instant medical care.<br />
                                <span className="text-secondary-900 font-bold leading-[1.1] block mt-2">Anytime. Anywhere.</span>
                            </h2>

                            <ul className="space-y-4 mb-10 mt-10">
                                {[
                                    "Specialist consults starting at ₹299",
                                    "Verified experts online 24/7",
                                    "100% encrypted and confidential"
                                ].map((item, i) => (
                                    <li key={i} className="flex flex-start text-gray-700">
                                        <Check className="w-5 h-5 text-primary-500 mr-4 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                        <span className="text-[17px]">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-6 mb-12">
                                <button
                                    onClick={onConsultClick}
                                    className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 px-8 rounded flex-shrink-0 transition-colors shadow-sm"
                                >
                                    Find a Doctor
                                </button>
                                <div className="flex items-center gap-2">
                                    <div className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        <span className="font-bold text-gray-800">12,400+</span> specialists active
                                    </p>
                                </div>
                            </div>

                            {/* Reviews Snippet */}
                            <div className="border-t border-gray-100 pt-8 mt-4">
                                <div className="flex gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600 mb-4 max-w-[400px]">
                                    "The app experience was incredibly smooth. I got connected with a top pediatrician within a minute right from my living room."
                                </p>
                                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 border border-slate-200">V</div>
                                    <span>Vikram S., Verified Patient</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesShowcase;
