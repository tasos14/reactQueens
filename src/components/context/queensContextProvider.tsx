import React, { ReactNode, useEffect } from 'react';
import axios from 'axios';
import { QueensContext } from './queensContext';

function drawRedBlocks(row: number, col: number, gridSize: number, redBlocks: number[]): number[] {
    let absDist;
    const _redBlocks = redBlocks.slice(0);

    for (let i = 0; i < gridSize; i++) {
        absDist = Math.abs(i - col);

        _redBlocks[gridSize * row + i] = 1;
        _redBlocks[gridSize * i + col] = 1;
        for (let j = 0; j < gridSize; j++) {
            if (j === row - absDist || j === row + absDist) {
                _redBlocks[gridSize * j + i] = 1;
            }
        }
    }
    _redBlocks[gridSize * row + col] = 0;

    return _redBlocks;
}

function removeRedBlocks(row: number, col: number, gridSize: number, redBlocks: number[], cols: number[]): number[] {
    let _redBlocks = redBlocks.slice(0);

    for (let i = 0; i < gridSize; i++) {
        _redBlocks[gridSize * row + i] = 0;
        _redBlocks[gridSize * i + col] = 0;
        for (let j = 0; j < gridSize; j++) {
            _redBlocks[gridSize * j + i] = 0;
        }
    }

    for (let i = 0; i < gridSize; i++) {
        if (cols[i] !== 0) {
            _redBlocks = drawRedBlocks(cols[i] - 1, i, gridSize, _redBlocks);
        }
    }

    return _redBlocks;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function loadFromStorage(key: string, defaultValue: any): any {
    const state = JSON.parse(localStorage.getItem('state') || 'null');

    if (state === null) {
        return defaultValue;
    }

    return state[key] !== undefined ? state[key] : defaultValue;
}

interface QueensContextProviderProps {
    children: ReactNode;
}

export const QueensContextProvider: React.FC<QueensContextProviderProps> = ({ children }) => {
    const [gridSize, setGridSize] = React.useState(loadFromStorage('gridSize', 4));
    const [moves, setMoves] = React.useState(loadFromStorage('moves', 0));
    const [cols, setCols] = React.useState(loadFromStorage('cols', [0, 0, 0, 0]));
    const [rows, setRows] = React.useState(loadFromStorage('rows', [0, 0, 0, 0]));
    const [redBlocks, setRedBlocks] = React.useState(
        loadFromStorage('redBlocks', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    );
    const [activeQueens, setActiveQueens] = React.useState(loadFromStorage('activeQueens', 0));
    const [gameOver, setGameOver] = React.useState(loadFromStorage('gameOver', false));
    const [highlight, setHighlight] = React.useState(loadFromStorage('highlight', true));

    const reset = () => {
        setCols([...Array(gridSize)].map(() => 0));
        setRows([...Array(gridSize)].map(() => 0));
        setRedBlocks([...Array(gridSize * gridSize)].map(() => 0));
        setActiveQueens(0);
    };

    const newGame = () => {
        setCols([...Array(gridSize)].map(() => 0));
        setRows([...Array(gridSize)].map(() => 0));
        setRedBlocks([...Array(gridSize * gridSize)].map(() => 0));
        setActiveQueens(0);
        setGameOver(false);
        setMoves(0);
    };

    const changeGrid = (newGridSize: number) => {
        setCols([...Array(newGridSize)].map(() => 0));
        setRows([...Array(newGridSize)].map(() => 0));
        setRedBlocks([...Array(newGridSize * newGridSize)].map(() => 0));
        setGridSize(newGridSize);
        setActiveQueens(0);
        setGameOver(false);
        setMoves(0);
    };

    const moveQueen = (id: string) => {
        let row;
        let col;
        if (id.length === 2) {
            row = Number(id.charAt(0));
            col = Number(id.charAt(1));
        } else {
            row = Number(id.charAt(1));
            col = Number(id.charAt(2));
        }

        const newRows = rows;
        const newCols = cols;
        let newRedBlocks;
        // when you click a tile for the first time on a column
        if (cols[col - 1] === 0) {
            newCols[col - 1] = row;
            newRows[row - 1] = col;
            newRedBlocks = drawRedBlocks(row - 1, col - 1, gridSize, redBlocks);

            setCols(newCols);
            setRows(newRows);
            setRedBlocks(newRedBlocks);
            setActiveQueens(activeQueens + 1);
            setMoves(moves + 1);

            return;
        }

        // when you click a tile with a queen on
        if (cols[col - 1] === row) {
            newCols[col - 1] = 0;
            newRows[row - 1] = 0;
            newRedBlocks = removeRedBlocks(row - 1, col - 1, gridSize, redBlocks, cols);

            setCols(newCols);
            setRows(newRows);
            setRedBlocks(newRedBlocks);
            setActiveQueens(activeQueens - 1);
            return;
        }

        // when you have already clicked a tile on that column
        const prevRow = cols[col - 1];
        newCols[col - 1] = row;
        newRows[row - 1] = col;
        newRedBlocks = removeRedBlocks(prevRow - 1, col - 1, gridSize, redBlocks, cols);

        setCols(newCols);
        setRows(newRows);
        setRedBlocks(newRedBlocks);
        setMoves(moves + 1);
    };

    useEffect(() => {
        if (activeQueens === gridSize && !gameOver) {
            axios
                .post(import.meta.env.VITE_PENGINE_URL || 'http://localhost:3000/', {
                    size: gridSize,
                    queens: cols,
                })
                .then(({ data: { result } }) => {
                    if (result && !gameOver) {
                        setGameOver(true);
                    }
                })
                .catch((err) => console.log('Error: \n' + err));
        }
        localStorage.setItem(
            'state',
            JSON.stringify({
                gridSize,
                moves,
                cols,
                rows,
                redBlocks,
                activeQueens,
                gameOver,
                highlight,
            })
        );
    });

    return (
        <QueensContext.Provider
            value={{
                gridSize,
                moves,
                cols,
                rows,
                redBlocks,
                activeQueens,
                gameOver,
                highlight,
                setGridSize,
                setMoves,
                setCols,
                setRows,
                setRedBlocks,
                setActiveQueens,
                setGameOver,
                setHighlight,
                reset,
                newGame,
                changeGrid,
                moveQueen,
            }}
        >
            {children}
        </QueensContext.Provider>
    );
};
