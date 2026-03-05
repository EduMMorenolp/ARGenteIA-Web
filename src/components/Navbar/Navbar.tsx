import React, { useState, useEffect } from 'react';
import { Github, Download, RefreshCw, Menu, X, Heart } from 'lucide-react';
import { useRole } from '../../context/RoleContext';
import './Navbar.css';

const GITHUB_URL = 'https://github.com/EduMMorenolp/ARGenteIA';
const DOWNLOAD_URL = 'https://github.com/EduMMorenolp/ARGenteIA/archive/refs/heads/main.zip';
const DONATE_URL = 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=28d98c980e904ecca443cf42b689a205';

const Navbar: React.FC = () => {
    const { role, setRole } = useRole();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isDev = role === 'developer';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!role) return null;

    const closeMenu = () => setMobileOpen(false);

    return (
        <nav className={`navbar glass-panel ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-content">
                <a href="#" className="navbar-logo" onClick={closeMenu}>
                    <div className="logo-mark"><span>IA</span></div>
                    <span className="logo-text">ARGenteIA</span>
                </a>

                <div className="navbar-links">
                    <a href="#features" className="nav-link">Características</a>
                    <a href="#architecture" className="nav-link">
                        {isDev ? 'Arquitectura' : 'Cómo Funciona'}
                    </a>
                    {isDev && <a href="#tools" className="nav-link">Docs</a>}
                    {isDev && <a href="#changelog" className="nav-link">Changelog</a>}
                    <a href="#tech" className="nav-link">
                        {isDev ? 'Tech Stack' : 'Beneficios'}
                    </a>
                </div>

                <div className="navbar-actions">
                    <button
                        className="role-switch-btn"
                        onClick={() => { setRole(null); closeMenu(); }}
                        title="Cambiar perfil"
                    >
                        <RefreshCw size={14} />
                        <span>{isDev ? 'Dev' : 'Usuario'}</span>
                    </button>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary nav-btn desktop-only">
                        <Github size={15} />
                    </a>
                    <a href={DOWNLOAD_URL} className="btn-primary nav-btn desktop-only" download>
                        <Download size={15} />
                        <span>Descargar</span>
                    </a>
                    <a href={DONATE_URL} target="_blank" rel="noopener noreferrer" className="btn-donate nav-btn desktop-only">
                        <Heart size={15} />
                        <span>Donar</span>
                    </a>
                    <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div className="mobile-drawer glass-panel">
                    <a href="#features" className="mobile-link" onClick={closeMenu}>Características</a>
                    <a href="#architecture" className="mobile-link" onClick={closeMenu}>
                        {isDev ? 'Arquitectura' : 'Cómo Funciona'}
                    </a>
                    {isDev && <a href="#tools" className="mobile-link" onClick={closeMenu}>Documentación Técnica</a>}
                    {isDev && <a href="#changelog" className="mobile-link" onClick={closeMenu}>Changelog</a>}
                    <a href="#tech" className="mobile-link" onClick={closeMenu}>
                        {isDev ? 'Tech Stack' : 'Beneficios'}
                    </a>
                    <div className="mobile-divider"></div>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="mobile-link" onClick={closeMenu}>
                        <Github size={16} /> GitHub
                    </a>
                    <a href={DOWNLOAD_URL} className="mobile-link" onClick={closeMenu} download>
                        <Download size={16} /> Descargar
                    </a>
                    <a href={DONATE_URL} target="_blank" rel="noopener noreferrer" className="mobile-link donate-link" onClick={closeMenu}>
                        <Heart size={16} /> Donar
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
