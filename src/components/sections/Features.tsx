import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Button } from "../ui/button"
import { Activity, Utensils, ArrowRight, ShieldCheck, HeartPulse, Clock } from "lucide-react"
import { BrandAyura } from "../ui/BrandAyura"

const features = [
    {
        title: "Healthcare Agent",
        description: "AI-powered clinical assistant that drafts notes, codes, and orders.",
        icon: HeartPulse,
        color: "text-blue-500",
        gradient: "from-blue-500/20 to-teal-500/20",
        tags: ["Clinical Notes", "HIPAA Compliant", "EHR Ready"],
        link: "/products#healthcare"
    },
    {
        title: "Patient Concierge",
        description: "24/7 patient support for scheduling, triage, and follow-ups.",
        icon: Activity,
        color: "text-teal-500",
        gradient: "from-teal-500/20 to-green-500/20",
        tags: ["24/7 Support", "Triage", "Scheduling"],
        link: "/products#healthcare"
    },
    {
        title: "Food Connect",
        description: "Smart food delivery and management platform for modern kitchens.",
        icon: Utensils,
        color: "text-orange-500",
        gradient: "from-orange-500/20 to-red-500/20",
        tags: ["Real-time Tracking", "Menu Mgmt", "Analytics"],
        link: "/products#food"
    },
    {
        title: "Ops & Compliance",
        description: "Automated compliance checks and operational workflows.",
        icon: ShieldCheck,
        color: "text-purple-500",
        gradient: "from-purple-500/20 to-indigo-500/20",
        tags: ["Audit Logs", "Regulations", "Security"],
        link: "/products#food"
    }
]

export function Features() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#050505]" id="solutions">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            Solutions for Real World
                        </h2>
                        <p className="text-gray-400 text-xl font-medium mt-6">
                            From saving lives to feeding families, our technology bridges the gap between efficiency and care.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="relative group"
                        >
                            {/* Glass Card Container */}
                            <div className="h-full relative overflow-hidden rounded-[40px] bg-[#0a0a0a]/40 backdrop-blur-3xl border border-white/10 p-10 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:-translate-y-2 group">

                                {/* Interactive Gradient Glow */}
                                <div className={`absolute -inset-24 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-700`} />

                                <div className="relative z-10 space-y-8">
                                    {/* Glass Icon Container */}
                                    <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center ${feature.color} shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-700`}>
                                        <feature.icon className="w-8 h-8" />
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all flex items-center gap-2">
                                            {feature.title === "Healthcare Agent" ? (
                                                <BrandAyura type="full" size="h-6" />
                                            ) : feature.title}
                                        </h3>
                                        <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                            {feature.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {feature.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/10 group-hover:text-gray-300 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <Button variant="link" className="p-0 h-auto text-blue-400 font-black tracking-wide group-hover:text-blue-300 group-hover:translate-x-1 transition-all">
                                            Learn more <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                        <div className="w-3 h-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/50 transition-colors animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
