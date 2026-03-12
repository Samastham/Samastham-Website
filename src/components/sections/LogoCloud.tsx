import { motion } from "framer-motion"

const logos = [
    "Enterprise A", "Global Health", "Eco Systems", "SafeData", "Quantum Core", "BioMed", "FastFood Inc", "TechMatrix"
]

export function LogoCloud() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Trusted by innovative teams worldwide
                </p>
            </div>

            <div className="relative flex overflow-hidden group">
                <div className="flex animation-scroll group-hover:pause-scroll whitespace-nowrap">
                    {[...logos, ...logos].map((logo, i) => (
                        <div key={i} className="mx-12 flex items-center justify-center">
                            <span className="text-3xl font-black text-gray-200 hover:text-blue-500 transition-colors cursor-default">
                                {logo}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .animation-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 30s linear infinite;
                }
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .pause-scroll {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}
