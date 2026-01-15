import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Button } from "../ui/button"
import { Activity, Utensils, ArrowRight, ShieldCheck, HeartPulse, Clock } from "lucide-react"

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
        link: "/products#concierge"
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
        link: "/products#ops"
    }
]

export function Features() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-24 relative overflow-hidden" id="solutions">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold">Solutions for Real World</h2>
                        <p className="text-muted-foreground text-lg mt-4">
                            From saving lives to feeding families, our technology bridges the gap between efficiency and care.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-zinc-900 group overflow-hidden relative">
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center mb-4 ${feature.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 relative z-10">
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                    <div className="flex flex-wrap gap-2">
                                        {feature.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-secondary/50 text-secondary-foreground border border-black/5 dark:border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Button variant="link" className="p-0 h-auto group-hover:translate-x-1 transition-transform">
                                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
