import React from 'react';
import { Check, Star, Zap, ShieldCheck, HeartPulse } from 'lucide-react';

const plans = [
    {
        name: 'Essential',
        tagline: 'Perfect for individuals',
        price: '₹299',
        period: '/month',
        color: 'bg-white border-gray-200',
        highlight: false,
        badge: null,
        features: [
            '2 online consultations per month',
            'Access to 10+ specialities',
            'Basic health records storage',
            'Email support',
            'Medicine discount: 5%',
        ],
    },
    {
        name: 'Care+',
        tagline: 'Our most popular plan',
        price: '₹699',
        period: '/month',
        color: 'bg-primary-600 border-primary-600',
        highlight: true,
        badge: 'Most Popular',
        features: [
            '10 online consultations per month',
            'Access to all 22+ specialities',
            'Full health records & reports',
            'Priority 24/7 support',
            'Medicine discount: 15%',
            'Free lab test home collection (1/month)',
        ],
    },
    {
        name: 'Family Pro',
        tagline: 'Best for families of up to 5',
        price: '₹1,499',
        period: '/month',
        color: 'bg-white border-gray-200',
        highlight: false,
        badge: 'Best Value',
        features: [
            'Unlimited online consultations',
            '5 family members covered',
            'Access to all specialities',
            'Dedicated health manager',
            'Medicine discount: 25%',
            'Free lab tests (3/month)',
            'Annual preventive checkup included',
        ],
    },
];

const Plans = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20 font-sans">

            {/* Hero */}
            <section className="bg-gradient-to-br from-secondary-900 to-secondary-700 text-white py-16 text-center">
                <div className="container mx-auto px-6 max-w-[900px]">
                    <span className="inline-block bg-primary-500/20 text-primary-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Healthcare Plans</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Your health, our priority</h1>
                    <p className="text-secondary-300 text-lg max-w-xl mx-auto">
                        Choose a plan that works for you and your family. Transparent pricing, no hidden fees.
                    </p>
                </div>
            </section>

            {/* Plans Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {plans.map((plan, i) => (
                            <div
                                key={i}
                                className={`relative rounded-2xl border-2 p-8 shadow-sm ${plan.color} ${plan.highlight ? 'shadow-primary-200 shadow-lg scale-[1.03]' : ''}`}
                            >
                                {plan.badge && (
                                    <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full ${plan.highlight ? 'bg-white text-primary-600' : 'bg-secondary-900 text-white'}`}>
                                        {plan.badge}
                                    </span>
                                )}

                                <div className={`mb-6 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                                    <div className="flex items-center gap-2 mb-1">
                                        {plan.highlight ? <Zap className="w-5 h-5 text-primary-200" /> : <HeartPulse className="w-5 h-5 text-primary-500" />}
                                        <h3 className="text-xl font-bold">{plan.name}</h3>
                                    </div>
                                    <p className={`text-sm mb-5 ${plan.highlight ? 'text-primary-100' : 'text-gray-500'}`}>{plan.tagline}</p>
                                    <div className="flex items-end gap-1">
                                        <span className="text-4xl font-extrabold">{plan.price}</span>
                                        <span className={`text-sm mb-1 ${plan.highlight ? 'text-primary-100' : 'text-gray-400'}`}>{plan.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feat, fi) => (
                                        <li key={fi} className={`flex items-start gap-3 text-sm ${plan.highlight ? 'text-primary-50' : 'text-gray-600'}`}>
                                            <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-primary-200' : 'text-primary-500'}`} strokeWidth={2.5} />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${plan.highlight
                                            ? 'bg-white text-primary-700 hover:bg-primary-50'
                                            : 'bg-primary-600 hover:bg-primary-700 text-white'
                                        }`}
                                >
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust section */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-[900px] text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Why thousands choose Ayura Plans</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { icon: <ShieldCheck className="w-8 h-8 text-primary-500" />, title: 'No Lock-in', desc: 'Cancel anytime. Full refund within 7 days.' },
                            { icon: <Star className="w-8 h-8 text-amber-400" />, title: '4.8★ Rated Plans', desc: 'Loved by 50,000+ active subscribers.' },
                            { icon: <HeartPulse className="w-8 h-8 text-red-400" />, title: 'Holistic Coverage', desc: 'From GP visits to specialist referrals.' },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                {item.icon}
                                <h4 className="font-bold text-gray-900">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Plans;
