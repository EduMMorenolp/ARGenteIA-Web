import React from 'react';
import { User, Code2 } from 'lucide-react';
import { useRole } from '../../context/RoleContext';
import './RoleModal.css';

const RoleModal: React.FC = () => {
    const { role, setRole } = useRole();

    if (role) return null;

    return (
        <div className="role-overlay">
            <div className="role-modal-bg">
                <div className="role-glow role-glow-1"></div>
                <div className="role-glow role-glow-2"></div>
            </div>

            <div className="role-modal">
                <div className="role-logo">
                    <div className="role-logo-mark">IA</div>
                </div>
                <h1 className="role-title">Bienvenido a <span className="text-accent-gradient">ARGenteIA</span></h1>
                <p className="role-subtitle">
                    Seleccioná tu perfil para personalizar tu experiencia de navegación.
                </p>

                <div className="role-cards">
                    <button className="role-card" onClick={() => setRole('user')}>
                        <div className="role-card-icon user-icon">
                            <User size={28} />
                        </div>
                        <h3 className="role-card-title">Soy Usuario</h3>
                        <p className="role-card-desc">
                            Quiero conocer qué hace ARGenteIA y cómo puede ayudarme en mi día a día.
                        </p>
                        <span className="role-card-tag">Experiencia simplificada</span>
                    </button>

                    <button className="role-card" onClick={() => setRole('developer')}>
                        <div className="role-card-icon dev-icon">
                            <Code2 size={28} />
                        </div>
                        <h3 className="role-card-title">Soy Desarrollador</h3>
                        <p className="role-card-desc">
                            Quiero ver la arquitectura técnica, el stack y cómo contribuir al proyecto.
                        </p>
                        <span className="role-card-tag">Detalles técnicos</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoleModal;
