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
                            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">The Future</span>
                            <br />
                            of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Digital Intelligence.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            The comprehensive platform for building scalable, high-performance enterprise applications. Secure, verified, and infinitely adaptable.
                        </p>
                    </motion.div>

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

                {/* Visual Content: Glassmorphic Dashboard Mockup */}
                <div className="relative hidden lg:block h-[600px] w-full perspective-[1000px]">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, rotateX: 20, rotateY: -20, scale: 0.9 }}
                            animate={{ opacity: 1, rotateX: 10, rotateY: -15, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
                            className="relative w-[500px] h-[350px] bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl transform-style-3d group"
                        >
                            {/* Dashboard Header */}
                            <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                </div>
                                <div className="ml-4 h-4 w-32 bg-white/5 rounded-full" />
                            </div>

                            {/* Dashboard Body */}
                            <div className="p-6 grid grid-cols-3 gap-4 h-[calc(100%-40px)]">
                                {/* Main Chart Area */}
                                <div className="col-span-2 space-y-4">
                                    <div className="flex justify-between items-end mb-2">
                                        <div>
                                            <div className="text-xs text-muted-foreground">Total Requests</div>
                                            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">2,543,902</div>
                                        </div>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-1.5 bg-blue-500 rounded-full"
                                                    animate={{ height: [10, 24, 14, 30, 18] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="h-32 w-full bg-gradient-to-b from-blue-500/10 to-transparent rounded-lg border border-blue-500/20 relative overflow-hidden">
                                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                            <motion.path
                                                d="M0 128 C 50 128, 50 40, 100 40 C 150 40, 150 100, 200 100 C 250 100, 250 20, 300 20 L 300 128 Z"
                                                fill="url(#gradient)"
                                                initial={{ d: "M0 128 L 300 128 Z" }}
                                                animate={{ d: "M0 128 C 50 128, 50 40, 100 40 C 150 40, 150 100, 200 100 C 250 100, 250 20, 300 20 L 300 128 Z" }}
                                                transition={{ duration: 2, ease: "easeOut" }}
                                            />
                                            <defs>
                                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                                                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="h-16 rounded-lg bg-white/5 border border-white/5 p-3">
                                            <div className="w-6 h-6 rounded bg-green-500/20 mb-2 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                            </div>
                                            <div className="w-12 h-2 bg-white/10 rounded" />
                                        </div>
                                        <div className="h-16 rounded-lg bg-white/5 border border-white/5 p-3">
                                            <div className="w-6 h-6 rounded bg-orange-500/20 mb-2 flex items-center justify-center">
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                                    className="w-3 h-3 border-2 border-orange-400 border-t-transparent rounded-full"
                                                />
                                            </div>
                                            <div className="w-16 h-2 bg-white/10 rounded" />
                                        </div>
                                    </div>
                                </div>

                                {/* Side Panel */}
                                <div className="space-y-2">
                                    <div className="text-[10px] items-center text-muted-foreground mb-2 flex justify-between">
                                        <span>ACTIVE NODES</span>
                                        <span className="text-green-400">●</span>
                                    </div>
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-10 rounded bg-white/5 border border-white/5 flex items-center px-2 gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shrink-0" />
                                            <div className="flex-1 min-w-0">
                                                <div className="h-1.5 w-12 bg-white/20 rounded mb-1" />
                                                <div className="h-1 w-8 bg-white/10 rounded" />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="h-24 rounded bg-white/5 border border-dashed border-white/10 mt-4 flex flex-col items-center justify-center text-center p-2">
                                        <span className="text-2xl mb-1">+</span>
                                        <span className="text-[10px] text-muted-foreground">Deploy Agent</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Notification */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1, type: "spring" }}
                                className="absolute -right-12 top-10 bg-slate-800 border border-green-500/30 p-3 rounded-lg shadow-xl flex items-center gap-3 transform translate-z-12"
                            >
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-lg">✓</div>
                                <div>
                                    <div className="text-xs font-bold text-white">Deployment Complete</div>
                                    <div className="text-[10px] text-muted-foreground">Just now</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
