import React from 'react';
import { Cpu, MessageSquare, Wrench, Layers, ArrowRight, Send, Lightbulb, Reply, CheckCircle } from 'lucide-react';
import { useRole } from '../../context/RoleContext';
import './Architecture.css';

const devSteps = [
    {
        icon: <MessageSquare size={24} />,
        num: '01',
        title: 'Recepción',
        description: 'El mensaje se recibe vía WebSocket o Telegram API y el gateway lo enruta al loop del agente.',
        color: 'var(--accent)',
        bg: 'rgba(79, 140, 255, 0.1)',
    },
    {
        icon: <Cpu size={24} />,
        num: '02',
        title: 'Razonamiento',
        description: 'Se construye el prompt con memoria, contexto RAG (cosine similarity) y se selecciona el modelo via OpenRouter.',
        color: '#a855f7',
        bg: 'rgba(168, 85, 247, 0.1)',
    },
    {
        icon: <Wrench size={24} />,
        num: '03',
        title: 'Ejecución',
        description: 'El engine ejecuta tool calls en paralelo: bash, web_search, read_file, delegate_task y más.',
        color: '#f97316',
        bg: 'rgba(249, 115, 22, 0.1)',
    },
    {
        icon: <Layers size={24} />,
        num: '04',
        title: 'Respuesta',
        description: 'Se genera vía streaming chunk-by-chunk por WebSocket y se persiste en SQLite (messages, stats).',
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.1)',
    },
];

const userSteps = [
    {
        icon: <Send size={24} />,
        num: '01',
        title: 'Escribís',
        description: 'Mandás tu mensaje o pregunta desde el chat, como si hablaras con un amigo.',
        color: 'var(--accent)',
        bg: 'rgba(79, 140, 255, 0.1)',
    },
    {
        icon: <Lightbulb size={24} />,
        num: '02',
        title: 'Piensa',
        description: 'La IA entiende lo que necesitás y decide cómo ayudarte de la mejor manera.',
        color: '#a855f7',
        bg: 'rgba(168, 85, 247, 0.1)',
    },
    {
        icon: <CheckCircle size={24} />,
        num: '03',
        title: 'Actúa',
        description: 'Si necesita buscar en la web, leer un archivo o ejecutar algo, lo hace automáticamente.',
        color: '#f97316',
        bg: 'rgba(249, 115, 22, 0.1)',
    },
    {
        icon: <Reply size={24} />,
        num: '04',
        title: 'Responde',
        description: 'Te da la respuesta al instante, clara y directa, con toda la info que necesitás.',
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
                            ? 'Un flujo inteligente de 4 etapas con trazabilidad completa, desde la recepción hasta la persistencia.'
                            : 'Tan fácil como mandar un mensaje. La IA hace todo el trabajo pesado por vos.'
                        }
                    </p>
                </div>

                <div className="arch-pipeline">
                    {steps.map((step, idx) => (
                        <React.Fragment key={idx}>
                            <div className="arch-step reveal" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className="step-number" style={{ color: step.color }}>{step.num}</div>
                                <div className="step-icon" style={{ color: step.color, background: step.bg }}>
                                    {step.icon}
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.description}</p>
                            </div>
                            {idx < steps.length - 1 && (
                                <div className="step-arrow">
                                    <ArrowRight size={20} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Architecture;
