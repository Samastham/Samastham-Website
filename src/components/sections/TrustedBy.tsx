import { motion } from "framer-motion"

const companies = [
    "TechCorp", "MediSystems", "GlobalHealth", "FutureScale", "DataFlow", "BioSync"
]

export function TrustedBy() {
    return (
        <section className="py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm font-medium text-muted-foreground mb-6">TRUSTED BY INNOVATIVE TEAMS WORLDWIDE</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 hover:from-blue-400 hover:to-indigo-400 cursor-default"
                        >
                            {company}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
