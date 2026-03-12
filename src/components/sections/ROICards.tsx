import { motion } from "framer-motion"
import { BarChart, Bar, ResponsiveContainer, Cell, XAxis, YAxis, Tooltip } from 'recharts'
import { TrendingUp, Clock, ShieldCheck } from "lucide-react"

const roiData = [
    {
        title: "Reduce Admin Time",
        value: "60%",
        subtext: "Automated SOAP note generation and coding.",
        icon: Clock,
        chartData: [
            { name: 'Manual', val: 100 },
            { name: 'Samastham', val: 40 },
        ],
        color: "#3b82f6"
    },
    {
        title: "Improve Menu Margin",
        value: "15%",
        subtext: "Dynamic pricing and waste optimization.",
        icon: TrendingUp,
        chartData: [
            { name: 'Before', val: 85 },
            { name: 'After', val: 100 },
        ],
        color: "#8b5cf6"
    },
    {
        title: "Security & Compliance",
        value: "100%",
        subtext: "HIPAA, SOC2, and GDPR baked-in.",
        icon: ShieldCheck,
        chartData: [
            { name: 'Risk', val: 30 },
            { name: 'Verified', val: 100 },
        ],
        color: "#6366f1"
    }
]

export function ROICards() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Quantified ROI for the Modern Enterprise</h2>
                    <p className="text-lg text-gray-500">
                        We don't just provide AI; we deliver measurable business outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {roiData.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col hover:shadow-2xl hover:shadow-gray-200/50 transition-all group"
                        >
                            <div className="flex items-start justify-between mb-12">
                                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="text-4xl font-black text-gray-900">{item.value}</div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">{item.subtext}</p>

                            <div className="mt-auto h-32 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={item.chartData}>
                                        <XAxis dataKey="name" hide />
                                        <YAxis hide />
                                        <Tooltip
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                            cursor={{ fill: 'transparent' }}
                                        />
                                        <Bar dataKey="val" radius={[6, 6, 0, 0]}>
                                            {item.chartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index === 1 ? item.color : '#e5e7eb'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
