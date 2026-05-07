import React from 'react';
import { ShieldCheck, Award, BadgeCheck, HeartPulse, Stethoscope, Building2, FlaskConical, Pill } from 'lucide-react';

const trustItems = [
    { icon: <ShieldCheck className="w-5 h-5" />, label: 'ABDM Compliant' },
    { icon: <BadgeCheck className="w-5 h-5" />, label: 'HPR Verified Doctors' },
    { icon: <Award className="w-5 h-5" />, label: 'NHA Registered' },
    { icon: <HeartPulse className="w-5 h-5" />, label: 'ISO 27001 Certified' },
    { icon: <Stethoscope className="w-5 h-5" />, label: '500+ Doctors' },
    { icon: <Building2 className="w-5 h-5" />, label: '200+ Clinics' },
    { icon: <FlaskConical className="w-5 h-5" />, label: '100+ Labs' },
    { icon: <Pill className="w-5 h-5" />, label: 'Pharmacy Network' },
    { icon: <ShieldCheck className="w-5 h-5" />, label: 'HIPAA Aligned' },
    { icon: <BadgeCheck className="w-5 h-5" />, label: '22+ Indian Languages' },
];

const TrustStrip = () => {
    return (
        <section className="py-10 bg-white border-y border-secondary-100 overflow-hidden">
            <div className="relative">
                {/* Gradient fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrolling track */}
                <div className="flex gap-8 trust-scroll-track">
                    {[...trustItems, ...trustItems].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 bg-secondary-50 border border-secondary-100 px-5 py-3 rounded-full whitespace-nowrap shrink-0 hover:border-primary-300 hover:bg-primary-50 transition-colors group"
                        >
                            <span className="text-primary-600 group-hover:text-primary-700 transition-colors">
                                {item.icon}
                            </span>
                            <span className="text-sm font-semibold text-secondary-700 group-hover:text-secondary-900 transition-colors">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustStrip;
