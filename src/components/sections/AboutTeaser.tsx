import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export function AboutTeaser() {
    return (
        <section className="py-24 relative overflow-hidden" id="about">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-medium text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full">Who We Are</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 leading-tight">
                            Connecting the Gap Between <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Vision & Reality</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Samastham Connect is a technology powerhouse dedicated to solving complex industry challenges.
                            We combine deep domain expertise in healthcare and food sectors with world-class engineering to build
                            solutions that matter.
                        </p>
                        <div className="flex gap-4">
                            <div className="border-l-4 border-primary pl-4">
                                <div className="text-3xl font-bold">500+</div>
                                <div className="text-sm text-muted-foreground">Clinics Partnered</div>
                            </div>
                            <div className="border-l-4 border-purple-500 pl-4">
                                <div className="text-3xl font-bold">50+</div>
                                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                            </div>
                        </div>
                        <Button variant="link" className="mt-8 pl-0 text-lg">
                            Read our full story <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-800 to-black border border-white/10 relative overflow-hidden flex items-center justify-center group">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="relative z-10 text-center p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                                <p className="text-gray-300">To empower industries with intelligent, invisible technology.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
