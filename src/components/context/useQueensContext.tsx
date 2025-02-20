import React from 'react';
import { QueensContext } from './queensContext';

const useQueensContext = () => {
    const context = React.useContext(QueensContext);
    if (!context) {
        throw new Error('useQueensContext must be used within a QueensContextProvider');
    }
    return context;
};

export default useQueensContext;
