import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import EarlyAccessCTA from '../components/EarlyAccessCTA';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-secondary-900">
            {/* Minimalist Header */}
            <section className="pt-40 pb-20 bg-slate-50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                        Reach out to our <span className="text-primary-600">team.</span>
                    </h1>
                    <p className="text-xl text-secondary-500 max-w-2xl mx-auto leading-relaxed">
                        We are currently in a closed beta phase and gearing up for our public launch.
                        If you're a healthcare organization or investor, we'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Direct Contact Info */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Office */}
                        <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-primary-900/5 hover:border-primary-200 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 text-primary-600">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Headquarters</h3>
                            <p className="text-secondary-500 leading-relaxed">
                                Jubilee Hills, Road No 36<br />
                                Hyderabad, Telangana<br />
                                India - 500033
                            </p>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-primary-900/5 hover:border-primary-200 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 text-primary-600">
                                <Mail className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">General Inquiries</h3>
                            <p className="text-secondary-500 leading-relaxed mb-4">
                                For partnerships, press, or general questions about our launch.
                            </p>
                            <a href="mailto:hello@ayura.health" className="font-bold text-primary-600 hover:text-primary-700">
                                hello@ayura.health
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-primary-900/5 hover:border-primary-200 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 text-primary-600">
                                <Phone className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Support</h3>
                            <p className="text-secondary-500 leading-relaxed mb-4">
                                Currently restricted to onboarded beta organizations only.
                            </p>
                            <a href="tel:04012345678" className="font-bold text-primary-600 hover:text-primary-700">
                                040-1234-5678
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Form CTA component */}
            <EarlyAccessCTA />
        </div>
    );
};

export default Contact;
