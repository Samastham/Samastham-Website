import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"

export default function Products() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-24">
                <section className="container mx-auto px-6 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl font-bold mb-6">Our Products</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Advanced solutions tailored for critical industries. We bring AI agents to healthcare and food management.
                        </p>
                    </motion.div>

                    {/* Healthcare Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24" id="healthcare">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 font-medium text-sm">Healthcare</div>
                            <h2 className="text-3xl font-bold">Healthcare App</h2>
                            <p className="text-muted-foreground text-lg">
                                Our clinical agent listens during clinic visits, drafts notes, suggests billing codes, and prepares orders for review. It saves doctors 8-12 minutes per visit.
                            </p>
                            <ul className="space-y-2">
                                {['Ambient Validation', 'EHR Integration', 'Automated Coding'].map(item => (
                                    <li key={item} className="flex items-center text-sm font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button className="rounded-full">Visit Website</Button>
                        </div>
                        <div className="h-80 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl border border-white/10 flex items-center justify-center">
                            {/* Placeholder for Product UI */}
                            <span className="text-blue-500/50 text-6xl font-black">HEALTH</span>
                        </div>
                    </div>

                    {/* Food Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center" id="food">
                        <div className="h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-white/10 flex items-center justify-center order-last md:order-first">
                            {/* Placeholder for Product UI */}
                            <span className="text-orange-500/50 text-6xl font-black">FOOD</span>
                        </div>
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 font-medium text-sm">Food Tech</div>
                            <h2 className="text-3xl font-bold">Food Connect</h2>
                            <p className="text-muted-foreground text-lg">
                                A comprehensive platform for modern kitchens. Track inventory in real-time, manage menus across platforms, and ensure quality control with AI vision.
                            </p>
                            <ul className="space-y-2">
                                {['Inventory Management', 'Multi-platform Sync', 'Waste Reduction'].map(item => (
                                    <li key={item} className="flex items-center text-sm font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button className="rounded-full">Learn More</Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
