import React from 'react';
import { Clock, MessageSquare, FileText, ShieldCheck, Award, MapPin, Wallet } from 'lucide-react';

interface ConsultationFeaturesProps {
    onConsultClick: () => void;
}

const ConsultationFeatures: React.FC<ConsultationFeaturesProps> = ({ onConsultClick }) => {
    const quickFeatures = [
        { icon: <Clock className="w-6 h-6 text-[#f97316]" />, label: 'Talk within 30 min' },
        { icon: <MessageSquare className="w-6 h-6 text-[#f97316]" />, label: 'Free follow up for 3 days' },
        { icon: <FileText className="w-6 h-6 text-[#f97316]" />, label: 'Get a valid prescription' },
    ];

    const trustFeatures = [
        {
            icon: <ShieldCheck className="w-10 h-10 text-primary-500" />,
            title: '100% Confidential',
            desc: 'All advice & consultations are completely confidential. You can delete your chats anytime you want.',
        },
        {
            icon: <Award className="w-10 h-10 text-primary-500" />,
            title: 'Certified Doctors',
            desc: 'We offer quality healthcare through our network of certified and experienced specialists.',
        },
        {
            icon: <MapPin className="w-10 h-10 text-primary-500" />,
            title: 'Convenience',
            desc: 'Forget the hassle of long queues and rush hours. Seek expert opinion anytime, anywhere.',
        },
        {
            icon: <Wallet className="w-10 h-10 text-primary-500" />,
            title: 'Cost Effective',
            desc: 'We provide medical assistance on non-urgent queries for free. Fees starting at ₹199.',
        },
    ];

    const stats = [
        { value: '30L+', label: 'Total Consultations' },
        { value: '3k+', label: 'Daily Consultations' },
        { value: '22+', label: 'Specialities' },
    ];

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-[1200px]">

                {/* Heading + quick features */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                        Online doctor consultation with qualified doctors
                    </h2>
                    <p className="text-primary-600 font-semibold text-lg mb-8">Starting at ₹199</p>

                    <div className="flex flex-wrap gap-8 mb-8">
                        {quickFeatures.map((f, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
                                    {f.icon}
                                </div>
                                <span className="text-sm font-medium text-gray-700">{f.label}</span>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={onConsultClick}
                        className="bg-[#f97316] hover:bg-[#ea6c0d] text-white font-bold py-3.5 px-10 rounded-lg transition-colors shadow-sm text-[15px]"
                    >
                        Consult now
                    </button>
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-3 divide-x divide-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-16">
                    {stats.map((s, i) => (
                        <div key={i} className="flex flex-col items-center py-7 px-4 bg-gray-50">
                            <span className="text-3xl font-bold text-[#f97316]">{s.value}</span>
                            <span className="text-sm text-gray-500 font-medium mt-1">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* Trust Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {trustFeatures.map((f, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="mb-4">{f.icon}</div>
                            <h4 className="font-bold text-gray-900 mb-2">{f.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ConsultationFeatures;
