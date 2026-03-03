import React, { createContext, useContext, useState } from 'react';

export type UserRole = 'user' | 'developer' | null;

interface RoleContextType {
    role: UserRole;
    setRole: (role: UserRole) => void;
}

const RoleContext = createContext<RoleContextType>({ role: null, setRole: () => { } });

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [role, setRole] = useState<UserRole>(null);
    return (
        <RoleContext.Provider value={{ role, setRole }}>
            {children}
        </RoleContext.Provider>
    );
};

export const useRole = () => useContext(RoleContext);
