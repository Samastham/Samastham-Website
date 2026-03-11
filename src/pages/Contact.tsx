import React from 'react';
import { Phone, Mail, MapPin, LifeBuoy, AlertTriangle, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20 bg-secondary-50 min-h-screen">

            {/* 1. Page Header */}
            <div className="bg-white border-b border-secondary-200 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-900 mb-4">Help & Support Center</h1>
                    <p className="text-xl text-secondary-600 max-w-2xl mx-auto font-sans">
                        How can we assist you today? Our dedicated support team is available 24/7.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">

                {/* Emergency Banner */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-12 flex flex-col sm:flex-row items-center justify-between shadow-sm">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4 flex-shrink-0">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-red-800 font-bold text-lg font-heading">Medical Emergency?</h3>
                            <p className="text-red-600 font-sans">If you are experiencing a medical emergency, call an ambulance immediately.</p>
                        </div>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-red-500/30 w-full sm:w-auto transition-colors">
                        Tap for Ambulance
                    </button>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Left Column: FAQ & Quick Contact */}
                    <div className="lg:col-span-5 space-y-8">
                        <h2 className="text-2xl font-bold font-heading text-secondary-900 mb-6">Quick Contact</h2>

                        <div className="grid gap-4">
                            <a href="tel:18001234567" className="bg-white p-6 rounded-2xl border border-secondary-200 hover:border-primary-400 hover:shadow-md transition-all flex items-center group">
                                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mr-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-secondary-500 font-semibold uppercase tracking-wider">Patient Helpline (Toll-Free)</p>
                                    <p className="text-xl font-bold text-secondary-900 font-sans">1-800-123-4567</p>
                                </div>
                            </a>

                            <a href="mailto:support@ayurahealth.com" className="bg-white p-6 rounded-2xl border border-secondary-200 hover:border-primary-400 hover:shadow-md transition-all flex items-center group">
                                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mr-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-secondary-500 font-semibold uppercase tracking-wider">Email Support</p>
                                    <p className="text-lg font-bold text-secondary-900 font-sans">support@ayurahealth.com</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-2xl font-bold font-heading text-secondary-900 mb-6">Common Topics</h2>
                            <div className="space-y-3">
                                {['Booking physical appointments', 'Video consultation technical issues', 'Refunds & Payment queries', 'Updating health records'].map((topic, i) => (
                                    <div key={i} className="bg-white p-4 rounded-xl border border-secondary-100 flex items-center cursor-pointer hover:bg-secondary-50 transition-colors">
                                        <LifeBuoy className="w-5 h-5 text-secondary-400 mr-3" />
                                        <span className="font-medium text-secondary-700 font-sans">{topic}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Secure Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-3xl shadow-xl shadow-secondary-200/50 border border-secondary-100 p-8 md:p-10">
                            <div className="flex items-center mb-8 pb-6 border-b border-secondary-100">
                                <MessageSquare className="w-8 h-8 text-primary-600 mr-4" />
                                <div>
                                    <h2 className="text-2xl font-bold font-heading text-secondary-900">Send an Inquiry</h2>
                                    <p className="text-secondary-500 font-sans">Our team will respond within 24 hours.</p>
                                </div>
                            </div>

                            <form className="space-y-6 font-sans">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-secondary-700 mb-2">First Name</label>
                                        <input type="text" className="w-full bg-secondary-50 border border-secondary-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-secondary-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full bg-secondary-50 border border-secondary-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-secondary-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full bg-secondary-50 border border-secondary-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-secondary-700 mb-2">Inquiry Type</label>
                                    <select className="w-full bg-secondary-50 border border-secondary-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-secondary-700">
                                        <option>General Support</option>
                                        <option>Technical Issue</option>
                                        <option>Billing & Refunds</option>
                                        <option>Doctor Onboarding</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-secondary-700 mb-2">Message</label>
                                    <textarea rows={5} className="w-full bg-secondary-50 border border-secondary-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all resize-none" placeholder="Provide details here..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/30 transition-transform active:scale-95 text-lg">
                                    Submit Request
                                </button>
                                <p className="text-xs text-center text-secondary-400 mt-4">By submitting, you agree to our strict HIPAA-compliant privacy policy.</p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;
