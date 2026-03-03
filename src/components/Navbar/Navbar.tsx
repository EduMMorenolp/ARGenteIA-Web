import React from 'react';
import { Github, Download, RefreshCw } from 'lucide-react';
import { useRole } from '../../context/RoleContext';
import './Navbar.css';

const GITHUB_URL = 'https://github.com/EduMMorenolp/ARGenteIA';
const DOWNLOAD_URL = 'https://github.com/EduMMorenolp/ARGenteIA/archive/refs/heads/main.zip';

const Navbar: React.FC = () => {
    const { role, setRole } = useRole();

    if (!role) return null;

    return (
        <nav className="navbar glass-panel">
            <div className="navbar-content">
                <a href="#" className="navbar-logo">
                    <div className="logo-mark">
                        <span>IA</span>
                        <div className="logo-pulse"></div>
                    </div>
                    <span className="logo-text">ARGenteIA</span>
                </a>
                <div className="navbar-links">
                    <a href="#features" className="nav-link">Características</a>
                    <a href="#architecture" className="nav-link">
                        {role === 'developer' ? 'Arquitectura' : 'Cómo Funciona'}
                    </a>
                    <a href="#tech" className="nav-link">
                        {role === 'developer' ? 'Tech Stack' : 'Beneficios'}
                    </a>
                </div>
                <div className="navbar-actions">
                    <button
                        className="role-switch-btn"
                        onClick={() => setRole(null)}
                        title="Cambiar perfil"
                    >
                        <RefreshCw size={14} />
                        <span>{role === 'developer' ? 'Dev' : 'Usuario'}</span>
                    </button>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary nav-btn">
                        <Github size={15} />
                    </a>
                    <a href={DOWNLOAD_URL} className="btn-primary nav-btn" download>
                        <Download size={15} />
                        Descargar
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
