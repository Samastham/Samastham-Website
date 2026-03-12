import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { Hero } from "../components/sections/Hero"
import { LogoCloud } from "../components/sections/LogoCloud"
import { HowItWorks } from "../components/sections/HowItWorks"
import { ROICards } from "../components/sections/ROICards"
import { Features } from "../components/sections/Features"
import { DeveloperHub } from "../components/sections/DeveloperHub"
import { Security } from "../components/sections/Security"
import { Testimonials } from "../components/sections/Testimonials"
import { CTA } from "../components/sections/CTA"
import { ChatWidget } from "../components/shared/ChatWidget"

export default function Home() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <LogoCloud />
                <HowItWorks />
                <ROICards />
                <Features />
                <DeveloperHub />
                <Security />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
            <ChatWidget />
        </div>
    )
}
