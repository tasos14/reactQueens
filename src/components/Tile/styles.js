import styled from 'styled-components';

const sizes = {
  4: {
    width: 105,
    height: 105,
  },
  5: {
    width: 84,
    height: 84,
  },
  6: {
    width: 70,
    height: 70,
  },
  7: {
    width: 60,
    height: 60,
  },
  8: {
    width: 52.5,
    height: 52.5,
  },
};

const Wrapper = styled.div`
  float: left;
  width: ${props => `${sizes[props.boardSize].width}px`};
  height: ${props => `${sizes[props.boardSize].height}px`};
  filter: ${props => (props.isRed ? 'saturate(50%) brightness(63%)' : 'none')};
`;

export default Wrapper;
