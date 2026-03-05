import React from 'react';
import { Cpu, MessageSquare, Wrench, Layers, Send, Lightbulb, Reply, CheckCircle } from 'lucide-react';
import { useRole } from '../../context/RoleContext';
import './Architecture.css';

const devSteps = [
    {
        icon: <MessageSquare size={22} />,
        num: '01',
        title: 'Recepción',
        description: 'El mensaje llega vía WebSocket o Telegram y el gateway lo enruta al loop del agente.',
        color: 'var(--accent)',
        bg: 'rgba(79, 140, 255, 0.1)',
    },
    {
        icon: <Cpu size={22} />,
        num: '02',
        title: 'Razonamiento',
        description: 'Prompt con memoria, contexto RAG y selección de modelo via OpenRouter.',
        color: '#a855f7',
        bg: 'rgba(168, 85, 247, 0.1)',
    },
    {
        icon: <Wrench size={22} />,
        num: '03',
        title: 'Ejecución',
        description: 'Tool calls en paralelo: bash, web_search, read_file, delegate_task.',
        color: '#f97316',
        bg: 'rgba(249, 115, 22, 0.1)',
    },
    {
        icon: <Layers size={22} />,
        num: '04',
        title: 'Respuesta',
        description: 'Streaming chunk-by-chunk por WebSocket, persistencia en SQLite.',
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.1)',
    },
];

const userSteps = [
    {
        icon: <Send size={22} />,
        num: '01',
        title: 'Escribís',
        description: 'Mandás tu mensaje desde el chat, como si hablaras con un amigo.',
        color: 'var(--accent)',
        bg: 'rgba(79, 140, 255, 0.1)',
    },
    {
        icon: <Lightbulb size={22} />,
        num: '02',
        title: 'Piensa',
        description: 'La IA entiende lo que necesitás y decide cómo ayudarte.',
        color: '#a855f7',
        bg: 'rgba(168, 85, 247, 0.1)',
    },
    {
        icon: <CheckCircle size={22} />,
        num: '03',
        title: 'Actúa',
        description: 'Busca en la web, lee archivos o ejecuta tareas automáticamente.',
        color: '#f97316',
        bg: 'rgba(249, 115, 22, 0.1)',
    },
    {
        icon: <Reply size={22} />,
        num: '04',
        title: 'Responde',
        description: 'Te da la respuesta al instante, clara y directa.',
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.1)',
    },
];

const Architecture: React.FC = () => {
    const { role } = useRole();
    const isDev = role === 'developer';
    const steps = isDev ? devSteps : userSteps;

    return (
        <section id="architecture" className="arch-section">
            <div className="arch-container">
                <div className="section-header reveal">
                    <span className="section-tag">{isDev ? 'Arquitectura' : 'Así Funciona'}</span>
                    <h2 className="section-title text-gradient">
                        {isDev ? 'Pipeline del Agente' : '4 Pasos Simples'}
                    </h2>
                    <p className="section-subtitle">
                        {isDev
                            ? 'Flujo inteligente de 4 etapas con trazabilidad completa.'
                            : 'Tan fácil como mandar un mensaje. La IA hace el trabajo pesado.'
                        }
                    </p>
                </div>

                <div className="arch-grid">
                    {steps.map((step, idx) => (
                        <div className="arch-card reveal" key={idx} style={{ animationDelay: `${idx * 0.08}s` }}>
                            <div className="card-num" style={{ color: step.color }}>{step.num}</div>
                            <div className="card-icon" style={{ color: step.color, background: step.bg }}>
                                {step.icon}
                            </div>
                            <div className="card-info">
                                <h3 className="card-title">{step.title}</h3>
                                <p className="card-desc">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Architecture;
