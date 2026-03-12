import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote: "SamasthamConnect has fundamentally changed how we handle documentation. Our surgeons save hours every day, allowing them to focus entirely on patient care.",
        author: "Dr. Anya Sharma",
        title: "Chief of Surgery, Metro Health",
        image: "https://images.unsplash.com/photo-1559839734-2b71f153678e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        quote: "The food tech agents have optimized our supply chain in ways we didn't think possible. We've seen a 15% margin improvement in just six months.",
        author: "Marcus Chen",
        title: "COO, FreshRoute Logistics",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        quote: "Security was our biggest concern with AI. Samastham's enterprise-grade encryption and compliance made it the only choice for our global deployment.",
        author: "Sarah Jenkins",
        title: "CTO, SecureLink Systems",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    }
]

export function Testimonials() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Join the hundreds of enterprises scaling their operations with SamasthamConnect.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center space-y-8"
                        >
                            <div className="relative">
                                <img
                                    src={t.image}
                                    alt={t.author}
                                    className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white shadow-xl"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                                    <Quote className="w-4 h-4 fill-current" />
                                </div>
                            </div>

                            <p className="text-gray-600 italic leading-relaxed text-lg">
                                "{t.quote}"
                            </p>

                            <div>
                                <h4 className="font-bold text-gray-900">{t.author}</h4>
                                <p className="text-sm text-blue-600 font-medium">{t.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
