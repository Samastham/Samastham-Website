import { motion } from "framer-motion"
import { Terminal, Copy, Play } from "lucide-react"
import { Button } from "../ui/button"

const codeSnippet = `import samastham_connect as sc

# Initialize the enterprise agent
agent = sc.Agent(
    api_key="sk_live_...",
    industry="healthcare",
    security_mode="hipaa_hardened"
)

# Launch autonomous SOAP note workflow
agent.run_workflow(
    task="draft_soap_note",
    context=patient_vitals,
    callback_url="https://api.health.org/webhook"
)

print(f"Agent {agent.id} is now active.")`

export function DeveloperHub() {
    return (
        <section className="py-24 bg-gray-950 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold">
                            <Terminal className="w-4 h-4" /> Developer First Architecture
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Build with the <span className="text-blue-500">Samastham SDK.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Integrate intelligent agents into your existing tech stack with just a few lines of code. Our platform is built for speed, security, and developer happiness.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 h-12 px-6">Explore Documentation</Button>
                            <Button variant="ghost" className="rounded-full text-white border border-white/10 hover:bg-white/5 h-12 px-6">Get API Key</Button>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[32px] blur-2xl" />
                        <div className="relative bg-slate-900 border border-white/10 rounded-[24px] overflow-hidden shadow-2xl">
                            {/* Terminal Header */}
                            <div className="bg-slate-800/50 px-6 py-4 border-b border-white/5 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                </div>
                                <div className="text-xs text-gray-500 font-mono">init_agent.py</div>
                                <button className="text-gray-500 hover:text-white transition-colors">
                                    <Copy className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Code Body */}
                            <div className="p-8 font-mono text-sm leading-relaxed">
                                <pre className="text-blue-200">
                                    {codeSnippet}
                                </pre>
                            </div>

                            {/* Terminal Footer / CTA */}
                            <div className="px-8 py-6 bg-slate-800/30 border-t border-white/5 flex items-center justify-between">
                                <div className="text-xs text-gray-500 italic">Ready to see it in action?</div>
                                <Button size="sm" className="rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2 px-4">
                                    <Play className="w-3 h-3 fill-current" /> Run in Sandbox
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
