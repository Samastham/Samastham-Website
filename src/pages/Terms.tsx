import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"

export default function Terms() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                <div className="space-y-6 text-muted-foreground">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        Welcome to Samastham Connect. By accessing or using our website and services, you agree to be bound by these Terms of Service and our Privacy Policy.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Enterprise Agreement</h2>
                    <p>
                        Use of our platform for enterprise orchestration is subject to the Master Services Agreement (MSA) executed between your organization and Samastham Technologies.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Service Level Availability</h2>
                    <p>
                        We commit to the SLA defined in your specific service tier. Standard availability is 99.9% for core agent infrastructure.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Acceptable Use</h2>
                    <p>
                        You agree not to use the platform for any unlawful purpose or in any way that interrupts, damages, or impairs the service.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
