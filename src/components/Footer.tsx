import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/white wordmark svg.svg';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@') || !email.includes('.')) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        setSubscribed(true);
        setEmail('');
    };

    return (
        <footer className="bg-secondary-900 text-white" id="footer">
            {/* Top section */}
            <div className="border-b border-secondary-800">
                <div className="container mx-auto px-6 max-w-[1300px] py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                        {/* Brand column */}
                        <div className="lg:col-span-2">
                            <Link to="/" className="inline-block mb-6">
                                <img src={logo} alt="Ayura" className="h-10 w-auto object-contain" />
                            </Link>
                            <p className="text-secondary-400 leading-relaxed mb-8 font-sans max-w-xs">
                                Engineering India's most accessible healthcare ecosystem — connecting patients, doctors, clinics, labs, and pharmacies on one intelligent platform.
                            </p>
                            {/* Social links */}
                            <div className="flex gap-3">
                                {[
                                    { icon: <Twitter className="w-4 h-4" />, label: 'Twitter', href: 'https://twitter.com' },
                                    { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', href: 'https://linkedin.com' },
                                    { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', href: 'https://instagram.com' },
                                    { icon: <Youtube className="w-4 h-4" />, label: 'YouTube', href: 'https://youtube.com' },
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Product */}
                        <div>
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Product</h4>
                            <ul className="space-y-3 text-secondary-400 font-sans text-sm">
                                <li><Link to="/services" className="hover:text-primary-400 transition-colors">Our Services</Link></li>
                                <li><a href="/#how-it-works" className="hover:text-primary-400 transition-colors">How It Works</a></li>
                                <li><a href="/#security" className="hover:text-primary-400 transition-colors">Security & Privacy</a></li>
                                <li><a href="/#early-access" className="hover:text-primary-400 transition-colors">Early Access</a></li>
                            </ul>
                        </div>

                        {/* Providers */}
                        <div>
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Providers</h4>
                            <ul className="space-y-3 text-secondary-400 font-sans text-sm">
                                <li><Link to="/providers" className="hover:text-primary-400 transition-colors">For Doctors</Link></li>
                                <li><Link to="/providers" className="hover:text-primary-400 transition-colors">For Clinics</Link></li>
                                <li><Link to="/providers" className="hover:text-primary-400 transition-colors">For Hospitals</Link></li>
                                <li><Link to="/providers" className="hover:text-primary-400 transition-colors">For Labs</Link></li>
                                <li><Link to="/providers" className="hover:text-primary-400 transition-colors">For Pharmacies</Link></li>
                            </ul>
                        </div>

                        {/* Contact & Newsletter */}
                        <div>
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Stay Connected</h4>

                            {subscribed ? (
                                <div className="bg-primary-500/15 border border-primary-500/30 rounded-xl px-4 py-4 text-primary-300 font-sans text-sm mb-6">
                                    ✅ You're on the waitlist!
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mb-6" noValidate>
                                    <input
                                        id="footer-email-input"
                                        type="email"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                        placeholder="Your email address"
                                        className="bg-secondary-800 border border-secondary-700 rounded-lg px-4 py-2.5 text-white placeholder:text-secondary-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none font-sans text-sm"
                                    />
                                    {error && <p className="text-red-400 text-xs font-sans">{error}</p>}
                                    <button
                                        id="footer-subscribe-btn"
                                        type="submit"
                                        className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-primary-500 transition-colors group"
                                    >
                                        Notify Me at Launch
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            )}

                            {/* Contact info */}
                            <div className="space-y-3 text-secondary-400 text-sm font-sans">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                                    <Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                                    <span>India · Serving Nationwide</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="container mx-auto px-6 max-w-[1300px] py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-600 text-sm font-sans">
                <p>© 2026 Samastham Connect Private Limited. All rights reserved.</p>
                <div className="flex gap-6 flex-wrap justify-center">
                    <Link to="/contact" className="hover:text-secondary-400 transition-colors">Privacy Policy</Link>
                    <Link to="/contact" className="hover:text-secondary-400 transition-colors">Terms of Service</Link>
                    <Link to="/contact" className="hover:text-secondary-400 transition-colors">ABDM Compliance</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
