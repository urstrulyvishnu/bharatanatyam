import React from 'react';
import { motion } from 'framer-motion';

const History = () => {
    const events = [
        {
            year: '200 BCE - 200 CE',
            title: 'Natya Shastra',
            desc: 'The theoretical foundation of Bharatanatyam is found in Natya Shastra, the ancient Hindu text on the performing arts.',
        },
        {
            year: 'Medieval Period',
            title: 'Temple Tradition',
            desc: 'The dance flourished in the temples of Tamil Nadu, performed by Devadasis (servants of God) as a part of daily rituals.',
        },
        {
            year: '19th Century',
            title: 'Thanjavur Quartet',
            desc: 'Four brothers (Chinnayya, Ponnayya, Sivanandam, and Vadivelu) codified the dance repertoire into the Margam format used today.',
        },
        {
            year: '1910 - 1930',
            title: 'Decline and Anti-Nautch Movement',
            desc: 'Social reforms and British colonial rule led to a decline and stigmatization of the dance form and the Devadasi system.',
        },
        {
            year: '1930s Onwards',
            title: 'Revival',
            desc: 'Pioneers like E. Krishna Iyer and Rukmini Devi Arundale revived the art form, bringing it to the stage and renaming it Bharatanatyam.',
        }
    ];

    return (
        <div className="page-padding" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>History & Evolution</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        From ancient temples to modern stages, the journey of Bharatanatyam is a saga of devotion, decline, and glorious revival.
                    </p>
                </motion.div>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        backgroundColor: 'var(--color-secondary)',
                        opacity: 0.3
                    }} className="timeline-line"></div>

                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                display: 'flex',
                                justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                                marginBottom: '4rem',
                                position: 'relative'
                            }}
                        >
                            {/* Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                transform: 'translateX(-50%)',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-primary)',
                                border: '4px solid white',
                                boxShadow: '0 0 0 2px var(--color-secondary)',
                                zIndex: 2
                            }}></div>

                            {/* Content Card */}
                            <div
                                className="glass-panel"
                                style={{
                                    width: '45%',
                                    padding: '2rem',
                                    textAlign: index % 2 === 0 ? 'right' : 'left',
                                    marginLeft: index % 2 !== 0 ? 'auto' : '0',
                                    marginRight: index % 2 === 0 ? 'auto' : '0'
                                }}
                            >
                                <span style={{
                                    color: 'var(--color-secondary)',
                                    fontWeight: 'bold',
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontFamily: '"Playfair Display", serif'
                                }}>
                                    {event.year}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{event.title}</h3>
                                <p style={{ color: 'var(--color-text-light)' }}>{event.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Simple CSS for mobile responsiveness of timeline */}
            <style>{`
      @media (max-width: 768px) {
        .timeline-line { left: 20px !important; }
        .glass-panel { width: calc(100% - 60px) !important; margin-left: 60px !important; text-align: left !important; }
        div[style*="justify-content"] { justify-content: flex-start !important; }
         div[style*="left: 50%"] { left: 20px !important; }
      }
    `}</style>
        </div>
    );
};

export default History;
