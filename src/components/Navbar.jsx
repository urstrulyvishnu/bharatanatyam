import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close sidebar on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent scrolling when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'History', path: '/history' },
        { name: 'Mudras', path: '/mudras' },
        { name: 'Pioneers', path: '/pioneers' },
        { name: 'Attire', path: '/attire' },
    ];

    const isHome = location.pathname === '/';
    const textColor = (isHome && !scrolled && !isOpen) ? '#fff' : 'var(--color-primary)';
    const navItemColor = (isHome && !scrolled && !isOpen) ? 'rgba(255,255,255,0.8)' : 'var(--color-text)';

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                background: scrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
                boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1200px'
                }}>
                    <Link to="/" style={{
                        fontSize: '1.6rem',
                        fontWeight: '700',
                        fontFamily: '"Playfair Display", serif',
                        color: textColor,
                        transition: 'color 0.3s ease',
                        letterSpacing: '0.5px'
                    }}>
                        Bharatanatyam
                    </Link>

                    {/* Desktop Menu */}
                    <div className="desktop-nav" style={{ display: 'flex', gap: '2.5rem' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{
                                    color: location.pathname === link.path ? textColor : navItemColor,
                                    fontWeight: location.pathname === link.path ? '700' : '500',
                                    fontSize: '0.95rem',
                                    position: 'relative',
                                    transition: 'all 0.3s ease',
                                    padding: '0.5rem 0'
                                }}
                                className="nav-link-hover"
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="underline"
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            background: textColor,
                                            borderRadius: '2px'
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            color: textColor,
                            cursor: 'pointer',
                            zIndex: 1100,
                            padding: '0.5rem',
                            transition: 'transform 0.3s ease'
                        }}
                        className="mobile-toggle-btn"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                background: 'rgba(0,0,0,0.4)',
                                backdropFilter: 'blur(4px)',
                                zIndex: 1050
                            }}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                width: '280px',
                                background: 'var(--color-bg)',
                                zIndex: 1060,
                                padding: '6rem 2rem 2rem',
                                boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem'
                            }}
                        >
                            <div style={{ marginBottom: '2rem' }}>
                                <small style={{ color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Menu</small>
                            </div>
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        style={{
                                            fontSize: '1.25rem',
                                            fontWeight: location.pathname === link.path ? '700' : '500',
                                            color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text)',
                                            display: 'block',
                                            padding: '0.5rem 0'
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-toggle-btn {
                        display: block !important;
                    }
                }
                .nav-link-hover:hover {
                    color: \${textColor} !important;
                    opacity: 1;
                }
            `}</style>
        </>
    );
};

export default Navbar;

