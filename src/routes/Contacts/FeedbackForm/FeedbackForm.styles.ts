import styled, { keyframes } from 'styled-components';
import { Form as FormikForm } from 'formik';

import sprite from '../../../assets/images/nature-sprite.png';

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

export const FormWrapper = styled.div`
  position: absolute;
  width: fit-content;
  top: 5vh;
  right: 36vh;
  z-index: 10;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Title = styled.div`
  color: #7f4efb;
  font-size: 3vh;
  width: min-content;
  margin: 0 0 2vh 0;
  padding: 1vh 3vh;
  background-color: rgba(17, 11, 49, 0.7);
  border-radius: 5vh;
  border: 1px solid #2c106f;
`;

export const ButtonContainer = styled.div`
  position: relative;
  width: 150px;
  height: 50px;
  margin-top: 4vh;
  margin-left: 100%;
  transform: translateX(-100%);
  overflow: hidden;
  border: 1px solid;
  font-size: 25px;
  transition: 0.5s;
  letter-spacing: 1px;
  border-radius: 25px;
  background-color: #fafafa;
  &:hover {
    border: 1px solid #5733a8;
    box-shadow: 0 0 10px #7f4efb;
  }
`;

export const ButtonText = styled.span`
  position: absolute;
  color: #7f4efb;
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
  color: #fff;
  cursor: pointer;
  -webkit-mask: url(${sprite});
  mask: url(${sprite});
  -webkit-mask-size: 2300% 100%;
  mask-size: 2300% 100%;
  -webkit-animation: ${ani2} 0.7s steps(22) forwards;
  animation: ${ani2} 0.7s steps(22) forwards;
  background: #241444;
  border: 1px solid #5733a8;

  &:hover {
    -webkit-animation: ${ani} 0.7s steps(22) forwards;
    animation: ${ani} 0.7s steps(22) forwards;
    ~ ${ButtonContainer} {
      border: 10px solid #5733a8;
    }
  }
`;

export const Hold = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 150px;
  height: 50px;
  border-radius: 25px;
`;

export const Loader = styled.img`
  position: absolute;
  top: -50%;
  width: 6vw;
  height: 5vw;
`;
