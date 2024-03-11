import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from '../../../components/Input/Input';

import * as S from './FeedbackForm.styles';

const FeedbackForm: React.FC = () => {
  return (
    <S.FormWrapper>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(2, 'at least two characters').required('required field!'),
          email: Yup.string().email('wrong email address').required('required field!'),
          message: Yup.string().required('required field!').min(6, 'at least six characters'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <S.Form>
          <S.Title>CONTACT</S.Title>
          <Input label="Name" id="name" name="name" type="text" />
          <Input label="Email" id="email" name="email" type="email" />
          <Input label="Message" id="message" name="message" type="text" textarea />
          {/* <StyledButton type="submit" className="reg1">
          Register
        </StyledButton>
        <StyledButton className="login" onClick={click}>
          Log in
        </StyledButton> */}
        </S.Form>
      </Formik>
    </S.FormWrapper>
  );
};

export default FeedbackForm;
