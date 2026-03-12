import { motion } from "framer-motion"
import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { Users, Target, Rocket } from "lucide-react"

const timeline = [
    { year: "2024", event: "SamasthamConnect Founded in Hyderabad" },
    { year: "2024", event: "Series A funding; Launch of Clinical Assistant" },
    { year: "2025", event: "Expansion into Food Tech & Global Logistics" },
    { year: "2026", event: "Scaled to 50+ Enterprise Clients worldwide" },
]

const team = [
    { name: "Narsimha Desidi", role: "Founder", bio: "Visionary leader driving the strategic direction of SamasthamConnect's global infrastructure.", initials: "ND", color: "bg-blue-600" },
    { name: "Keerthan reddy", role: "CEO", bio: "Leading the executive team with a focus on enterprise growth and operational excellence.", initials: "KR", color: "bg-purple-600" },
    { name: "Kaushik Thallapally", role: "CTO", bio: "Architecting scaleable AI systems and overseeing the technical roadmap across all sectors.", initials: "KT", color: "bg-indigo-600" },
]

export default function About() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-6">
                    {/* Mission Section */}
                    <div className="max-w-4xl mb-32">
                        <h1 className="text-6xl font-black text-gray-900 mb-8">Engineering the Future of <span className="text-blue-600">Intelligence.</span></h1>
                        <p className="text-xl text-gray-500 leading-relaxed mb-12">
                            SamasthamConnect was founded on a single premise: that the world's most critical industries—Healthcare and Food—deserve more than generic AI. They deserve intelligent agents that understand the deep nuances of surgery, clinical documentation, and global supply chains.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-8 bg-blue-50 rounded-3xl">
                                <Users className="text-blue-600 mb-4 h-8 w-8" />
                                <h3 className="font-bold text-gray-900 mb-2">Our People</h3>
                                <p className="text-xs text-gray-500">A global team of PhDs and industry veterans.</p>
                            </div>
                            <div className="p-8 bg-purple-50 rounded-3xl">
                                <Target className="text-purple-600 mb-4 h-8 w-8" />
                                <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
                                <p className="text-xs text-gray-500">Quantifiable ROI for the enterprise.</p>
                            </div>
                            <div className="p-8 bg-indigo-50 rounded-3xl">
                                <Rocket className="text-indigo-600 mb-4 h-8 w-8" />
                                <h3 className="font-bold text-gray-900 mb-2">Our Scale</h3>
                                <p className="text-xs text-gray-500">Processing billions of data points daily.</p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="py-24 border-t border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Our Journey</h2>
                        <div className="max-w-5xl mx-auto relative px-6">
                            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-100 hidden md:block" />
                            <div className="space-y-12">
                                {timeline.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        className={`flex items-center gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col text-center md:text-left`}
                                    >
                                        <div className="flex-1">
                                            <div className="text-4xl font-black text-blue-600 mb-2">{item.year}</div>
                                            <div className="text-lg font-bold text-gray-900">{item.event}</div>
                                        </div>
                                        <div className="w-4 h-4 rounded-full bg-blue-600 relative z-10 ring-8 ring-white" />
                                        <div className="flex-1" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Leadership */}
                    <div className="py-24 border-t border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Leadership Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {team.map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group"
                                >
                                    <div className={`mb-6 relative overflow-hidden rounded-[40px] aspect-square ${member.color} flex items-center justify-center`}>
                                        <span className="text-6xl font-black text-white opacity-20 group-hover:opacity-40 transition-opacity">
                                            {member.initials}
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                                    <p className="text-blue-600 text-sm font-bold mb-4 uppercase tracking-wider">{member.role}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
