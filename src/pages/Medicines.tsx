import React, { useState } from 'react';
import { Pill, Search, Filter, ShoppingCart, Star, Truck, Shield, ArrowRight } from 'lucide-react';

const categories = [
    { name: 'Cold & Cough', color: 'bg-blue-50 text-blue-600' },
    { name: 'Vitamins & Nutrition', color: 'bg-green-50 text-green-600' },
    { name: 'Diabetes Care', color: 'bg-orange-50 text-orange-600' },
    { name: 'Heart Health', color: 'bg-red-50 text-red-600' },
    { name: 'Digestive Health', color: 'bg-purple-50 text-purple-600' },
    { name: 'Skin Care', color: 'bg-pink-50 text-pink-600' },
    { name: 'Eye Care', color: 'bg-teal-50 text-teal-600' },
    { name: 'Baby Care', color: 'bg-yellow-50 text-yellow-600' },
];

const featuredProducts = [
    {
        name: 'Vitamin D3 & K2 Supplement',
        brand: 'Ayura Wellness',
        price: '₹349',
        originalPrice: '₹499',
        discount: '30% off',
        rating: 4.7,
        reviews: 1284,
        prescription: false,
    },
    {
        name: 'Omega-3 Fish Oil (1000mg)',
        brand: 'Ayura Health',
        price: '₹529',
        originalPrice: '₹699',
        discount: '24% off',
        rating: 4.5,
        reviews: 892,
        prescription: false,
    },
    {
        name: 'Multivitamin Daily Pack',
        brand: 'Ayura Wellness',
        price: '₹249',
        originalPrice: '₹350',
        discount: '29% off',
        rating: 4.8,
        reviews: 2103,
        prescription: false,
    },
    {
        name: 'Blood Pressure Monitor',
        brand: 'Ayura Devices',
        price: '₹1,499',
        originalPrice: '₹2,200',
        discount: '32% off',
        rating: 4.6,
        reviews: 567,
        prescription: false,
    },
    {
        name: 'Cetirizine 10mg Tablet',
        brand: 'Generic',
        price: '₹89',
        originalPrice: '₹120',
        discount: '26% off',
        rating: 4.3,
        reviews: 3441,
        prescription: true,
    },
    {
        name: 'Paracetamol 650mg Strip',
        brand: 'Generic',
        price: '₹49',
        originalPrice: '₹70',
        discount: '30% off',
        rating: 4.9,
        reviews: 5678,
        prescription: false,
    },
];

const Medicines = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="min-h-screen bg-gray-50 pt-20 font-sans">

            {/* Hero Banner */}
            <section className="bg-gradient-to-br from-primary-700 to-primary-500 text-white py-16">
                <div className="container mx-auto px-6 max-w-[1200px] text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">Ayura Pharmacy</h1>
                    <p className="text-primary-100 text-lg mb-8">Genuine medicines · Fast delivery · Doctor-verified products</p>

                    {/* Search bar */}
                    <div className="max-w-xl mx-auto flex items-center bg-white rounded-xl shadow-lg overflow-hidden">
                        <Search className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Search for medicines, vitamins, devices..."
                            className="flex-1 py-3.5 px-3 text-sm text-gray-800 outline-none"
                        />
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-3.5 text-sm font-bold transition-colors flex-shrink-0">
                            Search
                        </button>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-primary-100 text-sm">
                        <div className="flex items-center gap-1.5"><Truck className="w-4 h-4" /><span>Free delivery over ₹499</span></div>
                        <div className="flex items-center gap-1.5"><Shield className="w-4 h-4" /><span>100% authentic products</span></div>
                        <div className="flex items-center gap-1.5"><Pill className="w-4 h-4" /><span>130,000+ medicines</span></div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 max-w-[1200px] py-12">

                {/* Categories */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                className={`${cat.color} rounded-xl px-4 py-5 text-sm font-semibold text-left hover:shadow-md transition-shadow flex items-center justify-between group`}
                            >
                                <span>{cat.name}</span>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        ))}
                    </div>
                </section>

                {/* Featured / All Products */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Popular Products</h2>
                        <button className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:border-gray-400 transition-colors">
                            <Filter className="w-4 h-4" />
                            Filter
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProducts.map((product, i) => (
                            <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow group">
                                {/* Placeholder image */}
                                <div className="h-40 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg mb-4 flex items-center justify-center">
                                    <Pill className="w-12 h-12 text-primary-300" />
                                </div>

                                {product.prescription && (
                                    <span className="inline-block bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-2">
                                        Rx Required
                                    </span>
                                )}

                                <h3 className="font-bold text-gray-900 text-sm mb-0.5">{product.name}</h3>
                                <p className="text-xs text-gray-400 mb-3">{product.brand}</p>

                                <div className="flex items-center gap-1 mb-3">
                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                    <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                                    <span className="text-xs text-gray-400">({product.reviews.toLocaleString()})</span>
                                </div>

                                <div className="flex items-end justify-between">
                                    <div>
                                        <span className="text-lg font-bold text-gray-900">{product.price}</span>
                                        <span className="text-xs text-gray-400 line-through ml-2">{product.originalPrice}</span>
                                        <span className="text-xs text-green-600 font-semibold ml-2">{product.discount}</span>
                                    </div>
                                    <button className="w-8 h-8 rounded-full bg-primary-50 hover:bg-primary-100 flex items-center justify-center transition-colors">
                                        <ShoppingCart className="w-4 h-4 text-primary-600" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Medicines;
