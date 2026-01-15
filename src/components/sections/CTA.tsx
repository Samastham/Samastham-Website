import { Button } from "../ui/button"

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden" id="contact">
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">Ready to transform your workflow?</h2>
                        <p className="text-xl text-muted-foreground">
                            Join the waitlist for Samastham Connect and be the first to experience the future of intelligent agents.
                        </p>
                        <ul className="space-y-3">
                            {['Priority access', 'Exclusive demos', 'Onboarding support'].map((item) => (
                                <li key={item} className="flex items-center text-muted-foreground">
                                    <span className="w-5 h-5 mr-3 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs">✔</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-20 blur-xl" />
                        <form className="relative bg-card border rounded-2xl p-8 shadow-xl space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Name</label>
                                    <input className="w-full px-4 py-2 rounded-lg bg-background border ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input className="w-full px-4 py-2 rounded-lg bg-background border ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="john@example.com" type="email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Role</label>
                                <select className="w-full px-4 py-2 rounded-lg bg-background border ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
                                    <option>Doctor / Clinician</option>
                                    <option>Operations / Admin</option>
                                    <option>Product / Tech</option>
                                    <option>Restaurant Owner</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea className="w-full px-4 py-2 rounded-lg bg-background border ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring" rows={3} placeholder="Tell us about your needs..." />
                            </div>
                            <Button className="w-full h-12 text-base">Request Walkthrough</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
