import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import PatakaImg from '../assets/mudras/Pataka.jpg';
import TripatakaImg from '../assets/mudras/Tripataka.jpg';
import ArdhapatakaImg from '../assets/mudras/Ardhapataka.jpg';
import KartarimukhaImg from '../assets/mudras/Kartarimukha.jpg';
import MayuraImg from '../assets/mudras/Mayura.jpg';
import SikharaImg from '../assets/mudras/Sikhara.jpg';
import KapithaImg from '../assets/mudras/Kapitha.jpg';
import KatakamukhaImg from '../assets/mudras/Katakamukha.jpg';

const mudrasData = [
    {
        name: 'Pataka',
        meaning: 'Flag',
        img: PatakaImg,
        desc: 'Used to denote the beginning of a dance, clouds, forest, forbidding things, bosom, night, river, world of gods, horse, cutting, wind, lying down, attempting to go, prowess, favour, moonlight, strong sunlight, forcing open doors, seven case endings, waves, entering a street, equality, anointing the body, taking an oath, silence, palmyra leaf, shield, touching things, benediction, ideal king, pointing out "such and such a place", the sea, succession of good deeds, addressing a person, going forward, holding a sword, month, year, rainy day and sweeping.'
    },
    {
        name: 'Tripataka',
        meaning: 'Three parts of the flag',
        img: TripatakaImg,
        desc: 'Used to denote crown, tree, vajrayudha, Indra, ketaki flower, lamp, raising flames, cheek, patterns drawn on the face, arrow, turning around, union of woman and man.'
    },
    {
        name: 'Ardhapataka',
        meaning: 'Half flag',
        img: ArdhapatakaImg,
        desc: 'Used to denote leaves, board, bank of a river, saying "both", knife, banner, tower, horn.'
    },
    {
        name: 'Kartarimukha',
        meaning: 'Arrow shaft face / Scissors',
        img: KartarimukhaImg,
        desc: 'Used to denote separation of man and woman, overturning, weeping, corner of the eye, death, estrangement, falling, creeper.'
    },
    {
        name: 'Mayura',
        meaning: 'Peacock',
        img: MayuraImg,
        desc: 'Used to denote peacock, creeper, bird of omen, vomiting, curlns on the forehead, scattering.'
    },
    {
        name: 'Sikhara',
        meaning: 'Peak',
        img: SikharaImg,
        desc: 'Used to denote god of love (Manmatha), bow, pillar, silence, husband, tooth, questioning, untying the girdle, embrace, sounding a bell.'
    },
    {
        name: 'Kapitha',
        meaning: 'Elephant apple',
        img: KapithaImg,
        desc: 'Used to denote Goddess Lakshmi, winding, holding cymbals, milking cows, collyrium, holding flowers at the time of dalliance, grasping the end of the robe, veiling the head with the anchal (end of the sari), offering incense or light.'
    },
    {
        name: 'Katakamukha',
        meaning: 'Opening in a link',
        img: KatakamukhaImg,
        desc: 'Used to denote plucking flowers, wearing a pearl necklace or garland of flowers, drawing the arrow slowly, offering betel leaves, preparing paste, applying musk scents.'
    }
];

const Mudras = () => {
    const [selectedMudra, setSelectedMudra] = useState(null);

    return (
        <div className="page-padding" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Asamyuta Hastas</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        Single Hand Gestures. The language of hands (Mudras) allow a dancer to communicate specific ideas, symbols, and emotions.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {mudrasData.map((mudra) => (
                        <motion.div
                            key={mudra.name}
                            layoutId={`card-${mudra.name}`}
                            onClick={() => setSelectedMudra(mudra)}
                            className="glass-panel"
                            whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
                            style={{ padding: '2rem', cursor: 'pointer', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                        >
                            <div style={{
                                width: '120px', height: '120px',
                                borderRadius: '50%', overflow: 'hidden',
                                marginBottom: '1.5rem', border: '4px solid var(--color-bg)',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                <img src={mudra.img} alt={mudra.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ marginBottom: '0.5rem' }}>{mudra.name}</h3>
                            <p style={{ color: 'var(--color-secondary)', fontWeight: 600, fontSize: '0.9rem' }}>{mudra.meaning}</p>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedMudra && (
                        <div style={{
                            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0,0,0,0.6)', zIndex: 2000,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
                        }} onClick={() => setSelectedMudra(null)}>
                            <motion.div
                                layoutId={`card-${selectedMudra.name}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="glass-panel"
                                style={{ background: 'white', maxWidth: '800px', width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '90vh' }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedMudra(null)}
                                    style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--color-bg)', borderRadius: '50%', width: '40px', height: '40px', border: 'none', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    &times;
                                </button>

                                <div style={{ display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' } }}>
                                    <div style={{ width: '100%', height: '300px', background: '#f0f0f0' }}>
                                        <img src={selectedMudra.img} alt={selectedMudra.name} style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#eaeaea' }} />
                                    </div>
                                    <div style={{ padding: '2rem', overflowY: 'auto' }}>
                                        <small style={{ color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Mudra</small>
                                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{selectedMudra.name}</h2>
                                        <h4 style={{ marginBottom: '1.5rem', fontStyle: 'italic', fontFamily: '"Playfair Display", serif' }}>"{selectedMudra.meaning}"</h4>
                                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--color-text)' }}>{selectedMudra.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
            <style>{`
        @media (min-width: 768px) {
            .glass-panel[style*="max-width: 800px"] > div {
                flex-direction: row !important;
            }
             .glass-panel[style*="max-width: 800px"] > div > div:first-child {
                width: 40% !important;
                height: auto !important;
                min-height: 400px;
            }
            .glass-panel[style*="max-width: 800px"] > div > div:last-child {
                width: 60% !important;
            }
        }
      `}</style>
        </div>
    );
};

export default Mudras;
