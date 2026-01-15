import { motion } from "framer-motion"
import { Button } from "../ui/button"

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
                        <div className="inline-flex items-center gap-2 rounded-md bg-secondary/50 border border-white/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span>Infrastructure for Scale</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                            Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Everything.</span>
                            <br />
                            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Everywhere.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            The comprehensive platform for building intelligent healthcare and food agents. Secure, verified, and infinitely scalable.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" className="rounded-full text-base h-12 shadow-blue-500/25 shadow-lg bg-primary hover:bg-primary/90 px-8">
                            Start Integration
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full text-base h-12 border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm px-8">
                            View Platform
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

                {/* Visual Content: Isometric Tech Stack */}
                <div className="relative hidden lg:block h-[600px] w-full perspective-[1000px]">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Isometric Container */}
                        <motion.div
                            initial={{ rotateX: 60, rotateZ: -40, opacity: 0, scale: 0.8 }}
                            animate={{ rotateX: 60, rotateZ: -40, opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-96 h-96 transform-style-3d"
                        >
                            {/* Layer 1: Data Infrastructure (Bottom) */}
                            <motion.div
                                animate={{ z: 0 }}
                                className="absolute inset-0 bg-slate-900/80 border border-blue-500/30 rounded-3xl shadow-2xl backdrop-blur-sm transform translate-z-[0px]"
                            >
                                {/* Grid Pattern */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] rounded-3xl" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/20 blur-xl" />
                                </div>
                            </motion.div>

                            {/* Layer 2: Intelligence/Logic (Middle) */}
                            <motion.div
                                initial={{ z: 0 }}
                                animate={{ z: 80 }}
                                transition={{ delay: 0.2, duration: 1, ease: "spring" }}
                                className="absolute inset-0 bg-indigo-900/60 border border-purple-500/30 rounded-3xl shadow-xl backdrop-blur-md transform translate-z-[80px]"
                            >
                                <div className="absolute inset-4 border border-white/5 rounded-2xl" />
                                {/* Glowing Nodes */}
                                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)] animate-pulse" />
                                <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)] animate-pulse delay-300" />
                                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)] animate-pulse delay-700" />

                                {/* Connection Lines */}
                                <svg className="absolute inset-0 w-full h-full opacity-30">
                                    <path d="M100 100 L250 200" stroke="white" strokeWidth="1" />
                                    <path d="M250 200 L300 150" stroke="white" strokeWidth="1" />
                                </svg>
                            </motion.div>

                            {/* Layer 3: Application/Interface (Top) */}
                            <motion.div
                                initial={{ z: 0 }}
                                animate={{ z: 160 }}
                                transition={{ delay: 0.4, duration: 1, ease: "spring" }}
                                className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl shadow-2xl backdrop-blur-xl transform translate-z-[160px] flex items-center justify-center"
                            >
                                <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center">
                                    <div className="text-white font-bold text-4xl">S</div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute -top-10 -right-10 px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-xs font-bold backdrop-blur-md transform rotate-x-0"
                                >
                                    Active
                                </motion.div>
                            </motion.div>

                            {/* Connecting vertical beams (Abstract) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="absolute inset-0 flex items-center justify-center transform translate-z-[80px]"
                            >
                                <div className="w-1 h-40 bg-gradient-to-b from-blue-500 to-purple-500 blur-md transform -translate-z-[40px]" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
