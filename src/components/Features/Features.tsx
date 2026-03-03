import React from 'react';
import { Bot, Database, Zap, Shield, Terminal, Globe, Brain, Calendar, MessageCircle, Search, FileText, Bell, Lock, Image, Smile, CloudSun } from 'lucide-react';
import { useRole } from '../../context/RoleContext';
import './Features.css';

const devFeatures = [
    {
        icon: <Bot size={24} />,
        title: 'Agentes Expertos',
        description: 'Sistema multi-agente con delegación de tareas. Cada experto tiene su propio prompt, herramientas habilitadas y restricciones de contexto.',
        color: 'var(--accent)',
        bg: 'rgba(79, 140, 255, 0.12)',
    },
    {
        icon: <Database size={24} />,
        title: 'RAG Vectorial',
        description: 'Retrieval Augmented Generation con embeddings vectoriales. Tool Retrieval inteligente por similaridad coseno para optimizar el contexto.',
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.12)',
    },
    {
        icon: <Zap size={24} />,
        title: 'Streaming WebSocket',
        description: 'Protocolo bidireccional con chunks en tiempo real. Gateway centralizado que enruta entre WebChat y Telegram.',
        color: '#facc15',
        bg: 'rgba(250, 204, 21, 0.12)',
    },
    {
        icon: <Shield size={24} />,
        title: 'OpenRouter Integration',
        description: 'Orquestador dinámico de modelos LLM. Búsqueda, selección y cambio de modelo en caliente desde la interfaz.',
        color: '#a855f7',
        bg: 'rgba(168, 85, 247, 0.12)',
    },
    {
        icon: <Terminal size={24} />,
        title: 'Tool Execution Engine',
        description: 'Registro modular de herramientas con ejecución paralela. Bash, web search, read/write files, screenshots, weather y más.',
        color: '#f97316',
        bg: 'rgba(249, 115, 22, 0.12)',
    },
    {
        icon: <Globe size={24} />,
        title: 'Multi-Canal',
        description: 'Arquitectura de canales desacoplada. WebChat con React y Telegram Bot API, ambos conectados al mismo gateway.',
        color: '#06b6d4',
        bg: 'rgba(6, 182, 212, 0.12)',
    },
    {
        icon: <Brain size={24} />,
        title: 'Memoria Persistente',
        description: 'SQLite con módulos para sesiones, mensajes, expertos, modelos, stats y RAG. Memoria a largo plazo con embeddings.',
        color: '#ec4899',
        bg: 'rgba(236, 72, 153, 0.12)',
    },
    {
        icon: <Calendar size={24} />,
        title: 'Scheduler',
        description: 'Sistema de tareas programadas persistido en base de datos. Los agentes crean recordatorios y acciones automáticas.',
        color: '#84cc16',
        bg: 'rgba(132, 204, 22, 0.12)',
    },
];

const userFeatures = [
    {
        icon: <MessageCircle size={24} />,
        title: 'Chat Natural',
        description: 'Hablale como a una persona. Preguntá lo que quieras y recibí respuestas claras e instantáneas.',
        color: 'var(--accent)',
        bg: 'rgba(79, 140, 255, 0.12)',
    },
    {
        icon: <Search size={24} />,
        title: 'Búsqueda Web',
        description: 'Tu IA puede buscar información actualizada en internet y darte un resumen directo en el chat.',
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.12)',
    },
    {
        icon: <FileText size={24} />,
        title: 'Lee tus Archivos',
        description: 'Subí documentos y dejá que la IA los analice, responda preguntas sobre ellos o los resuma.',
        color: '#facc15',
        bg: 'rgba(250, 204, 21, 0.12)',
    },
    {
        icon: <Bell size={24} />,
        title: 'Recordatorios',
        description: 'Pedile que te recuerde cosas en ciertos horarios. Funciona como tu asistente personal.',
        color: '#a855f7',
        bg: 'rgba(168, 85, 247, 0.12)',
    },
    {
        icon: <Smile size={24} />,
        title: 'Múltiples Personalidades',
        description: 'Creá expertos con diferentes estilos: uno serio, uno divertido, uno especializado en código.',
        color: '#f97316',
        bg: 'rgba(249, 115, 22, 0.12)',
    },
    {
        icon: <Lock size={24} />,
        title: 'Privado y Seguro',
        description: 'Todo corre en tu máquina. Tus datos nunca salen de tu control, sin servidores externos.',
        color: '#06b6d4',
        bg: 'rgba(6, 182, 212, 0.12)',
    },
    {
        icon: <Image size={24} />,
        title: 'Screenshots',
        description: 'Pedile que capture pantallas y las analice. Útil para reportar bugs o documentar.',
        color: '#ec4899',
        bg: 'rgba(236, 72, 153, 0.12)',
    },
    {
        icon: <CloudSun size={24} />,
        title: 'Clima y Más',
        description: 'Consultá el clima, hacé cálculos, generá textos o cualquier tarea cotidiana desde el chat.',
        color: '#84cc16',
        bg: 'rgba(132, 204, 22, 0.12)',
    },
];

const Features: React.FC = () => {
    const { role } = useRole();
    const isDev = role === 'developer';
    const features = isDev ? devFeatures : userFeatures;

    return (
        <section id="features" className="features-section">
            <div className="features-container">
                <div className="section-header reveal">
                    <span className="section-tag">Características</span>
                    <h2 className="section-title text-gradient">
                        {isDev ? 'Capacidades del Núcleo' : '¿Qué Puede Hacer por Vos?'}
                    </h2>
                    <p className="section-subtitle">
                        {isDev
                            ? 'Un ecosistema modular de herramientas, agentes y memoria que trabajan en conjunto para resolver tareas complejas de forma autónoma.'
                            : 'Un asistente inteligente que se adapta a tus necesidades, todo desde una interfaz de chat simple y sin complicaciones.'
                        }
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, idx) => (
                        <div className="feature-card reveal" key={idx} style={{ animationDelay: `${idx * 0.08}s` }}>
                            <div className="feature-card-glow" style={{ background: feature.color }}></div>
                            <div
                                className="feature-icon-wrapper"
                                style={{ color: feature.color, background: feature.bg }}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
