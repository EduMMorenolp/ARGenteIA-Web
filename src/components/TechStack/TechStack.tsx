import React from 'react';
import { useRole } from '../../context/RoleContext';
import './TechStack.css';

const devTechs = [
    { name: 'TypeScript', desc: 'Backend tipado y seguro', icon: '🔷' },
    { name: 'Node.js', desc: 'Runtime de alto rendimiento', icon: '🟢' },
    { name: 'React', desc: 'UI moderna y reactiva', icon: '⚛️' },
    { name: 'SQLite', desc: 'Base de datos embebida', icon: '🗃️' },
    { name: 'Vite', desc: 'Build ultrarrápido', icon: '⚡' },
    { name: 'OpenRouter', desc: 'Orquestador de LLMs', icon: '🤖' },
    { name: 'WebSockets', desc: 'Comunicación bidireccional', icon: '🔌' },
    { name: 'Telegram API', desc: 'Bot integrado', icon: '📱' },
];

const userTechs = [
    { name: 'Chat Web', desc: 'Desde cualquier navegador', icon: '💻' },
    { name: 'Telegram', desc: 'Usalo desde tu celular', icon: '📱' },
    { name: 'Privacidad', desc: 'Todo corre en tu PC', icon: '🔒' },
    { name: 'Gratis', desc: 'Open source y libre', icon: '🆓' },
    { name: 'Instantáneo', desc: 'Respuestas al momento', icon: '⚡' },
    { name: 'Multi-experto', desc: 'Distintas personalidades', icon: '🎭' },
    { name: 'Sin Límites', desc: 'Elegí tu modelo de IA', icon: '🤖' },
    { name: 'Recordatorios', desc: 'Que no se te olvide nada', icon: '⏰' },
];

const TechStack: React.FC = () => {
    const { role } = useRole();
    const isDev = role === 'developer';
    const techs = isDev ? devTechs : userTechs;

    return (
        <section id="tech" className="tech-section">
            <div className="tech-container">
                <div className="section-header reveal">
                    <span className="section-tag">{isDev ? 'Tech Stack' : 'Beneficios'}</span>
                    <h2 className="section-title text-gradient">
                        {isDev ? 'Construido para Escalar' : 'Todo lo que Necesitás'}
                    </h2>
                    <p className="section-subtitle">
                        {isDev
                            ? 'Tecnologías modernas que garantizan rendimiento, mantenibilidad y experiencia de desarrollador excepcional.'
                            : 'Una herramienta completa, privada y gratuita que se adapta a tu forma de trabajar.'
                        }
                    </p>
                </div>

                <div className="tech-grid">
                    {techs.map((tech, idx) => (
                        <div className="tech-item reveal" key={idx} style={{ animationDelay: `${idx * 0.05}s` }}>
                            <span className="tech-icon">{tech.icon}</span>
                            <div className="tech-info">
                                <span className="tech-name">{tech.name}</span>
                                <span className="tech-desc">{tech.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
