import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { Button } from "../components/ui/button"
import { Search, MapPin, Video, UserPlus, Scissors, FlaskConical, CheckCircle2, Star, Smartphone, Apple, Play, ExternalLink, Pill, FileText, Shield, Mic, Globe, MessageSquare, Bot } from "lucide-react"
import ayuraLogo from "../assets/ayura/logo-icon-teal.png"
import { BrandAyura } from "../components/ui/BrandAyura"

const services = [
    { title: "Video Consult", desc: "Talk to a doctor online instantly within 15 minutes.", icon: Video, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "In-Clinic Visit", desc: "Find top doctors near you and book confirmed appointments.", icon: UserPlus, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Surgeries", desc: "Safe and trusted surgery centers with expert surgeons.", icon: Scissors, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Lab Tests", desc: "Sample collection from home and rapid digital reports.", icon: FlaskConical, color: "text-orange-600", bg: "bg-orange-50" },
]

const providerTabs = [
    {
        id: "doctors",
        label: "For doctors",
        title: <>Build your digital presence and enhance patient experience with <BrandAyura type='full' size='h-6' className='translate-y-1' /></>,
        stats: [
            { label: "doctors", value: "1L+" },
            { label: "patients", value: "30 Cr+" },
            { label: "countries", value: "20+" }
        ],
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "clinics",
        label: "For clinics",
        title: <>Powerful tools and software that help millions of patients discover you on <BrandAyura type='full' size='h-6' className='translate-y-1' /></>,
        stats: [
            { label: "clinics", value: "60K" },
            { label: "patients", value: "2.5 Cr+" },
            { label: "countries", value: "5+" }
        ],
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "hospitals",
        label: "For hospitals",
        title: "Technology products and hospital management softwares trusted by the industry",
        stats: [
            { label: "hospitals", value: "7K+" },
            { label: "countries", value: "17+" },
            { label: "patients managed", value: "2.8 Cr+" }
        ],
        image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&auto=format&fit=crop"
    }
]

export default function Healthcare() {
    const [activeTab, setActiveTab] = useState("doctors")

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-24">
                {/* Consumer Hero */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative order-2 lg:order-1">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 p-2"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                                        alt="Consultation UI"
                                        className="rounded-[32px] w-full"
                                    />
                                </motion.div>
                                <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                                        </div>
                                        <div>
                                            <div className="text-xl font-black text-gray-900">12,400+</div>
                                            <div className="text-xs text-gray-500 font-bold uppercase">Specialists active</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8 order-1 lg:order-2">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="mb-8 flex items-center gap-4"
                                >
                                    <BrandAyura type="full" size="h-20" />
                                </motion.div>
                                <h1 className="text-6xl font-black text-gray-900 leading-tight">
                                    Instant medical care. <span className="text-teal-600 block"><BrandAyura type="name" /> Anywhere.</span>
                                </h1>
                                <ul className="space-y-4">
                                    {["Specialist consults online", "Verified experts online 24/7", "100% encrypted and confidential"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-lg font-bold text-gray-700">
                                            <CheckCircle2 className="w-6 h-6 text-teal-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="h-16 px-10 rounded-2xl bg-teal-600 hover:bg-teal-700 text-lg font-black shadow-xl shadow-teal-600/20">
                                        Find a Doctor
                                    </Button>
                                    <a href="https://ayura.in" target="_blank" rel="noopener noreferrer">
                                        <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl border-2 border-teal-100 text-teal-700 hover:bg-teal-50 text-lg font-black flex items-center gap-2">
                                            Visit AYURA Site <ExternalLink className="w-5 h-5" />
                                        </Button>
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 pt-4">
                                    <div className="flex -space-x-1">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                                    </div>
                                    <p className="text-sm text-gray-500 italic">"The app experience was incredibly smooth. I got connected within a minute."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Healthcare Ecosystem - inspired by Practo */}
                <section className="py-24 bg-gray-50/50">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl font-black text-gray-900 mb-4">Healthcare at your fingertips</h2>
                                <p className="text-xl text-gray-500 font-medium">From prescriptions to records,AYURA connects every dot of your health journey.</p>
                            </div>
                            <Button variant="outline" className="rounded-xl border-gray-200 font-bold h-12">View all services</Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Order Medicines", desc: "Doorstep delivery in 60 minutes.", icon: Pill, color: "bg-orange-500" },
                                { title: "Lab Tests at Home", desc: "Professional sample collection.", icon: FlaskConical, color: "bg-blue-500" },
                                { title: "Health Records", desc: "Encrypted vault for all your data.", icon: FileText, color: "bg-indigo-500" },
                                { title: "Insurance Plans", desc: "Tailored coverage for your family.", icon: Shield, color: "bg-emerald-500" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all cursor-pointer group"
                                >
                                    <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">{item.desc}</p>
                                    <div className="text-teal-600 font-black text-sm uppercase tracking-wider flex items-center gap-2">
                                        Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* AI Health Aide - The Flagship Feature */}
                <section className="py-32 bg-white relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/30 -skew-x-12 translate-x-1/4" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <div>
                                    <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-black text-xs uppercase tracking-widest mb-6">Flagship Feature</span>
                                    <h2 className="text-5xl font-black text-gray-900 leading-tight">Your 24/7 Virtual <span className="text-teal-600">Health Companion.</span></h2>
                                    <p className="text-xl text-gray-500 font-medium mt-6 leading-relaxed">
                                        Meet the <BrandAyura type="name" size="h-8" className="translate-y-1" /> AI. It's more than a bot—it's a multilingual health aide that understands your native language and responds to voice messages instantly.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    {[
                                        { title: "Native Language Support", desc: "Discuss health issues in your mother tongue with 99%+ accuracy.", icon: Globe },
                                        { title: "Audio Interactions", desc: "No typing needed. Just record a voice note and get instant medical triage.", icon: Mic },
                                        { title: "Virtual Doctor Triage", desc: "Get preliminary guidance and symptom analysis before booking an expert.", icon: Bot }
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500">
                                                <feature.icon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h4>
                                                <p className="text-gray-500 font-medium">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button className="h-16 px-12 rounded-2xl bg-gray-900 border-none hover:bg-black text-white text-lg font-black shadow-2xl">Try AI Beta</Button>
                            </div>

                            <div className="relative">
                                {/* Mock Phone UI with AI Chat */}
                                <div className="relative mx-auto w-[320px] h-[640px] bg-gray-900 rounded-[50px] border-8 border-gray-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
                                    <div className="absolute top-0 w-full h-8 bg-gray-800" /> {/* Speaker notch */}
                                    <div className="h-full bg-white pt-10 flex flex-col p-4">
                                        <div className="flex items-center gap-3 mb-8 border-b pb-4">
                                            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-black">AI</div>
                                            <div>
                                                <div className="font-black text-sm text-gray-900"><BrandAyura type="full" size="h-5" /> Assistant</div>
                                                <div className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4 flex-grow overflow-y-auto no-scrollbar">
                                            <div className="bg-gray-100 rounded-2xl p-4 mr-8">
                                                <p className="text-xs text-gray-800 font-medium italic">"Hello! How can I help you today? You can speak to me in your native language."</p>
                                            </div>
                                            <div className="bg-teal-600 rounded-2xl p-4 ml-8 text-white">
                                                <div className="flex items-center gap-2 text-[10px] mb-2 font-black opacity-80 uppercase tracking-widest"><Mic className="w-3 h-3" /> Voice Clip</div>
                                                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                                                    <motion.div animate={{ scaleX: [0, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-white origin-left" />
                                                </div>
                                            </div>
                                            <div className="bg-gray-100 rounded-2xl p-4 mr-8">
                                                <p className="text-xs text-gray-800 font-medium italic">"I've analyzed your symptoms. Based on your description, I recommend scheduling a specialist consultation. Shall I proceed?"</p>
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-4 border-t flex items-center gap-3">
                                            <div className="flex-grow h-10 bg-gray-50 rounded-full border border-gray-100 px-4 flex items-center text-gray-300 text-xs">Type a message...</div>
                                            <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white"><Mic className="w-5 h-5" /></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Floating Badges */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -right-10 top-1/4 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100"
                                >
                                    <div className="flex items-center gap-3">
                                        <Globe className="text-blue-500 w-6 h-6" />
                                        <div className="font-black text-sm text-gray-900">Kannada, Telugu, Hindi +</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [20, 0, 20] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -left-10 bottom-1/4 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100"
                                >
                                    <div className="flex items-center gap-3">
                                        <MessageSquare className="text-teal-600 w-6 h-6" />
                                        <div className="font-black text-sm text-gray-900">Instant Triage Result</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Search & Services - existing section modified */}
                <section className="py-20 bg-teal-600 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto mb-16 text-center">
                            <h2 className="text-2xl font-bold text-white mb-8">Find the best doctors, clinics, and hospitals nearest to you. Book appointments instantly.</h2>
                            <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">
                                <div className="flex-1 flex items-center gap-3 px-4 py-3 border-r border-gray-100">
                                    <Search className="text-gray-400 w-5 h-5" />
                                    <input className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400" placeholder="Search doctors, specialties..." />
                                </div>
                                <div className="flex-1 flex items-center gap-3 px-4 py-3">
                                    <MapPin className="text-gray-400 w-5 h-5" />
                                    <input className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400" placeholder="Your location..." />
                                </div>
                                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl h-14 px-10 font-bold">Search</Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((s, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all group"
                                >
                                    <div className={`${s.bg} ${s.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                                        <s.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                                    <Button variant="link" className={`${s.color} p-0 font-bold h-auto`}>Book Now →</Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* For Providers Tabs */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-gray-900 mb-4">Providers</h2>
                            <div className="flex justify-center gap-8 overflow-x-auto pb-4 no-scrollbar">
                                {providerTabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`text-lg font-bold pb-2 border-b-2 transition-all whitespace-nowrap ${activeTab === tab.id ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-400'}`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            {providerTabs.filter(t => t.id === activeTab).map(tab => (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                                >
                                    <div className="space-y-10">
                                        <h3 className="text-4xl font-black text-gray-900 leading-tight">{tab.title}</h3>
                                        <div className="space-y-6">
                                            {tab.stats.map((s, i) => (
                                                <div key={i} className="flex items-center gap-4">
                                                    <CheckCircle2 className="text-yellow-500 w-5 h-5" />
                                                    <span className="text-lg font-bold text-gray-700">
                                                        <span className="text-teal-600">{s.value}</span> {s.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl h-14 px-10 font-bold">Learn more</Button>
                                    </div>
                                    <div className="rounded-[40px] overflow-hidden shadow-2xl">
                                        <img src={tab.image} alt={tab.label} className="w-full h-[500px] object-cover" />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </section>

                {/* Launching Soon Section */}
                <section className="py-32 bg-gray-50 border-t border-gray-100 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-black text-xs uppercase tracking-widest">
                                    Product Roadmap
                                </span>
                                <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                                    The <BrandAyura type="full" size="h-12 md:h-16" className="translate-y-1" /> App. <span className="text-teal-600">Launching Soon.</span>
                                </h2>
                                <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto">
                                    We're putting health in the palm of your hand. Be at the front of the line for the most intelligent healthcare experience ever built.
                                </p>
                            </div>

                            <div className="flex flex-col items-center gap-8">
                                <div className="transition-transform hover:scale-105 active:scale-95">
                                    <Button
                                        onClick={() => window.open('https://forms.gle/your-form-id', '_blank')}
                                        size="lg"
                                        className="h-20 px-16 rounded-[30px] bg-teal-600 hover:bg-teal-700 text-white text-2xl font-black shadow-2xl shadow-teal-600/30"
                                    >
                                        Are you interested?
                                    </Button>
                                </div>

                                <div className="flex items-center gap-8 opacity-40">
                                    <Apple className="w-8 h-8" />
                                    <div className="w-px h-8 bg-gray-300" />
                                    <Play className="w-8 h-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
