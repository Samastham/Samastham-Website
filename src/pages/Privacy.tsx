import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"

export default function Privacy() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="space-y-6 text-muted-foreground">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        At Samastham Connect, we take your privacy and data security seriously. This policy outlines how we collect, use, and protect your enterprise data.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Sovereignty</h2>
                    <p>
                        All customer data remains the property of the customer. We act as a data processor and process data solely in accordance with your instructions.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Security Measures</h2>
                    <p>
                        We employ SOC2 Type II certified controls, including end-to-end encryption for data in transit and at rest.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Compliance</h2>
                    <p>
                        Our infrastructure is fully compliant with HIPAA, GDPR, and localized data residency requirements where applicable.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
