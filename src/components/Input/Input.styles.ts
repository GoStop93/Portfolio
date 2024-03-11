import styled from 'styled-components';

export const ErrorMessage = styled.div`
  color: red;
  font-size: 2vh;
  padding: 0 2vh;
`;

export const Input = styled.input`
  width: 25vw;
  height: 5vh;
  box-sizing: border-box;
  border-radius: 20px;
  border: none;
  font-size: 2vh;
  padding: 0 2vh;
  background-color: #161a2c;
  color: #949fbe;
  border: 1px solid #5733a8;
  &:focus {
    border: 2px solid #5733a8;
    outline: none;
    box-shadow: 0 0 10px #7f4efb;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: #949fbe;
    box-shadow: 0 0 0px 1000px #161a2c inset;
  }
`;

export const TextArea = styled.textarea`
  width: 25vw;
  height: 15vh;
  box-sizing: border-box;
  border-radius: 20px;
  border: none;
  font-size: 2vh;
  padding: 2vh;
  background-color: #161a2c;
  color: #949fbe;
  border: 1px solid #5733a8;
  resize: none;
  &:focus {
    border: 2px solid #5733a8;
    outline: none;
    box-shadow: 0 0 10px #7f4efb;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: #949fbe;
    box-shadow: 0 0 0px 1000px #161a2c inset;
  }

  /* &::-webkit-scrollbar {
    display: none; */
  /* } */
`;

export const Label = styled.label`
  font-size: 2vh;
  color: #949fbe;
  margin-top: 2vh;
`;
