import { styled } from 'styled-components';

export const Technologies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
`;

export const Content = styled.div`
  display: flex;
  padding: 5vh 0;
  justify-content: center;
  gap: 10vh;
  width: 80vw;
  flex-wrap: wrap;
  border-inline: 1px solid #5733a8;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const H3 = styled.h3`
  font-family: raleway_c;
  font-weight: 500;
  font-size: 4vh;
  line-height: 1;
`;
