import React from 'react';
import { 
    Video, 
    TestTube, 
    Activity, 
    Brain, 
    Heart, 
    ShieldCheck, 
    Clock, 
    CheckCircle2, 
    Smartphone, 
    Thermometer
} from 'lucide-react';

const serviceDetails = [
    {
        id: 'telemedicine',
        title: 'Virtual Consultations',
        icon: <Video className="w-8 h-8" />,
        color: 'bg-blue-600',
        lightColor: 'bg-blue-50',
        textColor: 'text-blue-600',
        summary: 'Connect with 22+ specialties through high-definition video calls in under 15 minutes.',
        features: [
            '24/7 access to General Physicians',
            'HD video & audio call support',
            'Digital prescriptions sent instantly',
            'Free follow-up for 3 days'
        ]
    },
    {
        id: 'diagnostics',
        title: 'Diagnostics & Lab Tests',
        icon: <TestTube className="w-8 h-8" />,
        color: 'bg-orange-600',
        lightColor: 'bg-orange-50',
        textColor: 'text-orange-600',
        summary: 'NABL-certified lab partners providing home sample collection and rapid digital reports.',
        features: [
            'Home sample collection in 60 mins',
            '100% accurate digital reports',
            'Doctor review of reports included',
            'Full body checkup packages'
        ]
    },
    {
        id: 'chronic-care',
        title: 'Chronic Care Management',
        icon: <Activity className="w-8 h-8" />,
        color: 'bg-teal-600',
        lightColor: 'bg-teal-50',
        textColor: 'text-teal-600',
        summary: 'Specialized programs for long-term health conditions with dedicated care coordinators.',
        features: [
            'Diabetes & Hypertension control',
            'Dedicated health coaches',
            'Regular vitals monitoring',
            'Diet & lifestyle planning'
        ]
    },
    {
        id: 'mental-health',
        title: 'Mental Health Support',
        icon: <Brain className="w-8 h-8" />,
        color: 'bg-purple-600',
        lightColor: 'bg-purple-50',
        textColor: 'text-purple-600',
        summary: 'Confidential psychiatric support and counseling for stress, anxiety, and depression.',
        features: [
            'Verified clinical psychologists',
            '100% private and confidential',
            'Therapy sessions via video/chat',
            'Support groups and wellness workshops'
        ]
    },
    {
        id: 'preventive',
        title: 'Wellness & Prevention',
        icon: <Heart className="w-8 h-8" />,
        color: 'bg-red-600',
        lightColor: 'bg-red-50',
        textColor: 'text-red-600',
        summary: 'Science-backed wellness plans tailored to your age, gender, and health profile.',
        features: [
            'Age-specific health checkups',
            'Nutritional counseling',
            'Vaccination drives at home',
            'Personalized health risk assessment'
        ]
    },
    {
        id: 'digital-health',
        title: 'Digital Health (ABDM)',
        icon: <Smartphone className="w-8 h-8" />,
        color: 'bg-primary-600',
        lightColor: 'bg-primary-50',
        textColor: 'text-primary-600',
        summary: 'Integrated Ayushman Bharat Digital Mission (ABDM) support for unified health records.',
        features: [
            'Universal Health ID (ABHA) creation',
            'Digital health locker for records',
            'Seamless data sharing with providers',
            'Unified medical history tracking'
        ]
    }
];

const Services = () => {
    return (
        <div className="bg-white min-h-screen pt-20 font-sans text-secondary-900">
            {/* 1. Page Header */}
            <section className="bg-slate-50 py-20 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="max-w-3xl">
                        <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Capabilities</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Comprehensive healthcare <br />
                            <span className="text-primary-600">delivered at home.</span>
                        </h1>
                        <p className="text-xl text-secondary-500 max-w-2xl leading-relaxed">
                            We've engineered a full-stack digital healthcare ecosystem that brings 
                            world-class medical services, diagnostics, and wellness programs directly to your doorstep.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Detailed Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {serviceDetails.map((service) => (
                            <div key={service.id} className="group relative">
                                {/* Card Body */}
                                <div className="p-8 rounded-[32px] border border-gray-100 bg-white hover:border-primary-100 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:shadow-primary-600/5">
                                    {/* Icon Box */}
                                    <div className={`w-16 h-16 rounded-2xl ${service.lightColor} ${service.textColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-secondary-500 mb-8 flex-1 leading-relaxed">
                                        {service.summary}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3 pt-6 border-t border-gray-50 mb-4">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-secondary-600 font-medium">
                                                <CheckCircle2 className={`w-4 h-4 mt-0.5 ${service.textColor} flex-shrink-0`} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Technology & Logistics Section */}
            <section className="py-24 bg-secondary-900 text-white overflow-hidden relative">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Backed by a high-speed <br />
                                <span className="text-primary-400">logistics network.</span>
                            </h2>
                            <p className="text-secondary-400 text-lg mb-10 max-w-lg leading-relaxed">
                                Our services aren't just digital. We operate a massive urban logistics fleet that handles 
                                home sample collection and medicine delivery within defined TATs.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-4xl font-bold text-white mb-1">60 Mins</div>
                                    <div className="text-sm text-secondary-500 uppercase tracking-wider font-bold">Home Lab TAT</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-1">100%</div>
                                    <div className="text-sm text-secondary-500 uppercase tracking-wider font-bold">Cold Chain Delivery</div>
                                </div>
                            </div>
                        </div>

                        {/* Visual for TAT */}
                        <div className="lg:w-1/2 relative">
                            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/10 relative">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center">
                                        <Clock className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold">Lightning Fast Response</h4>
                                        <p className="text-secondary-400 text-sm">Real-time tracking of medical dispatch</p>
                                    </div>
                                </div>
                                {/* Progress bar mock */}
                                <div className="space-y-6">
                                    {[
                                        { label: 'Tele-consult connection', time: '15 Min', p: 'w-full' },
                                        { label: 'Lab sample collection', time: '60 Min', p: 'w-3/4' },
                                        { label: 'Medicine delivery', time: '120 Min', p: 'w-2/3' }
                                    ].map((item, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span>{item.label}</span>
                                                <span className="font-bold text-primary-400">{item.time}</span>
                                            </div>
                                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                <div className={`h-full bg-primary-500 rounded-full ${item.p}`}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Removed CTA section for pre-launch phase */}

        </div>
    );
};

export default Services;
