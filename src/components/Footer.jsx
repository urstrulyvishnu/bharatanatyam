import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '3rem 0', marginTop: '4rem' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Bharatanatyam</h2>
                <p style={{ maxWidth: '600px', marginBottom: '2rem', opacity: 0.9 }}>
                    Celebrating the divine ancient art form of India. Expressing stories through Bhava, Raga, and Tala.
                </p>
                <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
                    <span>Home</span>
                    <span>History</span>
                    <span>Mudras</span>
                    <span>Contact</span>
                </div>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>&copy; 2024 Bharatanatyam Showcase. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
