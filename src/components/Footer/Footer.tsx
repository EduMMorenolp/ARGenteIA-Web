import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <div className="logo-mark"><span>IA</span></div>
                        <span className="logo-text">ARGenteIA</span>
                    </div>
                    <p className="footer-desc">
                        Framework de inteligencia autónoma multi-agente, diseñado para automatizar flujos complejos con herramientas, memoria y modelos de última generación.
                    </p>
                </div>

                <div className="footer-links-group">
                    <div className="footer-col">
                        <h4 className="footer-h4">Proyecto</h4>
                        <a href="#features" className="footer-link">Características</a>
                        <a href="#architecture" className="footer-link">Arquitectura</a>
                        <a href="#tools" className="footer-link">Herramientas</a>
                        <a href="#tech" className="footer-link">Tech Stack</a>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-h4">Recursos</h4>
                        <a href="#" className="footer-link">Documentación</a>
                        <a href="#" className="footer-link">API Reference</a>
                        <a href="#" className="footer-link">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="copyright">
                    Hecho con <Heart size={14} className="heart-icon" /> en Argentina — © 2026 ARGenteIA
                </p>
            </div>
        </footer>
    );
};

export default Footer;
