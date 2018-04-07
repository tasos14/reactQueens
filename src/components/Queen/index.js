import styled from 'styled-components';

const sizes = {
  4: {
    width: 95,
    height: 90,
  },
  5: {
    width: 74,
    height: 70,
  },
  6: {
    width: 60,
    height: 56,
  },
  7: {
    width: 50,
    height: 47,
  },
  8: {
    width: 42,
    height: 40,
  },
};

const Queen = styled.img`
  float: left;
  margin: 0 5px;
  width: ${props => `${sizes[props.boardSize].width}px`};
  height: ${props => `${sizes[props.boardSize].height}px`};
  opacity: ${props => (props.fade ? '0.3' : '1')};
  transition: opacity .15s linear;
`;

export default Queen;
