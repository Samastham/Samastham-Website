import { useState } from "react"
import { MessageSquare, X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../ui/button"

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-[60]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                            <h3 className="font-bold text-lg">Chat with Sales</h3>
                            <p className="text-blue-100 text-xs mt-1">Our team typically responds in under 5 minutes.</p>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-grow p-6 bg-gray-50 min-h-[300px] flex flex-col justify-end">
                            <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm text-sm text-gray-700 max-w-[80%] border border-gray-100">
                                Hi! How can we help you build your next enterprise AI agent today?
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-100">
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    className="bg-transparent border-none focus:outline-none text-sm flex-grow py-1"
                                />
                                <button className="text-blue-600 hover:text-blue-700">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/20 flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </button>
        </div>
    )
}
