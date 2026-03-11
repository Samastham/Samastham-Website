import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Late-night medical concerns were always stressful until I started using Ayura. The AI assistance provided immediate, accurate guidance in Hindi.",
        author: "Ramesh Gupta",
        role: "Farmer, Madhya Pradesh",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        quote: "The interface is incredibly intuitive. Scheduling appointments in Tamil is effortless, making healthcare accessible for my elderly parents.",
        author: "Lakshmi Iyer",
        role: "Homemaker, Chennai",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        quote: "The intelligent health assistant feature clarifies complex medical terms instantly. It's like having a knowledgeable guide available 24/7.",
        author: "Arjun Reddy",
        role: "Student, Hyderabad",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100&h=100"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="testimonials">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mt-3 mb-6">
                        Trusted by Leading <span className="text-primary-600">Healthcare Providers</span>
                    </h2>
                    <p className="text-secondary-500 text-lg font-sans">
                        Join thousands of doctors who have upgraded their practice with Ayura.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-secondary-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-primary-100"
                                />
                                <div>
                                    <h4 className="font-bold text-secondary-900">{testimonial.author}</h4>
                                    <p className="text-sm text-secondary-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-secondary-600 italic leading-relaxed">"{testimonial.quote}"</p>

                            <div className="flex text-yellow-400 mt-4 gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
