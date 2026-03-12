import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { motion } from "framer-motion"
import { Layers, Globe, Zap, Shield } from "lucide-react"
import { Button } from "../components/ui/button"

const solutionList = [
    {
        title: "Enterprise Workflow Automation",
        desc: "End-to-end automation of complex back-office and clinical processes using multi-agent systems.",
        icon: Layers,
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        title: "Custom Agent Development",
        desc: "Tailor-made AI agents trained on your proprietary data to solve industry-specific bottlenecks.",
        icon: Zap,
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
    {
        title: "Secure Data Integration",
        desc: "Zero-trust architecture to safely integrate LLMs with your sensitive enterprise databases.",
        icon: Shield,
        color: "text-indigo-600",
        bg: "bg-indigo-50"
    },
    {
        title: "Predictive Supply Chain",
        desc: "AI-driven forecasting that optimizes logistics and reduces waste in real-time.",
        icon: Globe,
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    }
]

export default function Solutions() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mb-24">
                        <h1 className="text-6xl font-black text-gray-900 mb-8 leading-tight">Tailored Solutions for <span className="text-blue-600">Enterprise Scale.</span></h1>
                        <p className="text-xl text-gray-500 leading-relaxed">
                            We don't believe in one-size-fits-all AI. Our solutions are engineered to integrate seamlessly into your existing workflows, delivering measurable ROI from day one.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {solutionList.map((sol, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="p-10 rounded-[48px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all group"
                            >
                                <div className={`w-16 h-16 ${sol.bg} ${sol.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    <sol.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{sol.title}</h3>
                                <p className="text-gray-500 leading-relaxed mb-8">{sol.desc}</p>
                                <Button variant="link" className={`p-0 h-auto font-bold ${sol.color} flex items-center gap-2`}>
                                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
