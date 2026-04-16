import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <footer className="bg-secondary-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-white mb-6">
                            <img src={logo} alt="Samastham Connect" className="h-10 w-auto object-contain" />
                        </Link>
                        <p className="text-secondary-400 leading-relaxed mb-6 font-sans">
                            Empowering healthcare providers with next-generation digital tools.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-500 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter / X"
                                className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-500 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 font-heading">Product</h4>
                        <ul className="space-y-4 text-secondary-400 font-sans">
                            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Our Services</Link></li>
                            <li><Link to="/providers" className="hover:text-primary-400 transition-colors">For Providers</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 font-heading">Stay Updated</h4>
                        {subscribed ? (
                            <div className="bg-primary-500/20 border border-primary-500/40 rounded-lg px-4 py-4 text-primary-300 font-sans text-sm">
                                ✅ You&apos;re on the list! We&apos;ll notify you when we launch.
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex flex-col gap-3" noValidate>
                                <input
                                    id="footer-email-input"
                                    type="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                    placeholder="Enter your email"
                                    className="bg-secondary-800 border-none rounded-lg px-4 py-3 text-white placeholder:text-secondary-500 focus:ring-2 focus:ring-primary-500 outline-none font-sans"
                                />
                                {error && <p className="text-red-400 text-xs font-sans">{error}</p>}
                                <button
                                    id="footer-subscribe-btn"
                                    type="submit"
                                    className="bg-primary-500 text-white font-medium py-3 rounded-lg hover:bg-primary-600 transition-colors font-sans"
                                >
                                    Notify Me at Launch
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-500 text-sm font-sans">
                    <p>© 2026 Samastham Connect. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/contact" className="hover:text-white transition-colors">Privacy &amp; Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
