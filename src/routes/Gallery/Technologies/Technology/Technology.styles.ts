import { styled } from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vh;
  @media (max-width: 768px) {
    gap: 2vh;
  }
`;

export const Label = styled.div`
  font-size: 2.5vh;
  font-weight: 600;
  color: white;
`;

export const Text = styled.div`
  font-size: 0.9vw;
  line-height: normal;
  padding: 1vh;
  background-color: rgba(51, 51, 51, 0.5);
  border-radius: 1vh;
  border: 1px solid #fff;
  @media (max-width: 768px) {
    font-size: 5vw;
    padding: 2vh;
  }
`;

export const Icon = styled.img`
  height: 2vw;
  @media (max-width: 768px) {
    height: 15vw;
  }
`;

export const Technology = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 18vw;
  height: 12vw;
  background-color: #5733a8;
  border: 2px solid white;
  border-radius: 2vh;
  padding: 1vw;
  gap: 1vw;
  @media (max-width: 768px) {
    height: 40vh;
    width: 80vw;
    gap: 4vw;
    padding: 4vw;
  }
`;
