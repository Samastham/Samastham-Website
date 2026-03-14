import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { Hero } from "../components/sections/Hero"
import { Features } from "../components/sections/Features"
import { CTA } from "../components/sections/CTA"
import { ChatWidget } from "../components/shared/ChatWidget"

export default function Home() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <Features />
                <CTA />
            </main>
            <Footer />
            <ChatWidget />
        </div>
    )
}
