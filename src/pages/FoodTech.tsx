import { motion } from "framer-motion"
import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { Button } from "../components/ui/button"
import { Utensils, TrendingUp, Zap, Box } from "lucide-react"

export default function FoodTech() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-bold">
                                <Utensils className="w-4 h-4" /> Revolutionizing Logistics
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                                Demand-Aware <span className="text-purple-600">Agents.</span>
                            </h1>
                            <p className="text-xl text-gray-500 leading-relaxed">
                                Maximize kitchen efficiency and logistics through hyper-local predictive AI. Stop waste, increase margins, and scale faster.
                            </p>
                            <div className="flex gap-4">
                                <Button size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700 px-8 text-white">Start Scaling</Button>
                                <Button variant="outline" size="lg" className="rounded-full px-8">Calculator ROI</Button>
                            </div>
                        </div>

                        {/* Visual for Food Tech: Logistics/Flow */}
                        <div className="relative h-[500px] w-full bg-gray-50 rounded-[48px] overflow-hidden flex items-center justify-center px-8 border border-gray-100">
                            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                                {[1, 2, 3, 4].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100"
                                    >
                                        <div className="h-2 w-12 bg-purple-100 rounded-full mb-4" />
                                        <div className="h-8 w-full bg-gray-50 rounded-xl" />
                                        <div className="mt-4 flex justify-between items-center text-[10px] font-bold">
                                            <span className="text-gray-400">Order #{1024 + i}</span>
                                            <span className="text-purple-600">Pending</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 360],
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute center bg-purple-600/5 w-64 h-64 rounded-full blur-3xl"
                            />
                        </div>
                    </div>

                    {/* Stats Matrix */}
                    <div className="py-24 border-t border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { title: "Waste Reduction", value: "24%", desc: "Average decrease in ingredient spoilage." },
                                { title: "Delivery Predict", value: "98.2%", desc: "Pinpoint accuracy for delivery windows." },
                                { title: "Kitchen Throughput", value: "+30%", desc: "Increase in peak-hour output capacity." },
                                { title: "Labour Costs", value: "-12%", desc: "Reduction in idle staff hours via forecasting." },
                            ].map((stat, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="text-3xl font-black text-purple-600">{stat.value}</div>
                                    <div className="text-sm font-bold text-gray-900">{stat.title}</div>
                                    <div className="text-xs text-gray-500 leading-relaxed">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Integration Logos for Food Tech */}
                    <div className="py-16 bg-white border border-gray-100 rounded-[48px] px-12 text-center">
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">Ecosystem Ready</p>
                        <div className="flex flex-wrap justify-center gap-16 items-center opacity-40 grayscale">
                            <span className="text-2xl font-black tracking-widest uppercase">Square</span>
                            <span className="text-2xl font-black tracking-widest uppercase">Toast</span>
                            <span className="text-2xl font-black tracking-widest uppercase">Grubhub</span>
                            <span className="text-2xl font-bold italic">DoorDash</span>
                            <span className="text-2xl font-black">UberEats</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
