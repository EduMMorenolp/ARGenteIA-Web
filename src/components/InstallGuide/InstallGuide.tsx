import React from 'react';
import { Download, MousePointerClick, Settings, Rocket } from 'lucide-react';
import './InstallGuide.css';

const DOWNLOAD_URL = 'https://github.com/EduMMorenolp/ARGenteIA/archive/refs/heads/master.zip';

const steps = [
    {
        icon: <Download size={28} />,
        number: '01',
        title: 'Descargar',
        description: 'Descargá el proyecto desde GitHub. Es un archivo ZIP que descomprimís en cualquier carpeta.',
        color: '#4f8cff',
        bg: 'rgba(79, 140, 255, 0.12)',
        action: {
            label: 'Descargar ZIP',
            url: DOWNLOAD_URL,
        },
    },
    {
        icon: <MousePointerClick size={28} />,
        number: '02',
        title: 'Instalar',
        description: 'Hacé doble click en instalar.bat. Se instala todo automáticamente: Node.js, dependencias y configuración. Al terminar se abre el Server Manager.',
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.12)',
    },
    {
        icon: <Settings size={28} />,
        number: '03',
        title: 'Configurar',
        description: 'Editá config.json con tu API key desde el botón "Editar config.json" del panel. Podés obtener una gratis en OpenRouter o usar modelos locales con Ollama.',
        color: '#a855f7',
        bg: 'rgba(168, 85, 247, 0.12)',
    },
    {
        icon: <Rocket size={28} />,
        number: '04',
        title: 'Iniciar',
        description: 'Hacé click en "Iniciar Servidor" en el panel de control. Para volver a abrirlo después, ejecutá ARGenteIA.bat.',
        color: '#f97316',
        bg: 'rgba(249, 115, 22, 0.12)',
    },
];

const InstallGuide: React.FC = () => {
    return (
        <section id="install" className="install-section">
            <div className="install-container">
                <div className="section-header reveal">
                    <span className="section-tag">Instalación</span>
                    <h2 className="section-title text-gradient">
                        Listo en 4 Pasos
                    </h2>
                    <p className="section-subtitle">
                        Sin configuraciones complicadas. Descargá, hacé doble click, y tu asistente de IA está funcionando.
                    </p>
                </div>

                <div className="install-steps">
                    {steps.map((step, idx) => (
                        <div className="install-step reveal" key={idx} style={{ animationDelay: `${idx * 0.12}s` }}>
                            <div className="step-connector" />
                            <div className="step-number" style={{ color: step.color, borderColor: step.color }}>
                                {step.number}
                            </div>
                            <div className="step-icon" style={{ color: step.color, background: step.bg }}>
                                {step.icon}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.description}</p>
                            {step.action && (
                                <a href={step.action.url} className="step-action" style={{ color: step.color }} download>
                                    {step.action.label} →
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                <div className="install-note reveal">
                    <span className="note-icon">💡</span>
                    <p>
                        <strong>¿No tenés API key?</strong> Podés obtener una gratis en{' '}
                        <a href="https://openrouter.ai/keys" target="_blank" rel="noopener noreferrer">
                            OpenRouter
                        </a>{' '}
                        o usar modelos locales con{' '}
                        <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">
                            Ollama
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InstallGuide;
