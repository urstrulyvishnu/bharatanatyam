import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Users, History as HistoryIcon, Shield } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero" style={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.6)',
                    zIndex: -1
                }} />

                <div className="container text-center text-white" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: 'white' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h5 className="text-gold" style={{ letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600 }}>The Divine Dance of India</h5>
                        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', color: '#fff' }}>Bharatanatyam</h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
                            Experience the oldest classical dance tradition of India that embodies Bhava (Emotion), Raga (Melody), and Tala (Rhythm).
                        </p>
                        <Link to="/history" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Discover History <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--color-bg)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Elegance in Motion</h2>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                                Bharatanatyam is a major form of Indian classical dance that originated in Tamil Nadu. The dance form is known for its beautiful body movements and gestures which are called Mudras. It focuses on the hand gestures, leg movement and facial expressions of the dancer.
                            </p>
                            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                                Traditionally a solo dance performed only by women, it initiated in the Hindu temples of Tamil Nadu and eventually flourished in South India.
                            </p>
                            <Link to="/mudras" className="btn btn-outline">Explore Mudras</Link>
                        </motion.div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <FeatureCard icon={<HistoryIcon size={32} />} title="Ancient Roots" desc="Dating back to 2nd century CE" />
                            <FeatureCard icon={<Music size={32} />} title="Carnatic Music" desc="Set to traditional South Indian melody" />
                            <FeatureCard icon={<Shield size={32} />} title="Spiritual" desc="A form of worship and storytelling" />
                            <FeatureCard icon={<Users size={32} />} title="Expression" desc="Mastery of Abhinaya and Nritta" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <motion.div
        className="glass-panel"
        whileHover={{ y: -5 }}
        style={{ padding: '2rem', textAlign: 'center', boxShadow: 'var(--shadow-md)', background: 'white' }}
    >
        <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{icon}</div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>{desc}</p>
    </motion.div>
);

export default Home;
