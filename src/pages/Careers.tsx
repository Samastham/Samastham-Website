import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { Button } from "../components/ui/button"

const jobs = [
    { title: "Senior AI Engineer", department: "Engineering", location: "San Francisco, CA / Remote", type: "Full-time" },
    { title: "Product Manager, Healthcare", department: "Product", location: "Remote", type: "Full-time" },
    { title: "Customer Success Manager", department: "Sales", location: "New York, NY", type: "Full-time" },
    { title: "Frontend Developer", department: "Engineering", location: "Remote", type: "Contract" },
]

export default function Careers() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-24">
                <section className="container mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the Revolution</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        We're building the future of intelligent enterprise. Come help us solve the world's most complex problems.
                    </p>
                </section>

                <section className="container mx-auto px-6 pb-24">
                    <div className="max-w-4xl mx-auto space-y-4">
                        {jobs.map((job) => (
                            <div key={job.title} className="p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex flex-col md:flex-row justify-between items-center gap-4 group">
                                <div>
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{job.title}</h3>
                                    <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                                        <span>{job.department}</span>
                                        <span>•</span>
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span>{job.type}</span>
                                    </div>
                                </div>
                                <Button variant="outline" className="rounded-full">Apply Now</Button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
