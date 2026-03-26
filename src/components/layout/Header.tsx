'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const NAV_LINKS = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        event.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
                    : 'bg-transparent py-5'
                }`}
            role="banner"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="#inicio"
                    onClick={(e) => handleNavClick(e, '#inicio')}
                    className={`text-2xl font-black tracking-tight transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
                        }`}
                    aria-label="Now Group - Inicio"
                >
                    Now Group.
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`text-sm font-medium transition-colors duration-200 hover:opacity-80 ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-200 hover:text-white'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <a
                    href="#contacto"
                    onClick={(e) => handleNavClick(e, '#contacto')}
                    className={`hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isScrolled
                            ? 'bg-gray-900 text-white hover:bg-gray-800'
                            : 'border border-white/40 text-white hover:bg-white/10'
                        }`}
                >
                    Hablemos
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                </a>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={isMobileMenuOpen}
                >
                    <span
                        className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
                                ? 'rotate-45 translate-y-2 bg-white'
                                : isScrolled ? 'bg-gray-900' : 'bg-white'
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
                                ? 'opacity-0'
                                : isScrolled ? 'bg-gray-900' : 'bg-white'
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
                                ? '-rotate-45 -translate-y-2 bg-white'
                                : isScrolled ? 'bg-gray-900' : 'bg-white'
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[var(--color-primary-dark)] z-40 flex flex-col items-center justify-center lg:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8" aria-label="Menú móvil">
                            {NAV_LINKS.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-2xl font-medium text-white hover:text-[var(--color-accent-gold)] transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contacto"
                                onClick={(e) => handleNavClick(e, '#contacto')}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: NAV_LINKS.length * 0.1 }}
                                className="mt-4 px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-all"
                            >
                                Hablemos →
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
