import React from 'react';
import { Sparkles, Download, Github } from 'lucide-react';
import { useRole } from '../../context/RoleContext';
import './Hero.css';

const GITHUB_URL = 'https://github.com/EduMMorenolp/ARGenteIA';
const DOWNLOAD_URL = 'https://github.com/EduMMorenolp/ARGenteIA/archive/refs/heads/main.zip';

const Hero: React.FC = () => {
    const { role } = useRole();
    const isDev = role === 'developer';

    return (
        <section className="hero-section">
            <div className="hero-background">
                <div className="glow-sphere glow-1"></div>
                <div className="glow-sphere glow-2"></div>
                <div className="glow-sphere glow-3"></div>
                <div className="grid-pattern"></div>
            </div>

            <div className="hero-orbs">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>

            <div className="hero-container">
                <div className="hero-badge">
                    <Sparkles size={14} />
                    <span className="badge-text">
                        {isDev ? 'Framework Multi-Agente Open Source' : 'Tu Asistente de IA Personal'}
                    </span>
                </div>

                <h1 className="hero-title">
                    {isDev ? (
                        <>
                            <span className="text-gradient">Framework de Agentes</span>
                            <br />
                            <span className="text-accent-gradient">Autónomos e Inteligentes</span>
                        </>
                    ) : (
                        <>
                            <span className="text-gradient">Inteligencia Artificial</span>
                            <br />
                            <span className="text-accent-gradient">que Trabaja por Vos</span>
                        </>
                    )}
                </h1>

                <p className="hero-subtitle">
                    {isDev
                        ? 'ARGenteIA es un framework extensible en TypeScript con ejecución paralela de herramientas, RAG vectorial, streaming vía WebSockets, integración con OpenRouter y soporte multi-canal (Web + Telegram).'
                        : 'ARGenteIA es un asistente inteligente que puede buscar en la web, ejecutar tareas, recordarte cosas, leer archivos y mucho más. Todo desde una interfaz simple de chat, sin configuraciones complicadas.'
                    }
                </p>

                <div className="hero-actions">
                    <a href={DOWNLOAD_URL} className="btn-primary lg" download>
                        <Download size={18} />
                        Descargar
                    </a>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary lg">
                        <Github size={18} />
                        {isDev ? 'Ver Repositorio' : 'GitHub'}
                    </a>
                </div>

                <div className="hero-stats">
                    {isDev ? (
                        <>
                            <div className="stat-item">
                                <span className="stat-value">12+</span>
                                <span className="stat-label">Herramientas</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">TS</span>
                                <span className="stat-label">TypeScript</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">WS</span>
                                <span className="stat-label">WebSockets</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">RAG</span>
                                <span className="stat-label">Vectorial</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="stat-item">
                                <span className="stat-value">💬</span>
                                <span className="stat-label">Chat Natural</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">⚡</span>
                                <span className="stat-label">Instantáneo</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">🔒</span>
                                <span className="stat-label">Privado</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">🆓</span>
                                <span className="stat-label">Gratuito</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
