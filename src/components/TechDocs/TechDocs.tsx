import React, { useState } from 'react';
import { FileCode, Loader, AlertCircle, ChevronDown } from 'lucide-react';
import { useDocs } from '../../hooks/useGitHubContent';
import type { DocSection } from '../../hooks/useGitHubContent';
import './TechDocs.css';

const SectionCard: React.FC<{ section: DocSection; isOpen: boolean; onToggle: () => void }> = ({ section, isOpen, onToggle }) => (
    <div className={`techdocs-card ${isOpen ? 'open' : ''}`}>
        <button className="card-header" onClick={onToggle}>
            <div className="card-header-left">
                <FileCode size={16} />
                <span className="card-header-title">{section.title}</span>
            </div>
            {section.description && !isOpen && (
                <span className="card-header-preview">{section.description.slice(0, 80)}{section.description.length > 80 ? '...' : ''}</span>
            )}
            <ChevronDown size={18} className={`card-chevron ${isOpen ? 'rotated' : ''}`} />
        </button>
        {isOpen && (
            <div className="card-body">
                {section.description && (
                    <p className="doc-description">{section.description}</p>
                )}
                {section.items.map((item, i) => {
                    if (item.label && !item.text) {
                        return <h4 className="doc-subheader" key={i}>{item.label}</h4>;
                    }
                    if (item.label) {
                        return (
                            <div className="doc-item" key={i}>
                                <code className="doc-item-name">{item.label}</code>
                                <span className="doc-item-desc">{item.text}</span>
                            </div>
                        );
                    }
                    return (
                        <div className="doc-item" key={i}>
                            <span className="doc-item-bullet">›</span>
                            <span className="doc-item-desc">{item.text}</span>
                        </div>
                    );
                })}
            </div>
        )}
    </div>
);

const TechDocs: React.FC = () => {
    const { sections, loading, error } = useDocs(['ARQUITECTURA.md', 'TECHNICAL.md']);
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <section id="tools" className="techdocs-section">
            <div className="techdocs-container">
                <div className="section-header reveal">
                    <span className="section-tag">Documentación Técnica</span>
                    <h2 className="section-title text-gradient">Bajo el Capó</h2>
                    <p className="section-subtitle">
                        Documentación en tiempo real desde GitHub. Hacé click en cada sección para expandir.
                    </p>
                </div>

                {loading && (
                    <div className="techdocs-loading">
                        <Loader size={20} className="spin" />
                        <span>Cargando docs desde GitHub...</span>
                    </div>
                )}

                {error && (
                    <div className="techdocs-error">
                        <AlertCircle size={16} />
                        <span>No se pudo cargar: {error}</span>
                    </div>
                )}

                <div className="techdocs-accordion">
                    {sections.map((section, idx) => (
                        <SectionCard
                            section={section}
                            key={idx}
                            isOpen={openIdx === idx}
                            onToggle={() => toggle(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechDocs;
