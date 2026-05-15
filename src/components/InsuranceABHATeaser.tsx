import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, CreditCard, ArrowRight, BadgeCheck, Wallet, QrCode } from 'lucide-react';

const InsuranceABHATeaser = () => (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-violet-50/20 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-[1100px]">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
                className="text-center mb-12">
                <span className="inline-flex items-center gap-2 text-violet-600 font-bold tracking-widest uppercase text-xs mb-4 border border-violet-200 bg-violet-50 px-5 py-2 rounded-full">
                    <ShieldCheck className="w-3 h-3" /> Health Security
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-secondary-900 mb-4 leading-tight">
                    Protected by{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-600">
                        Design
                    </span>
                </h2>
                <p className="text-secondary-500 text-xl max-w-xl mx-auto font-sans leading-relaxed">
                    Your ABHA digital health identity and insurance coverage — seamlessly built into every step of your Ayura journey.
                </p>
            </motion.div>

            {/* Two cards */}
            <div className="grid md:grid-cols-2 gap-6">

                {/* ABHA Card */}
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
                    className="group relative rounded-3xl overflow-hidden border border-violet-100 hover:shadow-2xl hover:shadow-violet-100 transition-all duration-400">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-800 opacity-0 group-hover:opacity-5 transition-opacity duration-400" />
                    <div className="p-8">
                        {/* Mini card mockup */}
                        <div className="rounded-2xl p-5 mb-6 text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #5b21b6)' }}>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-violet-300 text-[9px] font-bold uppercase tracking-widest mb-1">ABHA Health ID</p>
                                    <p className="text-white font-black text-base tracking-wider">91-XXXX-XXXX-7821</p>
                                </div>
                                <ShieldCheck className="w-8 h-8 text-violet-300" />
                            </div>
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-violet-300 text-[9px] font-bold uppercase tracking-widest">Account Holder</p>
                                    <p className="text-white font-bold text-sm">Rahul Sharma</p>
                                </div>
                                <div className="w-10 h-10 rounded-lg grid grid-cols-4 gap-0.5 p-1 bg-white/20">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="rounded-sm" style={{ background: [0,2,5,9,11,13].includes(i) ? 'white' : 'transparent' }} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                                <BadgeCheck className="w-5 h-5 text-violet-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-black text-secondary-900 mb-1">ABHA Digital Health ID</h3>
                                <p className="text-secondary-500 text-sm font-sans leading-relaxed">Your government-linked health passport. Every prescription, report and visit — unified, shareable, secure.</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6 mt-4">
                            {[{i: QrCode, l: 'Instant QR Sharing'}, {i: ShieldCheck, l: 'ABDM Verified'}, {i: BadgeCheck, l: '14-digit Health ID'}].map(({i: Icon, l}) => (
                                <span key={l} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100">
                                    <Icon className="w-3 h-3" />{l}
                                </span>
                            ))}
                        </div>

                        <Link to="/insurance-abha"
                            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-violet-200 group/btn">
                            Learn about ABHA <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>

                {/* Insurance Card */}
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
                    className="group relative rounded-3xl overflow-hidden border border-cyan-100 hover:shadow-2xl hover:shadow-cyan-100 transition-all duration-400">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-800 opacity-0 group-hover:opacity-5 transition-opacity duration-400" />
                    <div className="p-8">
                        {/* Mini coverage mockup */}
                        <div className="rounded-2xl p-5 mb-6 border border-slate-100 bg-white shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">Active Policy</p>
                                    <p className="text-secondary-900 font-black text-sm">Star Health · ₹10L</p>
                                </div>
                                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">Active</span>
                            </div>
                            {[{l:'Hospitalisation',ok:true},{l:'OPD Consultations',ok:true},{l:'Day Care Surgery',ok:true},{l:'Dental (Major)',ok:false}].map((x,i)=>(
                                <div key={i} className="flex items-center gap-2 py-1">
                                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 ${x.ok?'bg-emerald-100 text-emerald-600':'bg-slate-100 text-slate-400'}`}>{x.ok?'✓':'×'}</span>
                                    <span className={`text-xs font-medium ${x.ok?'text-secondary-700':'text-slate-400'}`}>{x.l}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-start gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                                <CreditCard className="w-5 h-5 text-cyan-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-black text-secondary-900 mb-1">Insurance & Cashless Claims</h3>
                                <p className="text-secondary-500 text-sm font-sans leading-relaxed">Check your live coverage, find cashless hospitals, and file claims digitally — all without leaving Ayura.</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6 mt-4">
                            {[{i: Wallet, l: 'Coverage Checker'}, {i: CreditCard, l: 'Cashless Claims'}, {i: ShieldCheck, l: 'All Major Insurers'}].map(({i: Icon, l}) => (
                                <span key={l} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100">
                                    <Icon className="w-3 h-3" />{l}
                                </span>
                            ))}
                        </div>

                        <Link to="/insurance-abha?tab=insurance"
                            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-cyan-100 group/btn">
                            Learn about Insurance <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default InsuranceABHATeaser;
