/* eslint-disable no-unused-expressions */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body{ 
    margin: 0;
    padding: 0;
    background: #faf8ef;
    color: #776E65;
    font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;
    font-size: 18px;
    line-height: 1.42857143
  }

  * {
    box-sizing: border-box;
  }

  h4, h5, h6 {
    margin: 10px 0;
    line-height: 1.1;
  }

  h4 {
    font-size: 18px;
  }

  hr {
    border-top: 1px solid #d8d4d0;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 0;
  }

  p {
    margin: 0 0 10px;
  }

  a {
    color: #776E65;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 500;
  }

  a:hover{
    color: #776E65;
  }

  @media screen and (max-width: 845px) {
    .github-corner {
      display: none;
    }
  }
`;

export default GlobalStyle;
