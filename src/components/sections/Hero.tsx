import { Button } from "../ui/button"
import { Activity, Server, Zap, Users } from "lucide-react"
import { HeroVisual } from "./HeroVisual"

const metrics = [
    { label: "Global Latency", value: "45ms", icon: Zap },
    { label: "Uptime", value: "99.99%", icon: Server },
    { label: "Active Agents", value: "12,450", icon: Users },
]

export function Hero() {
    return (
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 bg-white">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-purple-50/50 to-transparent pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-10 max-w-2xl">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            v2.4 Enterprise Release
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-gray-900 mb-8">
                            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                                Future
                            </span> of Digital Intelligence.
                        </h1>
                        
                        <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                            The comprehensive platform for building scalable, high-performance enterprise AI applications. Secure, verified, and ready for global scale.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Button size="lg" className="rounded-full text-base h-14 bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 px-10">
                            Contact Sales
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full text-base h-14 border-gray-200 hover:bg-gray-50 px-10">
                            View Documentation
                        </Button>
                    </div>

                    {/* Trust Badges placeholder or secondary metrics */}
                    <div className="pt-10 border-t border-gray-100 grid grid-cols-3 gap-8">
                        {metrics.map((m, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-2xl font-bold text-gray-900 tracking-tight">{m.value}</div>
                                <div className="text-sm text-gray-500 font-medium flex items-center gap-1.5">
                                    <m.icon className="w-3.5 h-3.5 text-blue-500" />
                                    {m.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual Content: 3D Node Sphere */}
                <div className="relative h-[600px] lg:h-[700px] w-full">
                    <div className="w-full h-full">
                        <HeroVisual />
                    </div>

                    {/* Floating Data Metrics around the Sphere */}
                    <div className="absolute inset-0 pointer-events-none">
                        <FloatingMetric
                            className="top-[20%] left-[10%]"
                            label="Latency"
                            value="45ms"
                        />
                        <FloatingMetric
                            className="top-[15%] right-[15%]"
                            label="Uptime"
                            value="99.99%"
                        />
                        <FloatingMetric
                            className="bottom-[25%] right-[20%]"
                            label="Security"
                            value="SOC2 Type II"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

function FloatingMetric({ className, label, value }: { className: string, label: string, value: string }) {
    return (
        <div className={cn("absolute bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-4 shadow-xl z-20", className)}>
            <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">{label}</div>
            <div className="text-sm font-bold text-blue-600">{value}</div>
        </div>
    )
}

function cn(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

