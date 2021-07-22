import styled, { keyframes } from 'styled-components';

const dualRing = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const S = {};

S.LoaderContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.Ring = styled.div`
  width: 80px;
  height: 80px;
  :after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${dualRing} 1.2s linear infinite;
  }
`;

function Loader() {
  return (
    <S.LoaderContainer>
      <S.Ring></S.Ring>
    </S.LoaderContainer>
  );
}

export default Loader;
