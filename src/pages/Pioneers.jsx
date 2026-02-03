import React from 'react';
import { motion } from 'framer-motion';

const pioneers = [
    {
        name: 'Rukmini Devi Arundale',
        role: 'Founder of Kalakshetra',
        period: '1904–1986',
        desc: 'An Indian theosophist, dancer and choreographer of the Indian classical dance form of Bharatanatyam, and an activist for animal rights and welfare. She is the most important revivalist of Bharatanatyam from its original "Sadir" style.'
    },
    {
        name: 'T. Balasaraswati',
        role: 'Queen of Abhinaya',
        period: '1918–1984',
        desc: 'A celebrated Indian dancer, and her rendering of Bharatanatyam, a classical dance style originated in the South Indian state of Tamil Nadu, made this style of dancing well known in different parts of India and many parts of the world.'
    },
    {
        name: 'E. Krishna Iyer',
        role: 'Revivalist',
        period: '1897–1968',
        desc: 'A freedom fighter, lawyer and artist who played a major role in the revival of Bharatanatyam. He learnt Bharatanatyam to disprove the stigma attached to it and performed in female costume.'
    },
    {
        name: 'Padma Subrahmanyam',
        role: 'Scholar & Choreographer',
        period: 'Born 1943',
        desc: 'Dr. Padma Subrahmanyam is celebrated for her research on the Karana sculptures of temples. She created a new style called "Bharata Nrithyam" based on her studies of the Natya Shastra.'
    }
];

const Pioneers = () => {
    return (
        <div className="page-padding" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Legends & Pioneers</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        Paying tribute to the visionaries who preserved, enriched, and propagated this divine art form.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                    {pioneers.map((person, index) => (
                        <motion.div
                            key={person.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel"
                            style={{ padding: '2.5rem', background: 'white', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                        >
                            <div style={{ paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)' }}>{person.name}</h2>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                                    <span style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>{person.role}</span>
                                    <span style={{ fontSize: '0.9rem', color: '#999' }}>{person.period}</span>
                                </div>
                            </div>
                            <p style={{ lineHeight: 1.7, color: 'var(--color-text-light)' }}>
                                {person.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pioneers;
