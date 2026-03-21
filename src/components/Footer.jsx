import React from 'react';
import './Css/Footer.css';

function Footer() {
    // Prevenir recarga de página en links
    const handleLinkClick = (e) => {
        e.preventDefault();
    };

    return (
        <footer className="footer">
            <div className="footer-container glass">
                <div className="footer-brand">
                    <div className="logo">
                        <span className="logo-icon">⚡</span>
                        <span className="logo-text">WEB <span className="gradient-text">FLOW</span></span>
                    </div>
                    <p className="footer-desc">
                        Tu tienda online especializada en componentes gaming de alta calidad.
                        Ofertas exclusivas, envío rápido y soporte técnico 24/7.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h4>Productos</h4>
                        <a href="#!" onClick={handleLinkClick}>Gráficas</a>
                        <a href="#!" onClick={handleLinkClick}>Periféricos</a>
                        <a href="#!" onClick={handleLinkClick}>Monitores</a>
                    </div>
                    <div className="link-group">
                        <h4>Soporte</h4>
                        <a href="#!" onClick={handleLinkClick}>Guías de Compra</a>
                        <a href="#!" onClick={handleLinkClick}>Blog</a>
                        <a href="#!" onClick={handleLinkClick}>Contacto</a>
                    </div>
                    <div className="link-group">
                        <h4>Legal</h4>
                        <a href="#!" onClick={handleLinkClick}>Privacidad</a>
                        <a href="#!" onClick={handleLinkClick}>Términos de Servicio</a>
                        <a href="#!" onClick={handleLinkClick}>Devoluciones</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 WebFlow. Todos los derechos reservados. | Gaming es nuestra pasión.</p>
            </div>
        </footer>
    );
}

export default Footer;
