import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { motion } from "framer-motion"
import { Search, Lightbulb, Code2, HeadphonesIcon, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { BrandAyura } from "../components/ui/BrandAyura"

const stages = [
    {
        title: "01. AI Audit & Discovery",
        desc: "We analyze your existing workflows to identify high-impact automation opportunities and data readiness.",
        icon: Search,
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        title: "02. Strategy & Architecture",
        desc: "Our engineering team designs a custom multi-agent architecture tailored to your specific security and scale requirements.",
        icon: Lightbulb,
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
    {
        title: "03. Custom Development",
        desc: "We build and train specialized AI agents on your proprietary datasets, ensuring 99%+ accuracy in critical tasks.",
        icon: Code2,
        color: "text-indigo-600",
        bg: "bg-indigo-50"
    },
    {
        title: "04. Lifecycle Support",
        desc: "Post-deployment, we provide ongoing optimization, LLM fine-tuning, and dedicated solutions architect support.",
        icon: HeadphonesIcon,
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    }
]

export default function Engagement() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-6">
                    {/* Hero Section */}
                    <div className="text-center mb-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl font-black text-gray-900 mb-8 leading-tight"
                        >
                            Tailored Intelligence for <span className="text-blue-600">Enterprise Scale.</span>
                        </motion.h1>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                            We don't offer generic templates. We build mission-critical AI agents that solve your specific bottlenecks through a proven, high-touch engagement model.
                        </p>
                    </div>

                    {/* How We Work - Stages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                        {stages.map((stage, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                                className="relative group"
                            >
                                {/* The Card Container */}
                                <div className="p-[2px] rounded-[64px] bg-gradient-to-br from-gray-100 to-transparent group-hover:from-blue-400 group-hover:to-indigo-500 transition-all duration-700">
                                    <div className="bg-white rounded-[62px] p-12 h-full relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">

                                        {/* Large Background Number */}
                                        <div className="absolute -top-10 -right-10 text-[200px] font-black text-gray-50 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity select-none italic">
                                            {i + 1}
                                        </div>

                                        <div className="relative z-10">
                                            <div className={`w-24 h-24 ${stage.bg} ${stage.color} rounded-[32px] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-xl shadow-gray-200/50`}>
                                                <stage.icon className="w-12 h-12" />
                                            </div>

                                            <div className="space-y-6">
                                                <h3 className="text-4xl font-black text-gray-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                                                    {stage.title}
                                                </h3>
                                                <p className="text-gray-500 leading-relaxed text-xl font-medium">
                                                    {stage.desc}
                                                </p>
                                            </div>

                                            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className={`w-3 h-3 rounded-full ${stage.color.replace('text-', 'bg-')} animate-pulse`} />
                                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Enterprise Phase 0{i + 1}</span>
                                                </div>
                                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:translate-x-2">
                                                    <ArrowRight className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className={`absolute -bottom-24 -left-24 w-64 h-64 ${stage.bg} opacity-0 group-hover:opacity-20 blur-[100px] transition-opacity duration-700`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="rounded-[64px] bg-gradient-to-br from-blue-600 to-indigo-900 p-16 text-center text-white shadow-2xl shadow-blue-600/20"
                    >
                        <h2 className="text-4xl font-black mb-6">Ready to innovate?</h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Every organization has unique challenges. Contact our solutions team for a customized engagement plan and AI feasibility audit.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link to="/contact">
                                <Button size="lg" className="h-16 px-12 rounded-2xl bg-white text-blue-600 hover:bg-gray-100 font-black text-xl shadow-2xl shadow-white/20">
                                    Contact Us
                                </Button>
                            </Link>
                            <Link to="/healthcare">
                                <Button size="lg" variant="outline" className="h-16 px-12 rounded-2xl border-2 border-white/40 text-white hover:bg-white hover:text-blue-900 font-black text-xl transition-all duration-300">
                                    Explore <BrandAyura type="name" size="h-6" className="translate-y-1" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
