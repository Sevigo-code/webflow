import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content animate-fade-in">

                <h1 className="hero-title">
                    Experimenta El <br />
                    <span className="gradient-text">Futuro De La Tecnología.</span>
                </h1>

                <p className="hero-subtitle">
                    Descubre portátiles, teléfonos y lo ultimo en el mundo de la tecnologia.
                    Eleva tu estilo de vida digital con nuestra colección prémium.
                </p>

                <div className="hero-actions">
                    <button className="btn btn-primary">
                        Comprar Ahora <ArrowRight size={18} />
                    </button>
                    <button className="btn btn-outline">
                        Ver Noticias
                    </button>
                </div>
            </div>

            <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="glow-sphere"></div>
                <div className="glass-panel model-placeholder">
                    <div className="floating-element laptop"></div>
                    <div className="floating-element phone"></div>
                    <div className="model-text">AURA <span className="gradient-text">X1 Pro</span></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
