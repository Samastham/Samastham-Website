import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { Hero } from "../components/sections/Hero"
import { AboutTeaser } from "../components/sections/AboutTeaser"
// import { Services } from "../components/sections/Services"
import { Features } from "../components/sections/Features" // Renamed visually to Products Showcase in flow
import { Roadmap } from "../components/sections/Roadmap"
import { CTA } from "../components/sections/CTA"

import { TrustedBy } from "../components/sections/TrustedBy"

export default function Home() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <TrustedBy />
                <AboutTeaser />
                {/* <Services /> Removed as per request */}
                <Features /> {/* This serves as the Product Showcase */}
                {/* <Roadmap /> Optional: Keep roadmap or remove for cleaner corp feel. Keeping for now as it shows progress. */}
                <CTA />
            </main>
            <Footer />
        </div>
    )
}
