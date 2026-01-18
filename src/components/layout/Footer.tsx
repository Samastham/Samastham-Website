import { Github, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "../ui/button"

export function Footer() {
    return (
        <footer className="bg-secondary/30 pt-20 pb-10 border-t border-white/10 mt-auto">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                            Samastham
                        </h3>
                        <p className="text-muted-foreground">
                            Global infrastructure for intelligent enterprise applications and supply chain optimization. Enterprise-grade security, infinite scalability.
                        </p>
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="icon" className="hover:text-primary rounded-full">
                                <Twitter className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-primary rounded-full">
                                <Github className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-primary rounded-full">
                                <Linkedin className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-primary rounded-full">
                                <Instagram className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Company</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="/careers" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="/newsroom" className="hover:text-primary transition-colors">Newsroom</a></li>
                            <li><a href="/security" className="hover:text-primary transition-colors">Security & Compliance</a></li>
                            <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Products</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><a href="/products#healthcare" className="hover:text-primary transition-colors">Healthcare Agent</a></li>
                            <li><a href="/products#food" className="hover:text-primary transition-colors">Food Connect</a></li>
                            <li><a href="/roadmap" className="hover:text-primary transition-colors">Roadmap</a></li>
                            <li><a href="/api" className="hover:text-primary transition-colors">API Access</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Stay Updated</h4>
                        <p className="text-sm text-muted-foreground">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <div className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-background rounded-full px-4 py-2 text-sm border focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <Button className="rounded-full">Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200/10 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Samastham Connect. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="/privacy" className="hover:text-primary">Privacy Policy</a>
                        <a href="/terms" className="hover:text-primary">Terms of Service</a>
                        <a href="/cookies" className="hover:text-primary">Cookie Settings</a>
                        <a href="/aup" className="hover:text-primary">Acceptable Use Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
