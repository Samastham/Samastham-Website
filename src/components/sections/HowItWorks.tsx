import { motion } from "framer-motion"
import { Database, Cpu, Play, ArrowRight } from "lucide-react"

const steps = [
    {
        title: "Data Input",
        description: "Securely ingest enterprise data from legacy systems or live streams.",
        icon: Database,
        color: "bg-blue-500",
    },
    {
        title: "NLP Processing",
        description: "Our proprietary LLM stack parses intent and extracts clinical or logistical entities.",
        icon: Cpu,
        color: "bg-purple-500",
    },
    {
        title: "Action Execution",
        description: "Autonomous agents trigger workflows, update records, or notify stakeholders.",
        icon: Play,
        color: "bg-indigo-500",
    },
]

export function HowItWorks() {
    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
                    <p className="text-lg text-gray-600">
                        An integrated pipeline designed for enterprise-scale reliability. From raw data to verified action in milliseconds.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
                    {/* Connection Lines (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-full z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative z-10 bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 group hover:border-blue-200 transition-colors"
                        >
                            <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-sm font-black text-gray-200">0{i + 1}</span>
                                {step.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {step.description}
                            </p>

                            {i < steps.length - 1 && (
                                <div className="lg:hidden flex justify-center py-6">
                                    <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
