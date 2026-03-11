import React from 'react';
import { Check } from 'lucide-react';

const Providers = () => {
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
                        <div className="w-full lg:w-1/2 relative lg:pr-12">
                            {/* Background Mobile */}
                            <div className="absolute left-0 top-0 w-[260px] h-[520px] bg-white rounded-[32px] border-[8px] border-gray-100 shadow-xl overflow-hidden opacity-60 transform -rotate-6 origin-bottom-left">
                                <div className="bg-[#1a237e] h-14 w-full flex items-center justify-center text-white text-xs font-bold">EDIT PROFILE</div>
                                <div className="p-4 flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-gray-200 mb-2"></div>
                                    <div className="h-3 w-24 bg-gray-200 rounded mb-4"></div>
                                    <div className="w-full h-8 bg-gray-100 rounded mb-2"></div>
                                    <div className="w-full h-8 bg-gray-100 rounded"></div>
                                </div>
                            </div>
                            {/* Foreground Mobile */}
                            <div className="relative z-10 w-[280px] h-[560px] bg-white rounded-[36px] border-[10px] border-gray-50 shadow-2xl overflow-hidden mx-auto lg:ml-auto lg:mr-0 transform translate-y-8">
                                <div className="bg-[#1a237e] h-32 w-full pt-6 px-4">
                                    <div className="text-white text-xs font-bold text-center mb-4">PROFILES</div>
                                    <div className="absolute top-20 left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
                                        <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                                            <img src="https://ui-avatars.com/api/?name=Garima+Jacob&background=f3f4f6&color=4b5563" alt="Doctor" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 mt-2 text-sm">Dr. Garima Jacob</h3>
                                        <p className="text-xs text-gray-500">Gynecologist/Obstetrician</p>
                                    </div>
                                </div>
                                <div className="mt-28 px-4 space-y-3">
                                    <div className="p-3 border border-gray-100 rounded-lg flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-100 rounded flex-shrink-0"></div>
                                        <div>
                                            <div className="font-bold text-sm">Jacob Health Care</div>
                                            <div className="text-[10px] text-gray-500">JP Nagar, Bangalore</div>
                                        </div>
                                    </div>
                                    <div className="text-[#f59e0b] text-xs font-bold uppercase mt-4">ADD CLINIC</div>
                                </div>
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

                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-3.5 px-8 rounded flex-shrink-0 transition-colors shadow-sm">
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

                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-3.5 px-8 rounded flex-shrink-0 transition-colors shadow-sm">
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
                                <div className="bg-[#283593] h-14 w-full flex items-center px-4 pt-2">
                                    <div className="text-white text-[10px] font-bold">PROFILES</div>
                                </div>
                                <div className="p-4 bg-white">
                                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                                        <div className="w-12 h-12 rounded-full border border-green-500 overflow-hidden">
                                            <img src="https://ui-avatars.com/api/?name=Rahul+Mishra&background=f3f4f6&color=4b5563" alt="Doctor" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-xs">Dr. Rahul Mishra</div>
                                            <div className="text-[10px] text-gray-500">Gynecologist</div>
                                            <div className="h-1 w-full bg-green-500 mt-1 rounded"></div>
                                            <div className="text-[8px] text-green-600 font-bold mt-0.5">80% Profile completed</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-[10px] font-bold text-gray-400 mb-1">PERSONAL & CONTACT DETAILS</div>
                                            <div className="flex gap-2">
                                                <div className="flex-1 bg-gray-50 p-2 rounded border border-gray-100 text-[10px] italic text-gray-400">1 Mandatory Field Missing</div>
                                                <div className="flex-1 bg-green-50 p-2 rounded border border-green-100 text-[10px] text-green-700 font-medium">Verified and Live</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-gray-400 mb-1">PHOTO (HIDE/SHOW)</div>
                                            <div className="flex gap-2">
                                                <div className="w-8 h-8 rounded border border-gray-200"></div>
                                                <div className="w-8 h-8 rounded border border-gray-200"></div>
                                                <div className="w-8 h-8 rounded border border-gray-200"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                            <div className="absolute top-1/2 -translate-y-[40%] right-0 lg:-right-8 w-[220px] h-[440px] bg-white border-[6px] border-gray-50 rounded-[28px] shadow-2xl overflow-hidden z-10 flex flex-col">
                                <div className="flex-1 p-3 flex flex-col items-center">
                                    <div className="w-full border-b border-gray-100 pb-2 mb-2">
                                        <div className="text-[10px] font-bold text-gray-400">Registration</div>
                                        <div className="text-[8px] text-gray-400">Registrations by City</div>
                                    </div>
                                    {/* Fake map outline */}
                                    <div className="w-full h-32 border border-gray-100 bg-gray-50 rounded mb-4 relative overflow-hidden flex items-center justify-center">
                                        <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] opacity-20"><path d="M20,50 Q40,20 60,40 T90,60" fill="none" stroke="black" strokeWidth="2" /></svg>
                                        <div className="absolute w-2 h-2 bg-green-500 rounded-full right-[40%] top-[60%]"></div>
                                        <div className="absolute w-1.5 h-1.5 bg-green-400 rounded-full right-[38%] top-[55%]"></div>
                                    </div>
                                    <div className="w-full space-y-2">
                                        <div className="text-[9px] font-bold text-gray-700">Top 5 Cities</div>
                                        <div className="flex justify-between text-[8px] text-gray-500 border-b border-gray-50 pb-1"><span>Pune, India</span><span>18,244</span></div>
                                        <div className="flex justify-between text-[8px] text-gray-500 border-b border-gray-50 pb-1"><span>Other City, India</span><span>47</span></div>
                                        <div className="flex justify-between text-[8px] text-gray-500 border-b border-gray-50 pb-1"><span>Mumbai, India</span><span>58</span></div>
                                    </div>
                                </div>
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

                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-3.5 px-8 rounded flex-shrink-0 transition-colors shadow-sm">
                                Learn more
                            </button>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Providers;
