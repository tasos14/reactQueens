import { ReactElement, useState } from 'react';
import * as Styles from './styles';
import useQueensContext from '../../context/useQueensContext';

export function DropDown(): ReactElement {
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
                            id={i.toString()}
                        >{`${i + 4}x${i + 4}`}</div>
                    </li>
                ))}
            </Styles.List>
        </Styles.Wrapper>
    );
}
