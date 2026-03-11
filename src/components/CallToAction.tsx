import React from 'react';
import Button from './ui/Button';

const CallToAction = () => {
    return (
        <section className="py-20 bg-primary-600 overflow-hidden relative">
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-50"></div>
                {/* Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%">
                    <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" className="text-white" fill="currentColor" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                    Empowering Health. Everywhere.
                </h2>
                <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Join a growing network of patients utilizing next-generation technology for better health outcomes.
                    Precise, accessible, and secure.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button variant="white" size="lg" className="w-full sm:w-auto">
                        Download Now
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary-200 text-white hover:bg-primary-500 hover:text-white hover:border-transparent w-full sm:w-auto">
                        Chat with AI
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
