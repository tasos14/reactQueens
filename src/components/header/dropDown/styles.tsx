import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    display: block;
    float: right;
    margin-right: 0.1em;
`;

export const GridButton = styled.button`
    background: #8f7a66;
    border-radius: 3px;
    padding: 0 20px;
    text-decoration: none;
    color: #f9f6f2;
    height: 40px;
    line-height: 42px;
    cursor: pointer;
    display: block;
    text-align: center;
    float: right;
    border: none;
    font-size: inherit;
`;

export const List = styled.ul<{ open: boolean }>`
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

    & li div {
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
