import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 420px;
  height: 520px;
  margin: 40px auto;

  @media screen and (max-width: 460px) {
    margin-left: -1px !important;
  }
`;

export default Wrapper;
