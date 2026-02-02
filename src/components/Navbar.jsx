import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'History', path: '/history' },
        { name: 'Mudras', path: '/mudras' },
        { name: 'Pioneers', path: '/pioneers' },
        { name: 'Attire', path: '/attire' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'bg-transparent py-4'}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: scrolled ? '1rem 2rem' : '2rem',
                background: scrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
                boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
                borderRadius: 0,
                transition: 'all 0.3s ease'
            }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="logo" style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    fontFamily: '"Playfair Display", serif',
                    color: (location.pathname === '/' && !scrolled) ? '#fff' : 'var(--color-primary)'
                }}>
                    Bharatanatyam
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                color: (location.pathname === '/' && !scrolled)
                                    ? (location.pathname === link.path ? '#fff' : 'rgba(255,255,255,0.8)')
                                    : (location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text)'),
                                fontWeight: location.pathname === link.path ? '600' : '400',
                                position: 'relative'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle - Simple implementation for now */}
                <div className="mobile-toggle" style={{ display: 'none' }}>
                    <Menu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
