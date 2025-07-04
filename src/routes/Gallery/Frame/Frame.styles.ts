import styled from 'styled-components';

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.75s cubic-bezier(0.75, 0.5, 0, 1), opacity 0.75s ease;
  will-change: transform;
  transform-style: preserve-3d;
  &:nth-child(n + 4) {
    background-color: rgb(0 0 0 / 0.87);
  }
  &:nth-child(2),
  &:nth-child(4) {
    background-color: rgb(0 0 0 / 1);
  }
  @media (max-width: 768px) {
    &:nth-child(n) {
      background-color: rgb(0 0 0 / 1);
    }
  }
`;
