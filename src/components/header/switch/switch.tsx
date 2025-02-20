import { ReactElement } from 'react';
import * as Styles from './styles';
import useQueensContext from '../../context/useQueensContext';

export const Switch = (): ReactElement => {
    const { highlight, setHighlight } = useQueensContext();

    return (
        <Styles.Wrapper onClick={() => setHighlight(!highlight)}>
            <Styles.Slider $on={highlight} />
        </Styles.Wrapper>
    );
};
