import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Activity, HeartPulse, Utensils } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="space-y-8 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Chip removed as per feedback */}
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">The Future</span>
                            <br />
                            of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Digital Intelligence.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            The comprehensive platform for building scalable, high-performance enterprise applications. Secure, verified, and infinitely adaptable.
                        </p>
                    </motion.div>

                    {/* ... (buttons remain) ... */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" className="rounded-full text-base h-12 shadow-blue-500/25 shadow-lg bg-primary hover:bg-primary/90 px-8">
                            Contact Sales
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full text-base h-12 border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm px-8">
                            View Documentation
                        </Button>
                    </motion.div>

                    <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-8">
                        <div>
                            <div className="text-xl font-bold text-foreground">99.99%</div>
                            <div className="text-xs text-muted-foreground">Uptime SLA</div>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-foreground">50ms</div>
                            <div className="text-xs text-muted-foreground">Global Latency</div>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-foreground">SOC2</div>
                            <div className="text-xs text-muted-foreground">Certified</div>
                        </div>
                    </div>
                </div>

                {/* Visual Content: Connected Ecosystem/Network - Cleaned Up */}
                <div className="relative hidden lg:block h-[600px] w-full perspective-[1000px]">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            {/* Central Node */}
                            <motion.div
                                animate={{ boxShadow: ["0 0 20px rgba(59, 130, 246, 0.2)", "0 0 40px rgba(59, 130, 246, 0.4)", "0 0 20px rgba(59, 130, 246, 0.2)"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="w-40 h-40 rounded-full bg-slate-950 border border-blue-500/30 flex items-center justify-center relative z-20 shadow-2xl"
                            >
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-md flex items-center justify-center border border-white/10">
                                    <Activity className="w-12 h-12 text-blue-200" />
                                </div>
                            </motion.div>

                            {/* Orbiting Rings - Cleaner */}
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-full border border-blue-500/10"
                                    style={{
                                        width: 300 + i * 120,
                                        height: 300 + i * 120,
                                    }}
                                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                                    transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
                                >
                                    <motion.div
                                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400/80 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                                    />
                                </motion.div>
                            ))}

                            {/* Removed Floating Feature Cards and Connection Lines for cleaner look per request */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
