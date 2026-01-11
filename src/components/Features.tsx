import React from 'react';
import { Calendar, Shield, Activity, Users, Clock, MessageSquare } from 'lucide-react';

const icons = {
    calendar: Calendar,
    shield: Shield,
    activity: Activity,
    users: Users,
    clock: Clock,
    message: MessageSquare,
};

const FeatureCard = ({ title, description, iconKey }: { title: string; description: string; iconKey: keyof typeof icons }) => {
    const Icon = icons[iconKey];
    return (
        <div className="p-8 rounded-3xl bg-white border border-secondary-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-3">{title}</h3>
            <p className="text-secondary-500 leading-relaxed">{description}</p>
        </div>
    );
};

const Features = () => {
    const features = [
        {
            title: 'Cognitive AI Engine',
            description: 'Proprietary algorithms providing preliminary diagnosis and triage support with 99% availability.',
            iconKey: 'activity',
        },
        {
            title: 'Native NLP Layer',
            description: 'Advanced Natural Language Processing supporting 12+ regional Indian dialects for seamless interaction.',
            iconKey: 'message',
        },
        {
            title: 'Inclusive UX Design',
            description: 'Zero-learning-curve interfaces engineered for users with varying levels of digital literacy.',
            iconKey: 'calendar',
        },
        {
            title: 'Secure Cloud Infrastructure',
            description: 'Enterprise-grade encryption and HIPAA-compliant data architecture ensuring total privacy.',
            iconKey: 'shield',
        },
        {
            title: 'Edge Computing Optimization',
            description: 'Low-latency performance optimized for 2G/3G networks in remote geographic locations.',
            iconKey: 'users',
        },
        {
            title: 'Rapid Response Network',
            description: 'Geo-located emergency service integration for immediate critical care dispatch.',
            iconKey: 'clock',
        },
    ] as const;

    return (
        <section className="py-24 bg-white" id="features">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary-600 font-bold tracking-wide uppercase text-sm">Our Technology Stack</span>
                    <h2 className="text-4xl font-bold text-secondary-900 mt-2 mb-4">
                        Innovations Powering <span className="text-primary-600">Inclusive Care</span>
                    </h2>
                    <p className="text-lg text-secondary-500">
                        We leverage cutting-edge technology to solve the most complex infrastructure challenges in healthcare delivery.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
