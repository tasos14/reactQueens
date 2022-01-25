import styled from 'styled-components';

const Queen = styled.img`
    float: left;
    width: 90%;
    opacity: ${(props) => (props.fade ? '0.3' : '1')};
    transition: opacity 0.15s linear;
`;

export default Queen;
