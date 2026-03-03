import React from 'react';
import { FileCode, Loader, AlertCircle } from 'lucide-react';
import { useDocs } from '../../hooks/useGitHubContent';
import type { DocSection } from '../../hooks/useGitHubContent';
import './TechDocs.css';

const SectionBlock: React.FC<{ section: DocSection }> = ({ section }) => (
    <div className="techdocs-block reveal">
        <h3 className="block-title">
            <FileCode size={18} /> {section.title}
        </h3>
        <div className="doc-content">
            {section.description && (
                <p className="doc-description">{section.description}</p>
            )}
            {section.items.map((item, i) => {
                // Sub-header items (label only, no text)
                if (item.label && !item.text) {
                    return <h4 className="doc-subheader" key={i}>{item.label}</h4>;
                }
                // Labeled items (label + text)
                if (item.label) {
                    return (
                        <div className="doc-item" key={i}>
                            <code className="doc-item-name">{item.label}</code>
                            <span className="doc-item-desc">{item.text}</span>
                        </div>
                    );
                }
                // Plain items
                return (
                    <div className="doc-item" key={i}>
                        <span className="doc-item-bullet">›</span>
                        <span className="doc-item-desc">{item.text}</span>
                    </div>
                );
            })}
        </div>
    </div>
);

const TechDocs: React.FC = () => {
    const { sections, loading, error } = useDocs(['ARQUITECTURA.md', 'TECHNICAL.md']);

    return (
        <section id="tools" className="techdocs-section">
            <div className="techdocs-container">
                <div className="section-header reveal">
                    <span className="section-tag">Documentación Técnica</span>
                    <h2 className="section-title text-gradient">Bajo el Capó</h2>
                    <p className="section-subtitle">
                        Documentación obtenida en tiempo real desde el repositorio en GitHub.
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

                {sections.map((section, idx) => (
                    <SectionBlock section={section} key={idx} />
                ))}
            </div>
        </section>
    );
};

export default TechDocs;
