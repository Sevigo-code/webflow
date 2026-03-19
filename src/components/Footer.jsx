import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container glass">
                <div className="footer-brand">
                    <div className="logo">
                        <span className="logo-icon">▲</span>
                        <span className="logo-text">WEB <span className="gradient-text">FLOW</span></span>
                    </div>
                    <p className="footer-desc">
                        Redefiniendo la experiencia digital con tecnología prémium e innovaciones de vanguardia. Aqui encuentras todo lo que necesitas, en un mismo sitio.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h4>Productos</h4>
                        <a href="#">Portátiles</a>
                        <a href="#">Teléfonos</a>
                        <a href="#">Accesorios</a>
                    </div>
                    <div className="link-group">
                        <h4>Compañía</h4>
                        <a href="#">Acerca de</a>
                        <a href="#">Noticias</a>
                        <a href="#">Contacto</a>
                    </div>
                    <div className="link-group">
                        <h4>Legal</h4>
                        <a href="#">Política de Privacidad</a>
                        <a href="#">Términos de Servicio</a>
                        <a href="#">Devoluciones</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 WebFlow. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
