import styled, { keyframes } from 'styled-components';

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
  background-color: ${props => props.backgroundColor};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, .2);
  min-height: 100vh;
  padding: 40px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const loadingAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Preloader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PreloaderImage = styled.img`
  animation: ${loadingAnimation} 2s infinite ease-in-out;
  width: 100%;
  max-width: 300px;
  max-height: 300px;
`;
