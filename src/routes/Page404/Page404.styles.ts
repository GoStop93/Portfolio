import styled, { keyframes } from 'styled-components';
import sprite from '../../assets/images/nature-sprite.png';

const ani = keyframes`
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
`;

const ani2 = keyframes`
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
`;

export const ButtonPosition = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  translate: -50%;
`;

export const Page = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black;
  overflow: hidden;
`;

export const HeroImage = styled.img`
  position: absolute;
  width: 25vw;
  top: 0;
  left: 0;
  animation: moveFromLeft 7s linear infinite,  rotate360 10s linear infinite;
`;

export const Label = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  font-family: fira_mono, monospace;
  font-size: 8vw;
  letter-spacing: -7px;
  color: #fff;
`;

export const ButtonContainer = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  margin-top: 4vh;
  margin-left: 100%;
  transform: translateX(-100%);
  overflow: hidden;
  font-size: 25px;
  transition: 0.5s;
  letter-spacing: 1px;
  background-color: #fafafa;
  &:hover {
    border-radius: 35px;
  }
`;

export const ButtonText = styled.span`
  position: absolute;
  color: #000;
  text-align: center;
  width: 100%;
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 13px;
  overflow: hidden;
`;

export const Button = styled.button`
  width: 101%;
  height: 105%;
  font-size: 15px;
  margin-top: -1px;
  letter-spacing: 1px;
  background-image: url(${sprite});
  background-size: 2300% 100%;
  background-repeat: none;
  padding: 0;
  border: 0;
  color: #fff;
  cursor: pointer;
  -webkit-mask: url(${sprite});
  mask: url(${sprite});
  -webkit-mask-size: 2300% 100%;
  mask-size: 2300% 100%;
  -webkit-animation: ${ani2} 0.7s steps(22) forwards;
  animation: ${ani2} 0.7s steps(22) forwards;
  background: #000;
  &:hover {
    -webkit-animation: ${ani} 0.7s steps(22) forwards;
    animation: ${ani} 0.7s steps(22) forwards;
  }
`;
