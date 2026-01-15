import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { CTA } from "../components/sections/CTA"

export default function Contact() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-muted-foreground">We'd love to hear from you. Get in touch with our team.</p>
                </div>
                <CTA />
            </main>
            <Footer />
        </div>
    )
}
