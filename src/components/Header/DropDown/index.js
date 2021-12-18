/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useQueensContext } from 'components/App/context';
import * as Styles from './styles';

function DropDown() {
    const [open, setOpen] = useState(false);
    const { changeGrid } = useQueensContext();

    return (
        <Styles.Wrapper>
            <Styles.GridButton onClick={() => setOpen(!open)}>Grid</Styles.GridButton>
            <Styles.List open={open}>
                {[...Array(5)].map((_, i) => (
                    <li key={`grid${i + 4}`}>
                        <div
                            onClick={() => {
                                changeGrid(i + 4);
                                setOpen(false);
                            }}
                            id={i}
                        >{`${i + 4}x${i + 4}`}</div>
                    </li>
                ))}
            </Styles.List>
        </Styles.Wrapper>
    );
}

export default DropDown;
