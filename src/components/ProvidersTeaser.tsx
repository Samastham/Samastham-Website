import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Activity, HeartPulse, Stethoscope, CheckCircle2 } from 'lucide-react';

const ProvidersTeaser = () => {
    return (
        <section className="py-24 bg-[#0a1128] text-white">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* Left: Text & CTA */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl lg:text-[42px] font-bold mb-8 leading-[1.2]">
                            Leading Healthcare Providers.<br />
                            <span className="text-[#00a6a6]">Trust us for Business</span>
                        </h2>

                        <Link to="/providers" className="inline-flex bg-[#00a6a6] hover:bg-[#009090] text-white font-bold py-3.5 px-8 rounded-lg transition-colors text-[15px]">
                            Learn more about Ayura for Providers
                        </Link>
                    </div>

                    {/* Right: Hospital Logos / Trust grid */}
                    <div className="w-full lg:w-1/2">
                        <div className="border border-gray-700/50 p-8 lg:p-10 rounded-2xl w-full bg-transparent">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.15em] mb-6">
                                TRUSTED BY 7000+ HOSPITALS
                            </p>

                            <div className="grid grid-cols-2 gap-5">
                                <div className="bg-[#1a2135] rounded-xl p-8 flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
                                    <Activity className="w-10 h-10 text-[#00a6a6] mb-4" strokeWidth={1.5} />
                                    <span className="font-bold text-[15px]">Suguna Hospital</span>
                                </div>
                                <div className="bg-[#1a2135] rounded-xl p-8 flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
                                    <HeartPulse className="w-10 h-10 text-red-500 mb-4" strokeWidth={1.5} />
                                    <span className="font-bold text-[15px]">Pratiksha Care</span>
                                </div>
                                <div className="bg-[#1a2135] rounded-xl p-8 flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
                                    <Building2 className="w-10 h-10 text-blue-500 mb-4" strokeWidth={1.5} />
                                    <span className="font-bold text-[15px]">NMC Network</span>
                                </div>
                                <div className="bg-[#1a2135] rounded-xl p-8 flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
                                    <Stethoscope className="w-10 h-10 text-green-500 mb-4" strokeWidth={1.5} />
                                    <span className="font-bold text-[15px]">VPS Healthcare</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProvidersTeaser;
