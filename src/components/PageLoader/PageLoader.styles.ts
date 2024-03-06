import styled, { css } from 'styled-components';

export const LoaderContainer = styled.div<{ isPageLoaded: boolean }>`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 9999;
  top: 0;

  background-color: black;
  overflow: hidden;

  ${({ isPageLoaded }) =>
    isPageLoaded &&
    css`
      animation: collapse 0.7s ease forwards;
    `}
`;
