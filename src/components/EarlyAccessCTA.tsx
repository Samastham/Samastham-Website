import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const EarlyAccessCTA = () => {
    return (
        <section className="py-24 bg-primary-600 relative overflow-hidden mt-10">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-800 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-primary-500/30 text-white px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-primary-400/30">
                    <Sparkles className="w-4 h-4 text-primary-200" />
                    <span className="text-sm font-bold tracking-wide uppercase">Ayura App Launching Soon</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
                    Are you interested in early access?
                </h2>
                
                <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
                    Be the first to experience the future of seamless healthcare. Register your interest and get invited to our exclusive rollout.
                </p>
                
                <a 
                    href="https://docs.google.com/forms/d/e/something/viewform?usp=sf_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-black/10 group text-lg"
                >
                    Register Your Interest
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </section>
    );
};

export default EarlyAccessCTA;
