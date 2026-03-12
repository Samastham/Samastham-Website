import { Link } from "react-router-dom"
import { Github, Twitter, Linkedin, Activity } from "lucide-react"
import { Button } from "../ui/button"

export function Footer() {
    return (
        <footer className="bg-gray-50 pt-24 pb-12 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Activity className="text-white w-5 h-5" />
                            </div>
                            <span className="text-gray-900">Samastham<span className="text-blue-600">Connect</span></span>
                        </Link>
                        <p className="text-gray-500 leading-relaxed max-w-xs">
                            Global infrastructure for intelligent enterprise AI agents. HQ in Hyderabad, India.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/samastham" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Products</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li><Link to="/healthcare" className="hover:text-blue-600 transition-colors">Healthcare AI</Link></li>
                            <li><Link to="/foodtech" className="hover:text-blue-600 transition-colors">Food Tech AI</Link></li>
                            <li><Link to="/solutions" className="hover:text-blue-600 transition-colors">Solutions</Link></li>
                            <li><Link to="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Developers</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li><a href="/docs" className="hover:text-blue-600 transition-colors">API Documentation</a></li>
                            <li><a href="/status" className="hover:text-blue-600 transition-colors">System Status</a></li>
                            <li><a href="https://github.com/samastham" className="hover:text-blue-600 transition-colors">Open Source</a></li>
                            <li><a href="/security" className="hover:text-blue-600 transition-colors">Security Portal</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Legal & Compliance</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                            <li><a href="/security#soc2" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span> SOC2 Type II
                            </a></li>
                            <li><a href="/security#hipaa" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span> HIPAA Compliant
                            </a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <p>&copy; {new Date().getFullYear()} Samastham Connect Inc. Built with intelligence.</p>
                    <div className="flex space-x-8">
                        <Link to="/about" className="hover:text-blue-600">Company</Link>
                        <Link to="/careers" className="hover:text-blue-600">Careers</Link>
                        <Link to="/security" className="hover:text-blue-600">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
