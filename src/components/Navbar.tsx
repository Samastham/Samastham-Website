import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/primary logo svg.svg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

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

    // Handle hash scrolling when location changes
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsMobileMenuOpen(false);
        if (href.startsWith('#')) {
            e.preventDefault();
            if (location.pathname !== '/') {
                navigate('/' + href);
            } else {
                const id = href.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
                // Update URL hash without jumping
                window.history.pushState(null, '', href);
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm py-4`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="Ayura" className="h-8 w-auto object-contain" />
                    </Link>
                </div>

                {/* Center: Nav Links & Providers Dropdown */}
                <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 flex-1">
                    {navLinks.map((link) => (
                        link.href.startsWith('#') ? (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-gray-600 hover:text-teal-600 font-medium transition-colors font-sans text-[15px]"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-gray-600 hover:text-teal-600 font-medium transition-colors font-sans text-[15px]"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}

                    {/* Providers Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-1 text-gray-600 hover:text-teal-600 font-medium transition-colors font-sans focus:outline-none text-[15px]"
                        >
                            Providers
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Content */}
                        {isDropdownOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 py-2 overflow-hidden animate-fade-in origin-top">
                                <Link to="/" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2.5 text-[15px] font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-600 transition-colors">For Patients</Link>
                                <div className="border-t border-gray-100 my-1"></div>
                                <Link to="/providers" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2.5 text-[15px] font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-600 transition-colors">For Doctors</Link>
                                <Link to="/providers" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2.5 text-[15px] font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-600 transition-colors">For Clinics</Link>
                                <Link to="/providers" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2.5 text-[15px] font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-600 transition-colors">For Hospitals</Link>
                                <Link to="/providers" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2.5 text-[15px] font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-600 transition-colors">For Labs</Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Get Early Access Button */}
                <div className="hidden md:flex items-center">
                    <a
                        href="#early-access"
                        onClick={(e) => handleNavClick(e, '#early-access')}
                        className="bg-[#0093a1] hover:bg-[#007b83] text-white px-6 py-2.5 rounded-lg font-bold text-[15px] transition-colors shadow-sm"
                    >
                        Get Early Access
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 shadow-xl max-h-[80vh] overflow-y-auto">
                    {navLinks.map((link) => (
                        link.href.startsWith('#') ? (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-gray-700 hover:text-teal-600 font-bold py-2 font-sans text-lg"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-700 hover:text-teal-600 font-bold py-2 font-sans text-lg"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}

                    {/* Mobile Dropdown Options */}
                    <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-gray-100">
                        <div className="font-bold text-gray-400 text-sm uppercase tracking-wider mb-2">Providers</div>
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-teal-600 font-semibold py-1">For Patients</Link>
                        <Link to="/providers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-teal-600 font-semibold py-1">For Doctors</Link>
                        <Link to="/providers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-teal-600 font-semibold py-1">For Clinics</Link>
                        <Link to="/providers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-teal-600 font-semibold py-1">For Hospitals</Link>
                        <Link to="/providers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-teal-600 font-semibold py-1">For Labs</Link>
                    </div>

                    <div className="pt-6 mt-4 border-t border-gray-100">
                        <a
                            href="#early-access"
                            onClick={(e) => handleNavClick(e, '#early-access')}
                            className="block text-center bg-[#0093a1] text-white px-6 py-3 rounded-xl font-bold"
                        >
                            Get Early Access
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
