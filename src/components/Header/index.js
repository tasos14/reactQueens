import { useQueensContext } from 'components/App/context';
import React from 'react';
import Moves from './Moves';
import DropDown from './DropDown';
import Switch from './Switch';
import * as Styles from './styles';

function Header() {
    const {reset} = useQueensContext();

    return (
        <>
            <Styles.Heading>
                <Styles.Title>n-Queens</Styles.Title>
                <Moves />
            </Styles.Heading>

            <Styles.Instructions>
                <Styles.Text>
                    Place all the queens on the board so that <br />
                    no two queens threaten each other !
                </Styles.Text>

                <Styles.Restart onClick={() => reset()}>
                    Reset<i className="fa fa-repeat" aria-hidden="true"></i>
                </Styles.Restart>

                <DropDown />

                <Switch />
            </Styles.Instructions>
        </>
    );
}

export default Header;
