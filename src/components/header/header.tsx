import { ReactElement } from 'react';
import * as Styles from './styles';
import useQueensContext from '../context/useQueensContext';
import { Moves } from './moves/moves';
import { Switch } from './switch/switch';
import { DropDown } from './dropDown/dropDown';

export function Header(): ReactElement {
    const { reset } = useQueensContext();

    return (
        <Styles.Header>
            <Styles.Heading>
                <Styles.Title>n-Queens</Styles.Title>
                <Moves />
            </Styles.Heading>

            <Styles.Instructions>
                <Styles.Text>
                    Place all the queens on the board so that <br />
                    no two queens threaten each other !
                </Styles.Text>

                <Styles.Actions>
                    <Styles.Restart onClick={() => reset()}>
                        Reset<i className="fa fa-repeat" aria-hidden="true"></i>
                    </Styles.Restart>

                    <DropDown />

                    <Switch />
                </Styles.Actions>
            </Styles.Instructions>
        </Styles.Header>
    );
}
