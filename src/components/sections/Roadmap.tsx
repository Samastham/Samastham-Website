import { motion } from "framer-motion"
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card"

const roadmap = [
    {
        phase: 'Now',
        title: 'Private pilots',
        detail: 'Private beta running with partner clinics and telehealth teams.',
    },
    {
        phase: 'Q1',
        title: 'Patient concierge launch',
        detail: 'Patient intake, routing, booking, and follow-ups live.',
    },
    {
        phase: 'Q2',
        title: 'Doctor-facing exports',
        detail: 'Exports ready for EHRs, e-prescription drafts, and easy sign-off.',
    },
    {
        phase: 'Q3',
        title: 'Food Connect Beta',
        detail: 'Initial rollout of smart kitchen management and delivery auditing.',
    },
];

export function Roadmap() {
    return (
        <section className="py-24 bg-secondary/20" id="roadmap">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Roadmap</span>
                    <h2 className="text-4xl font-bold mt-4 mb-2">Path to Production</h2>
                    <p className="text-muted-foreground">Strategic milestones for our healthcare and food technology platforms.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {roadmap.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full relative overflow-hidden border-t-4 border-t-primary">
                                <CardContent className="pt-6">
                                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">{item.phase}</div>
                                    <CardTitle className="mb-2 text-lg">{item.title}</CardTitle>
                                    <CardDescription>{item.detail}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
