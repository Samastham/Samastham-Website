import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"

export default function About() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-24">
                <section className="container mx-auto px-6 py-12">
                    <h1 className="text-4xl font-bold mb-8 text-center">About Samastham Connect</h1>
                    <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
                        <p>
                            Samastham Connect is a technology company dedicated to solving the most critical challenges in healthcare and food service industries.
                        </p>
                        <p>
                            Founded in 2024, our mission is to build intelligent agents that empower professionals—doctors, nurses, chefs, and restaurant owners—to focus on what they do best: caring for people and creating great experiences.
                        </p>
                        <p>
                            We believe that technology should be an invisible enabler. Our AI agents work in the background, handling the repetitive, administrative, and complex tasks that slow down today's professionals.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
