import { useContext } from 'react';
import { TotalContext } from '../context/TotalContext';

export const useTotal = () => {
    const context = useContext(TotalContext);
    if (!context) {
        throw new Error("useTotal debe ser usado dentro de un TotalProvider");
    }
    return context;
};
