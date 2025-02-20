import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 470px) {
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    font-size: 70px;
    font-weight: bold;
    margin: 0;
    display: block;
    float: left;

    @media (max-width: 460px) {
        font-size: 50px !important;
    }
`;

export const Instructions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        margin-top: 5px;
        justify-content: flex-end;
    }
`;

export const Text = styled.div`
    float: left;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const Actions = styled.div`
    @media (max-width: 555px) and (max-height: 640px) {
        align-self: flex-end;
    }

    @media (max-width: 555px) {
        align-self: flex-end;
    }
`;

export const Restart = styled.button`
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
    width: 125px;
    font-size: inherit;

    & i {
        margin-left: 5px;
    }
`;
