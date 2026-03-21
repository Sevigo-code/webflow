import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './Css/Hero.css';

function Hero({ setActiveTab }) {
    const storeRef = useRef(null);

    // Desplazarse hacia la sección de tienda
    const handleShopNow = () => {
        const storeSection = document.getElementById('store-section');
        if (storeSection) {
            storeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Navegar hacia noticias
    const handleViewNews = () => {
        setActiveTab('news');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Equipo Gamer al <br />
                    <span className="gradient-text">Mejor Precio.</span>
                </h1>

                <p className="hero-subtitle">
                    Descubre los mejores componentes, periféricos y accesorios gaming.
                    Equipate con tecnología de alto rendimiento. Envío gratis en pedidos mayores a $50.
                </p>

                <div className="hero-actions">
                    <button 
                        className="btn btn-primary"
                        onClick={handleShopNow}
                    >
                        Ver Catálogo <ArrowRight size={18} />
                    </button>
                    <button 
                        className="btn btn-outline"
                        onClick={handleViewNews}
                    >
                        Últimas Novedades
                    </button>
                </div>
            </div>

            <div className="hero-visual">
                <div className="glow-sphere"></div>
                <div className="glass-panel model-placeholder">
                    <div className="floating-element laptop"></div>
                    <div className="floating-element phone"></div>
                    <div className="model-text">SETUP GAMER <span className="gradient-text">PRO</span></div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
