import React from 'react';
import { motion } from 'framer-motion';

import CostumeImg from '../assets/attire/Costume.jpg';
import JewelryImg from '../assets/attire/Jewelry.jpg';

const Attire = () => {
    return (
        <div className="page-padding" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Aharya Abhinaya</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        The costumes, jewelry, and make-up that transform a dancer into a divine storyteller.
                    </p>
                </div>

                <section style={{ marginBottom: '6rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>The Costume</h2>
                            <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                The costume is typically made of vivid colored <strong>Kanchipuram Silk Sarees</strong> with gold zari borders.
                            </p>
                            <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                The most popular style is the skirt-saree, which consists of a pajama (trousers) and a fan pleasingly pleated in the front. This fan opens up beautifully like a peacock's feathers when the dancer performs the <em>Aramandi</em> (half-sitting) posture.
                            </p>
                        </motion.div>
                        <div className="glass-panel" style={{ height: '500px', overflow: 'hidden', padding: 0, borderRadius: 'var(--radius-lg)' }}>
                            <img src={CostumeImg} alt="Bharatanatyam Costume" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </section>

                <section>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center', direction: 'rtl' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            style={{ direction: 'ltr' }}
                        >
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Temple Jewelry</h2>
                            <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                A dancer wears traditional Temple Jewelry, typically made of gold with red (rubies) and green (emeralds) stones.
                            </p>
                            <ul style={{ listStyle: 'none', lineHeight: 2 }}>
                                <li><strong>Talai Saman:</strong> Head ornaments representing the sun and moon.</li>
                                <li><strong>Jhumka:</strong> Heavy earrings.</li>
                                <li><strong>Manga Malai:</strong> Mango necklace.</li>
                                <li><strong>Oddiyanam:</strong> Waist belt to keep the saree firm.</li>
                                <li><strong>Salangai:</strong> Musical anklets (Ghungroos) that are essential for rhythm.</li>
                            </ul>
                        </motion.div>
                        <div className="glass-panel" style={{ height: '500px', overflow: 'hidden', padding: 0, borderRadius: 'var(--radius-lg)' }}>
                            <img src={JewelryImg} alt="Temple Jewelry" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Attire;
