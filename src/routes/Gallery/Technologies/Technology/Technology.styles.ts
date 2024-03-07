import { styled } from 'styled-components';

export const Header = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vh;
`;

export const Label = styled.div`
  font-size: 2.5vh;
  font-weight: 600;
  color: white;
`;

export const Text = styled.div`
  font-size: 1.8vh;
  line-height: 2.5vh;
  padding: 1vh;
  background-color: rgba(51, 51, 51, 0.5);
  border-radius: 1vh;
`;

export const Icon = styled.img`
  width: 2vw;
`;

export const Technology = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 17vw;
  height: 22vh;
  background-color: #5733a8;
  border: 2px solid white;
  border-radius: 2vh;
  padding: 2vh;
  gap: 2vh;
`;
