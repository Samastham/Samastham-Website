import { motion } from "framer-motion"
import { Activity, Mail, Lock } from "lucide-react"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

export default function SignIn() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-white rounded-[48px] p-10 shadow-2xl shadow-gray-200/50 border border-gray-100"
            >
                <div className="text-center mb-10">
                    <Link to="/" className="inline-flex items-center gap-2 mb-8">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                            <Activity className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-black text-gray-900">Samastham<span className="text-blue-600">Connect</span></span>
                    </Link>
                    <h1 className="text-3xl font-black text-gray-900 mb-2">Welcome Back</h1>
                    <p className="text-gray-500 font-medium">Access your enterprise dashboard</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-900 px-1">Work Email</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                            <input required type="email" className="w-full bg-gray-50 border-gray-100 border rounded-2xl p-4 pl-12 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all" placeholder="name@company.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between px-1">
                            <label className="text-sm font-bold text-gray-900">Password</label>
                            <a href="#" className="text-xs font-bold text-blue-600 hover:underline">Forgot?</a>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                            <input required type="password" className="w-full bg-gray-50 border-gray-100 border rounded-2xl p-4 pl-12 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all" placeholder="••••••••" />
                        </div>
                    </div>
                    <Button className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-lg font-bold shadow-xl shadow-blue-600/20">
                        Sign In
                    </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-50 text-center">
                    <p className="text-gray-500 text-sm">
                        Don't have an account? <Link to="/contact" className="text-blue-600 font-bold hover:underline">Contact Sales</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
