import { motion } from "framer-motion"
import { ShieldCheck, Lock, Eye, CheckCircle } from "lucide-react"

const compliance = [
    { title: "SOC2 Type II", desc: "Enterprise-grade security controls verified annually." },
    { title: "HIPAA Compliant", desc: "Rigorous standards for protected health information." },
    { title: "GDPR Ready", desc: "Full control over data residency and user privacy." },
]

export function Security() {
    return (
        <section className="py-24 bg-white border-y border-gray-100">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Security is Not an Afterthought</h2>
                    <p className="text-lg text-gray-500">
                        We build for the most regulated industries on Earth. Your data is encrypted in transit and at rest, with full auditability and zero-trust architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    {compliance.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-[32px] p-10 border border-gray-100 text-center group hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>

                            <div className="mt-8 flex justify-center">
                                <div className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                                    Verified
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 pt-12 border-t border-gray-100 opacity-30 grayscale saturate-0">
                    {/* Security Badge SVGs would go here, using icons as placeholders */}
                    <div className="flex items-center gap-2">
                        <Lock className="w-6 h-6" />
                        <span className="font-bold">AES-256 Encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Eye className="w-6 h-6" />
                        <span className="font-bold">24/7 Monitoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-6 h-6" />
                        <span className="font-bold">99.99% Uptime SLA</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
