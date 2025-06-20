import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 2vw;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4vh;
  width: 20vh;
  height: 6vh;
  font-size: 2.1vh;
  line-height: 2.1vh;
  background-color: rgba(17, 11, 49, 0.7);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20%;
  gap: 1vh;
  border: 1px solid #3a4a97;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background-color: rgba(51, 24, 112, 0.7);
    border: 1px solid #fff;
    box-shadow: 0 0 7px #7f4efb;
  }
`;

export const ProjectsIcon = styled.img`
  height: 5vh;
`;

export const ContactsIcon = styled.img`
  height: 4vh;
`;

export const Wrapper = styled.div<{ height?: number}>`
  height: calc(1vh * 320);
  @media (max-width: 768px) {
    height: ${({ height }) => height && `calc(${height}px * 3.1)`};
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  perspective: calc(1vh * 110);
  @media (max-width: 768px) {
    perspective: calc(1vw * 150);
  }
`;

export const Gallery = styled.section`
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
`;

export const H2 = styled.h2`
  font-family: raleway_c;
  font-weight: 100;
  text-align: left;
  font-size: 9vh;
  line-height: 1.3;
  width: min-content;
  margin-right: 50vh;
  padding: 64px;
  background: linear-gradient(to bottom right, hsl(0, 0%, 50%) 0, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 50%) 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const H3 = styled.h3`
  font-family: raleway_c;
  font-weight: 500;
  font-size: 4vh;
  line-height: 1;
`;

export const P = styled.p`
  font-size: 3vh;
  @media (max-width: 768px) {
    font-size: 2.5vh;
  }
`;

export const ImageLeft = styled.img`
  position: relative;
  width: 45vh;
  margin: 10vh 0 0 40vh;
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0.1)));
  opacity: 1;
  @media (max-width: 768px) {
    width: 25vh;
    margin: 0;
  }
`;

export const ImageRight = styled.img`
  position: relative;
  width: 60vh;
  margin: 0vh 70vh 0 0;
  border-radius: 2vh;
  border: 1px solid white;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vh;
`;

export const TextRight = styled.div`
  width: 95vh;
  margin-left: 100vh;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const TextLeft = styled.div`
  width: 90vh;
  margin-right: 80vh;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Square = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 2vh;
  height: 2vh;
  padding: 15px 15px 20px;
  background-color: #5733a8;
  border: 1px solid #fff;
  border-radius: 5px;
  font-weight: 700;
  @media (max-width: 768px) {
    width: 1vh;
    height: 1vh;
  }
`;
