import React from 'react';

interface QueensContextProps {
    gridSize: number;
    moves: number;
    cols: number[];
    rows: number[];
    redBlocks: number[];
    activeQueens: number;
    gameOver: boolean;
    highlight: boolean;
    isCalculating: boolean;
    setGridSize: React.Dispatch<React.SetStateAction<number>>;
    setMoves: React.Dispatch<React.SetStateAction<number>>;
    setCols: React.Dispatch<React.SetStateAction<number[]>>;
    setRows: React.Dispatch<React.SetStateAction<number[]>>;
    setRedBlocks: React.Dispatch<React.SetStateAction<number[]>>;
    setActiveQueens: React.Dispatch<React.SetStateAction<number>>;
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    setHighlight: React.Dispatch<React.SetStateAction<boolean>>;
    reset: () => void;
    newGame: () => void;
    changeGrid: (newGridSize: number) => void;
    moveQueen: (id: string) => void;
}

export const QueensContext = React.createContext<QueensContextProps | null>(null);
