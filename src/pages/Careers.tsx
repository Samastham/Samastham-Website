import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { Button } from "../components/ui/button"
import { Sparkles, Users, Rocket, Globe } from "lucide-react"

export default function Careers() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-40 pb-20 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50" />
                        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-50" />
                    </div>

                    <div className="container relative z-10 mx-auto px-6 text-center">
                        <div
                            className="max-w-4xl mx-auto"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-tight mb-8">
                                THE FUTURE OF INTELLIGENCE
                            </span>
                            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-10">
                                Build the <span className="text-blue-600">
                                    Unimaginable.
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12">
                                We are engineering the infrastructure for universal AI agents. We don't just solve problems; we redefine what's possible.
                            </p>
                            
                            <div className="p-8 rounded-[40px] bg-gray-50 border border-gray-100 max-w-xl mx-auto text-center">
                                <div className="text-lg font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                                    <Sparkles className="w-5 h-5 text-blue-600" />
                                    Hiring cycle starting soon
                                </div>
                                <p className="text-gray-500 mb-6">We're assembling a team of visionaries and pioneers. Be the first to know when we open our doors.</p>
                                <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 font-bold shadow-xl shadow-blue-600/20">
                                    Join the Waitlist
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision/Culture Grid */}
                <section className="py-24 bg-white border-t border-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            <CultureCard 
                                icon={Users} 
                                title="Radical Autonomy" 
                                description="We empower exceptional individuals to lead. No micromanagement, just pure engineering excellence."
                            />
                            <CultureCard 
                                icon={Rocket} 
                                title="Velocity First" 
                                description="We move fast because building the future can't wait. We ship iteratively and learn constantly."
                            />
                            <CultureCard 
                                icon={Globe} 
                                title="Global Impact" 
                                description="Your work will power the next generation of healthcare, food tech, and beyond across the globe."
                            />
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                    <div className="container relative z-10 mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8">
                                "The only way to predict the future is to <span className="text-blue-500">invent it.</span>"
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed mb-10">
                                At Samastham, we believe that AI is the most significant technology of our time. Our mission is to ensure that this intelligence is accessible, high-performance, and fundamentally positive for humanity.
                            </p>
                            <div className="h-px w-24 bg-blue-600" />
                            <div className="mt-8">
                                <span className="text-lg font-bold text-white">Our Architecture Team</span>
                                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Hyderabad, India</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

function CultureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div
            className="p-10 rounded-[40px] bg-white border border-gray-100 hover:shadow-2xl hover:shadow-blue-600/5 transition-all group"
        >
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-500 leading-relaxed font-medium">
                {description}
            </p>
        </div>
    )
}
