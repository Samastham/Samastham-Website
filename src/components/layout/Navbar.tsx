import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Activity } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"
import { Link } from "react-router-dom"
import { BrandAyura } from "../ui/BrandAyura"

const products = [
    { name: "AYURA (Healthcare AI)", href: "/healthcare", description: "Seamless instant medical care and provider tools." },
    { name: "Food Tech AI", href: "/foodtech", description: "Optimization for the food industry." },
]

const solutions = [
    { name: "Enterprise Flow", href: "/solutions" },
    { name: "Custom Agents", href: "/solutions" },
]

const developerLinks = [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Github", href: "https://github.com/samastham" },
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState<string | null>(null)

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
                    scrolled ? "bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-lg py-2" : "bg-transparent"
                )}
            >
                <nav className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Activity className="text-white w-6 h-6" />
                        </div>
                        <span className="text-gray-900">Samastham<span className="text-blue-600">Connect</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-1">
                        <Link to="/" className="px-5 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">Home</Link>

                        {/* Products */}
                        <div className="relative group" onMouseEnter={() => setActiveMenu('products')} onMouseLeave={() => setActiveMenu(null)}>
                            <button className="px-5 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 flex items-center gap-1 transition-colors">
                                Products <ChevronRight className={cn("w-4 h-4 transition-transform duration-300", activeMenu === 'products' && "rotate-90")} />
                            </button>
                            <AnimatePresence>
                                {activeMenu === 'products' && (
                                    <>
                                        <div className="absolute top-full left-0 w-full h-4 bg-transparent" />
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full left-0 w-64 bg-white border border-gray-100 rounded-3xl shadow-2xl p-4 mt-2"
                                        >
                                            {products.map((item) => (
                                                <Link key={item.name} to={item.href} className="block p-4 hover:bg-blue-50/50 rounded-2xl transition-all group/item">
                                                    <div className="font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors uppercase tracking-tight text-xs flex items-center gap-2">
                                                        {item.name.includes("AYURA") ? (
                                                            <>
                                                                <BrandAyura className="text-sm" />
                                                                <span className="text-gray-400 font-medium text-[10px] uppercase tracking-widest ml-1">(Healthcare AI)</span>
                                                            </>
                                                        ) : item.name}
                                                    </div>
                                                    <div className="text-[11px] text-gray-400 mt-1 leading-tight">{item.description}</div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Solutions */}
                        <div className="relative group" onMouseEnter={() => setActiveMenu('solutions')} onMouseLeave={() => setActiveMenu(null)}>
                            <button className="px-5 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 flex items-center gap-1 transition-colors">
                                Solutions <ChevronRight className={cn("w-4 h-4 transition-transform duration-300", activeMenu === 'solutions' && "rotate-90")} />
                            </button>
                            <AnimatePresence>
                                {activeMenu === 'solutions' && (
                                    <>
                                        <div className="absolute top-full left-0 w-full h-4 bg-transparent" />
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full left-0 w-64 bg-white border border-gray-100 rounded-3xl shadow-2xl p-4 mt-2"
                                        >
                                            {solutions.map((item) => (
                                                <Link key={item.name} to={item.href} className="block p-4 hover:bg-purple-50/50 rounded-2xl transition-all group/item">
                                                    <div className="font-bold text-gray-900 group-hover/item:text-purple-600 transition-colors uppercase tracking-tight text-xs">{item.name}</div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Developer Hub */}
                        <div className="relative group" onMouseEnter={() => setActiveMenu('dev')} onMouseLeave={() => setActiveMenu(null)}>
                            <button className="px-5 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 flex items-center gap-1 transition-colors">
                                Developers <ChevronRight className={cn("w-4 h-4 transition-transform duration-300", activeMenu === 'dev' && "rotate-90")} />
                            </button>
                            <AnimatePresence>
                                {activeMenu === 'dev' && (
                                    <>
                                        <div className="absolute top-full left-0 w-full h-4 bg-transparent" />
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full left-0 w-56 bg-white border border-gray-100 rounded-3xl shadow-2xl p-4 mt-2 z-[100]"
                                        >
                                            <Link to="/" className="block p-4 hover:bg-gray-50 rounded-2xl transition-all group/item">
                                                <div className="font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors uppercase tracking-tight text-xs">Documentation</div>
                                            </Link>
                                            <Link to="/" className="block p-4 hover:bg-gray-50 rounded-2xl transition-all group/item">
                                                <div className="font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors uppercase tracking-tight text-xs">API Reference</div>
                                            </Link>
                                            <a href="https://github.com/samastham" target="_blank" rel="noopener noreferrer" className="block p-4 hover:bg-gray-50 rounded-2xl transition-all group/item">
                                                <div className="font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors uppercase tracking-tight text-xs">Github</div>
                                            </a>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/engagement" className="px-5 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">How it Works</Link>

                        <Link to="/about" className="px-5 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">Company</Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/signin" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">Sign In</Link>
                        <Link to="/contact">
                            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 font-bold shadow-lg shadow-blue-600/20">Get Started</Button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 text-gray-900 bg-gray-50 rounded-xl"
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
                        className="absolute top-24 left-4 right-4 bg-white border border-gray-100 rounded-[40px] p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] lg:hidden flex flex-col space-y-6"
                    >
                        <div className="flex flex-col space-y-4">
                            <Link to="/" className="text-xl font-black text-gray-900" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                            <Link to="/healthcare" className="text-xl font-black text-gray-900" onClick={() => setMobileMenuOpen(false)}>Products</Link>
                            <Link to="/solutions" className="text-xl font-black text-gray-900" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
                            <div className="space-y-4">
                                <div className="text-xl font-black text-gray-900 flex items-center justify-between">
                                    Developers
                                </div>
                                <div className="pl-4 flex flex-col space-y-3 border-l-2 border-gray-100">
                                    <Link to="/" className="text-base font-bold text-gray-500" onClick={() => setMobileMenuOpen(false)}>Documentation</Link>
                                    <Link to="/" className="text-base font-bold text-gray-500" onClick={() => setMobileMenuOpen(false)}>API Reference</Link>
                                    <a href="https://github.com/samastham" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-gray-500" onClick={() => setMobileMenuOpen(false)}>Github</a>
                                </div>
                            </div>
                            <Link to="/engagement" className="text-xl font-black text-gray-900" onClick={() => setMobileMenuOpen(false)}>How it Works</Link>
                            <Link to="/about" className="text-xl font-black text-gray-900" onClick={() => setMobileMenuOpen(false)}>Company</Link>
                        </div>
                        <div className="pt-6 border-t border-gray-50 flex flex-col space-y-3">
                            <Link to="/signin" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="outline" className="w-full h-14 justify-center rounded-2xl font-bold">Sign In</Button>
                            </Link>
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full h-14 justify-center rounded-2xl bg-blue-600 text-white font-bold">Get Started</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
