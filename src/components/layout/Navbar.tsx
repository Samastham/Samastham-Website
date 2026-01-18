import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"
import { Link } from "react-router-dom"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Products", href: "/products" },
    { name: "Company", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div
                className={cn(
                    "container mx-auto px-6 transition-all duration-300",
                    scrolled ? "bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg py-3" : ""
                )}
            >
                <nav className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 flex items-center gap-3">
                        <img src="/logo.svg" alt="Samastham Logo" className="w-12 h-12 object-contain" />
                        <span>Samastham<span className="text-foreground">Connect</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a // Using 'a' tag for hash links to work smoothly on home page for now, or mix Link/a. Simple anchor is safest for same-page hash.
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" size="sm">Sign In</Button>
                        <Button className="rounded-full">Get Started</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl md:hidden flex flex-col space-y-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center justify-between text-lg font-medium p-2 hover:bg-white/50 rounded-xl transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </a>
                        ))}
                        <div className="pt-4 border-t border-gray-200/50 flex flex-col space-y-3">
                            <Button variant="outline" className="w-full justify-center">Sign In</Button>
                            <Button className="w-full justify-center">Get Started</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
