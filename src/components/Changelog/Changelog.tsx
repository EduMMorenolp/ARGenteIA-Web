import React, { useState } from 'react';
import { GitCommitHorizontal, Plus, Wrench, Bug, Loader, ChevronLeft, ChevronRight } from 'lucide-react';
import { useChangelog } from '../../hooks/useGitHubContent';
import './Changelog.css';

const Changelog: React.FC = () => {
    const { entries, loading, error } = useChangelog();
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => Math.max(0, c - 1));
    const next = () => setCurrent((c) => Math.min(entries.length - 1, c + 1));

    const entry = entries[current];

    return (
        <section id="changelog" className="changelog-section">
            <div className="changelog-container">
                <div className="section-header reveal">
                    <span className="section-tag">Changelog</span>
                    <h2 className="section-title text-gradient">Historial de Versiones</h2>
                    <p className="section-subtitle">
                        Evolución del proyecto con cada release. Datos obtenidos en tiempo real desde GitHub.
                    </p>
                </div>

                {loading && (
                    <div className="changelog-loading">
                        <Loader size={20} className="spin" />
                        <span>Cargando changelog desde GitHub...</span>
                    </div>
                )}

                {error && (
                    <div className="changelog-error">
                        No se pudo cargar el changelog: {error}
                    </div>
                )}

                {entry && (
                    <div className="changelog-carousel reveal">
                        {/* Navigation */}
                        <div className="carousel-nav">
                            <button
                                className="carousel-btn"
                                onClick={prev}
                                disabled={current === 0}
                                aria-label="Versión anterior"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <div className="carousel-indicator">
                                {entries.map((e, idx) => (
                                    <button
                                        key={idx}
                                        className={`carousel-dot ${idx === current ? 'active' : ''}`}
                                        onClick={() => setCurrent(idx)}
                                        title={`v${e.version}`}
                                    />
                                ))}
                            </div>

                            <button
                                className="carousel-btn"
                                onClick={next}
                                disabled={current === entries.length - 1}
                                aria-label="Versión siguiente"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        {/* Card */}
                        <div className="changelog-card">
                            <div className="changelog-header">
                                <div className="version-badge">
                                    <GitCommitHorizontal size={14} />
                                    <span>v{entry.version}</span>
                                </div>
                                <span className="changelog-date">{entry.date}</span>
                            </div>

                            <div className="changelog-body">
                                {entry.added.length > 0 && (
                                    <div className="changelog-group">
                                        <div className="group-label added"><Plus size={13} /> Añadido</div>
                                        <ul>
                                            {entry.added.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>
                                )}
                                {entry.improved.length > 0 && (
                                    <div className="changelog-group">
                                        <div className="group-label improved"><Wrench size={13} /> Mejorado</div>
                                        <ul>
                                            {entry.improved.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>
                                )}
                                {entry.fixed.length > 0 && (
                                    <div className="changelog-group">
                                        <div className="group-label fixed"><Bug size={13} /> Corregido</div>
                                        <ul>
                                            {entry.fixed.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Version counter */}
                        <div className="carousel-counter">
                            {current + 1} / {entries.length}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Changelog;
