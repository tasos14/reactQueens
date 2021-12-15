import styled from 'styled-components';

const List = styled.ul`
    margin-top: 1px;
    position: absolute;
    display: ${(props) => (props.open ? 'block' : 'none')};
    min-width: 74px;
    background: #8f7a66;
    top: 100%;
    left: 0;
    z-index: 1000;
    float: left;
    padding: 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);

    & li a {
        cursor: pointer;
        text-decoration: none;
        display: block;
        padding: 3px 20px;
        color: #333;
        white-space: nowrap;

        &:hover {
            background-color: #f5f5f5;
        }
    }
`;

export default List;
