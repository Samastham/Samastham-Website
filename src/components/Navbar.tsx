import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './ui/Button';
import logo from '../assets/primary logo svg.svg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Close dropdown when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm py-4`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2 text-xl">
                        <img src={logo} alt="Ayura" className="h-10 w-auto object-contain" />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-secondary-600 hover:text-primary-600 font-medium transition-colors font-sans"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Dropdown Menu */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-1 text-secondary-600 hover:text-primary-600 font-medium transition-colors font-sans focus:outline-none"
                        >
                            Providers
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Content */}
                        {isDropdownOpen && (
                            <div className="absolute top-full right-0 mt-4 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden animate-fade-in origin-top">
                                <Link to="/" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors">For Patients</Link>
                                <div className="border-t border-gray-100 my-1"></div>
                                <Link to="/providers" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors">For Providers</Link>
                                <Link to="/providers" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors">For Clinics</Link>
                                <Link to="/providers" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors">For Hospitals</Link>
                                <Link to="/providers" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors">For Labs</Link>
                            </div>
                        )}
                    </div>


                </div>


                <button
                    className="md:hidden text-secondary-600 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-secondary-100 p-6 flex flex-col gap-4 shadow-xl max-h-[80vh] overflow-y-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-secondary-600 hover:text-primary-600 font-medium py-2 font-sans"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Mobile Dropdown Options */}
                    <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                        <div className="font-bold text-gray-900 py-2">Providers</div>
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-primary-600 pl-4 py-2">For Patients</Link>
                        <Link to="/providers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-primary-600 pl-4 py-2">For Providers</Link>
                        <Link to="/providers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-primary-600 pl-4 py-2">For Clinics</Link>
                        <Link to="/providers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-primary-600 pl-4 py-2">For Hospitals</Link>
                        <Link to="/providers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-primary-600 pl-4 py-2">For Labs</Link>
                    </div>


                </div>
            )}
        </nav>
    );
};

export default Navbar;
