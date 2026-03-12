import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { Mail, Globe, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "../components/ui/button"

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Info Section */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-6xl font-black text-gray-900 leading-tight">Let's build your <span className="text-blue-600">Agent.</span></h1>
                                <p className="text-xl text-gray-500 leading-relaxed">
                                    Ready to scale your enterprise with intelligent AI? Our sales and technical teams are ready to help you deploy SamasthamConnect in your environment.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-gray-100">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest text-xs">Email Us</div>
                                        <div className="text-lg font-bold text-gray-900 leading-none mt-1">enterprise@samastham.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-purple-600 shadow-sm border border-gray-100">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest text-xs">Global HQ</div>
                                        <div className="text-lg font-bold text-gray-900 leading-none mt-1">Hyderabad, India</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-gray-100">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest text-xs">US Office</div>
                                        <div className="text-lg font-bold text-gray-900 leading-none mt-1">San Francisco, CA</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100">
                                <div className="text-sm font-bold text-gray-900 mb-4 tracking-tight">Enterprise Perks</div>
                                <ul className="space-y-3">
                                    {["Dedicated Solution Architects", "SLA-backed Uptime", "On-prem Cloud Deployments", "Custom LLM Training"].map((p, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" /> {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white rounded-[48px] p-10 lg:p-14 shadow-2xl border border-gray-100 shadow-gray-200/50"
                            >
                                {!submitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-900 px-1">First Name</label>
                                                <input required type="text" className="w-full bg-gray-50 border-gray-100 border rounded-2xl p-4 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all placeholder:text-gray-300" placeholder="John" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-900 px-1">Last Name</label>
                                                <input required type="text" className="w-full bg-gray-50 border-gray-100 border rounded-2xl p-4 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all placeholder:text-gray-300" placeholder="Doe" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-900 px-1">Work Email</label>
                                            <input required type="email" className="w-full bg-gray-50 border-gray-100 border rounded-2xl p-4 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all placeholder:text-gray-300" placeholder="j.doe@company.com" />
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-900 px-1">Company Size</label>
                                                <select className="w-full bg-gray-50 border-gray-100 border rounded-2xl p-4 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all">
                                                    <option>1-50 employees</option>
                                                    <option>51-200 employees</option>
                                                    <option>201-1000 employees</option>
                                                    <option>1000+ employees</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-900 px-1">Job Role</label>
                                                <select className="w-full bg-gray-50 border-gray-100 border rounded-2xl p-4 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all">
                                                    <option>Engineering Leader</option>
                                                    <option>Product Leader</option>
                                                    <option>Operations Leader</option>
                                                    <option>Executive / CEO</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-900 px-1">How can we help?</label>
                                            <textarea required rows={4} className="w-full bg-gray-50 border-gray-100 border rounded-2xl p-4 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all placeholder:text-gray-300" placeholder="Tell us about your AI requirements..." />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-lg font-bold shadow-xl shadow-blue-600/20">
                                            Contact Sales
                                        </Button>

                                        <p className="text-center text-xs text-gray-400 font-medium pt-4">By submitting this form, you agree to our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.</p>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-20"
                                    >
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner shadow-green-600/10">
                                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h2 className="text-3xl font-black text-gray-900 mb-4">Request Received.</h2>
                                        <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">
                                            Thank you for your interest! A specialized solutions architect will be in touch with you within the next 24 business hours.
                                        </p>
                                        <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-12 rounded-full px-8">Send another message</Button>
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
