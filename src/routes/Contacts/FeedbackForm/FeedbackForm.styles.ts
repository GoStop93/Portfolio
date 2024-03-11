import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const FormWrapper = styled.div`
  position: absolute;
  width: fit-content;
  top: 10%;
  right: 40vh;
  z-index: 10;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Title = styled.div`
  color: #7f4efb ;
  font-size: 3vh;
  width: min-content;
  margin: 2vh 0;
  padding: 1vh 3vh;
  background-color: #110b31;
  border-radius: 5vh;
  border: 1px solid #2c106f;
`;
