import React from 'react';
import { ArrowRight, Heart, Download, Github } from 'lucide-react';
import { useRole } from '../../context/RoleContext';
import './CallToAction.css';

const MERCADOPAGO_URL = 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=28d98c980e904ecca443cf42b689a205';
const GITHUB_URL = 'https://github.com/EduMMorenolp/ARGenteIA';
const DOWNLOAD_URL = 'https://github.com/EduMMorenolp/ARGenteIA/archive/refs/heads/master.zip';

const CallToAction: React.FC = () => {
    const { role } = useRole();
    const isDev = role === 'developer';

    return (
        <section className="cta-section">
            <div className="cta-bg">
                <div className="cta-glow"></div>
            </div>
            <div className="cta-container reveal">
                <h2 className="cta-title">
                    {isDev ? (
                        <>¿Querés <span className="text-accent-gradient">contribuir</span> al proyecto?</>
                    ) : (
                        <>¿Listo para probar tu <span className="text-accent-gradient">asistente inteligente</span>?</>
                    )}
                </h2>
                <p className="cta-subtitle">
                    {isDev
                        ? 'ARGenteIA es open source. Podés contribuir con código, reportar issues o apoyar el proyecto con una donación.'
                        : 'Descargá ARGenteIA gratis, instalalo en minutos y empezá a usar tu IA personal desde el chat.'
                    }
                </p>
                <div className="cta-actions">
                    <a href={DOWNLOAD_URL} className="btn-primary lg" download>
                        <Download size={18} />
                        Descargar Ahora
                    </a>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary lg">
                        <Github size={18} />
                        Ver Repositorio
                    </a>
                </div>

                {/* Contribution card */}
                <div className="contribute-card reveal">
                    <div className="contribute-content">
                        <Heart size={20} className="contribute-heart" />
                        <div className="contribute-text">
                            <span className="contribute-title">Apoyá el Proyecto</span>
                            <span className="contribute-desc">
                                Si ARGenteIA te resulta útil, podés ayudarnos con una contribución para seguir desarrollándolo.
                            </span>
                        </div>
                    </div>
                    <a href={MERCADOPAGO_URL} target="_blank" rel="noopener noreferrer" className="btn-contribute">
                        <Heart size={16} />
                        Contribuir
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
