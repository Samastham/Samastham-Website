import React, { useState } from 'react';
import { X, SmartphoneIcon, HeartPulse } from 'lucide-react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [view, setView] = useState<'login' | 'signup'>('login');
    const [contact, setContact] = useState('');
    const [name, setName] = useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex">
                {/* Left Illustration Panel */}
                <div className="hidden sm:flex flex-col items-center justify-center bg-primary-50 w-5/12 p-6 text-center">
                    {/* CSS Illustration */}
                    <div className="relative w-24 h-28 mb-4">
                        {/* Patient */}
                        <div className="absolute bottom-0 left-1 w-10 h-20 flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-primary-200/30 border-2 border-primary-200/60" />
                            <div className="w-6 h-10 bg-primary-300/40 rounded-t-xl mt-1" />
                            <div className="w-4 h-1 bg-primary-200/30 rounded-full mt-1" style={{ transform: 'rotate(-30deg)', transformOrigin: 'right center' }} />
                        </div>
                        {/* Doctor */}
                        <div className="absolute bottom-0 right-0 w-12 h-24 flex flex-col items-center">
                            <div className="w-9 h-9 rounded-full bg-primary-200 border-2 border-primary-400" />
                            <div className="w-8 h-12 bg-white border border-primary-200 rounded-t-xl mt-0.5" />
                            <div className="w-4 h-1 bg-primary-200 rounded-full mt-0.5" />
                        </div>
                        {/* Stethoscope hint */}
                        <HeartPulse className="absolute top-0 right-0 w-5 h-5 text-primary-400" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 mb-1">Make Healthcare Simpler</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Order medicines, book lab tests & consult doctors — all from home.
                    </p>
                    {/* Dots */}
                    <div className="flex gap-1.5 mt-4">
                        <div className="w-2 h-2 rounded-full bg-primary-500" />
                        <div className="w-2 h-2 rounded-full bg-gray-300" />
                        <div className="w-2 h-2 rounded-full bg-gray-300" />
                    </div>
                </div>

                {/* Right Form Panel */}
                <div className="flex-1 p-6 sm:p-8 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                        {view === 'login' ? 'Login' : 'Create Account'}
                    </h2>
                    <p className="text-xs text-gray-500 mb-6">
                        {view === 'login'
                            ? 'Access your orders, lab tests & consultations'
                            : 'Join thousands getting better healthcare'}
                    </p>

                    <div className="space-y-4">
                        {view === 'signup' && (
                            <div>
                                <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Priya Sharma"
                                    className="w-full border-b border-gray-300 focus:border-primary-500 outline-none py-2 text-sm text-gray-900 placeholder-gray-300 transition-colors"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                                Mobile number or email
                            </label>
                            <div className="flex items-center border-b border-gray-300 focus-within:border-primary-500 transition-colors">
                                <SmartphoneIcon className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                                <input
                                    type="text"
                                    value={contact}
                                    onChange={e => setContact(e.target.value)}
                                    placeholder="+91 98765 43210 or email@example.com"
                                    className="flex-1 outline-none py-2 text-sm text-gray-900 placeholder-gray-300 bg-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    <button className="mt-8 w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition-colors text-sm tracking-wide">
                        {view === 'login' ? 'Send OTP' : 'Create Account'}
                    </button>

                    <p className="text-center text-xs text-gray-500 mt-5">
                        {view === 'login' ? (
                            <>
                                New to Ayura?{' '}
                                <button onClick={() => setView('signup')} className="text-primary-600 font-bold hover:underline">
                                    Sign Up
                                </button>
                            </>
                        ) : (
                            <>
                                Already have an account?{' '}
                                <button onClick={() => setView('login')} className="text-primary-600 font-bold hover:underline">
                                    Login
                                </button>
                            </>
                        )}
                    </p>

                    <p className="text-center text-[10px] text-gray-400 mt-3 leading-relaxed">
                        By continuing, you agree to our{' '}
                        <span className="underline cursor-pointer">Terms of Use</span> &{' '}
                        <span className="underline cursor-pointer">Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
