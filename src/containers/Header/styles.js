import styled from 'styled-components';

export const Heading = styled.div`
  margin-top: 1em;
  margin-right: -15px;
  margin-left: -15px;

  &::after {
    clear: both;
    display: table;
    content: ' ';
  }

  &::before {
    display: table;
    content: ' ';
  }
`;

export const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin: 0;
  display: block;
  float: left;

  @media screen and(max-width: 460px) {
    font-size: 50px !important;
  }
`;

export const Instructions = styled.div`
  margin-top: 1em;
  margin-right: -15px;
  margin-left: -15px;

  &::after {
    clear: both;
    display: table;
    content: ' ';
  }

  &::before {
    display: table;
    content: ' ';
  }

  @media screen and(max-width: 460px) {
    margin-top: 5px;
  }
`;

export const Text = styled.div`
  float: left;

  @media screen and (max-width: 555px) and (max-height: 640px) {
    display: none;
  }

  @media screen and (max-width: 555px) {
    display: none;
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
