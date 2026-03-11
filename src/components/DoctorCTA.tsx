import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

const DoctorCTA = () => {
    return (
        <section className="bg-[#fff5f3] py-10">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-2xl shadow-sm border border-orange-100 px-8 py-7">
                    {/* Illustration */}
                    <div className="flex items-center gap-5">
                        <div className="relative w-16 h-16 flex-shrink-0">
                            <div className="w-16 h-16 rounded-full bg-[#fff0eb] border-2 border-[#f9c3b0] flex items-center justify-center">
                                <Stethoscope className="w-7 h-7 text-[#f97316]" />
                            </div>
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 rounded-full border-2 border-white flex items-center justify-center">
                                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Are you a doctor?</h3>
                            <p className="text-sm text-gray-500 max-w-xs mt-0.5">
                                Be a part of our panel of specialists and connect with patients from anywhere.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link
                        to="/providers"
                        className="flex-shrink-0 bg-[#f97316] hover:bg-[#ea6c0d] text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-sm text-sm tracking-wide whitespace-nowrap"
                    >
                        Join Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DoctorCTA;
