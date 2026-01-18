import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Code2, BrainCircuit, Globe, LineChart, ShieldCheck, Smartphone } from "lucide-react"

const services = [
    {
        title: "Enterprise Architecture",
        description: "Scalable, distributed systems designed for mission-critical, high-throughput enterprise operations.",
        icon: Smartphone,
        color: "text-blue-500"
    },
    {
        title: "Intelligent Automation",
        description: "Deploy self-governing AI agents that handle complex decision-making workflows in real-time.",
        icon: BrainCircuit,
        color: "text-purple-500"
    },
    {
        title: "Legacy Modernization",
        description: "Transform monolithic legacy systems into agile, microservices-based cloud architectures.",
        icon: Globe,
        color: "text-teal-500"
    },
    {
        title: "Predictive Intelligence",
        description: "Turn raw operational data into foresight with advanced predictive modeling and visualization.",
        icon: LineChart,
        color: "text-orange-500"
    },
    {
        title: "Compliance & Security",
        description: "SOC2 and HIPAA-compliant infrastructures with bank-grade encryption and audit trails.",
        icon: ShieldCheck,
        color: "text-red-500"
    },
    {
        title: "Product Engineering",
        description: "Full-cycle product development from rapid prototyping to production scaling.",
        icon: Code2,
        color: "text-indigo-500"
    }
]

export function Services() {
    return (
        <section className="py-24 bg-secondary/10" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Our Capabilities</span>
                    <h2 className="text-4xl font-bold mt-4 mb-4">Engineering Digital Excellence</h2>
                    <p className="text-muted-foreground text-lg">
                        We don't just build products; we provide the technology backbone for modern enterprises.
                        From custom software to cutting-edge AI, we deliver solutions that drive growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg transition-all duration-300 border-white/5 bg-white/5 backdrop-blur-sm">
                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center mb-2 ${service.color}`}>
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-muted-foreground/80">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
