import { RefObject, useRef } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import env from 'react-dotenv';
import emailjs from '@emailjs/browser';

import Input from '../../../components/Input/Input';

import * as S from './FeedbackForm.styles';

const FeedbackForm: React.FC = () => {
  const form: RefObject<HTMLFormElement> = useRef(null);

  const sendEmail = (values: any) => {
    if (form.current) {
      emailjs
        .sendForm(env.EMAILJS_SERVICE_ID, env.EMAILJS_TEMPLATE_ID, form.current, {
          publicKey: env.EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <S.FormWrapper>
      <Formik
        initialValues={{
          from_name: '',
          from_email: '',
          message: '',
        }}
        validationSchema={Yup.object({
          from_name: Yup.string().min(2, 'at least two characters').required('required field!'),
          from_email: Yup.string().email('wrong email address').required('required field!'),
          message: Yup.string().required('required field!').min(6, 'at least six characters'),
        })}
        onSubmit={(values, { resetForm }) => {
          sendEmail(values);
          resetForm();
        }}
      >
        <S.Form ref={form}>
          <S.Title>CONTACT</S.Title>
          <Input label="Name" id="from_name" name="from_name" type="text" />
          <Input label="Email" id="from_email" name="from_email" type="email" />
          <Input label="Message" id="message" name="message" type="text" textarea />
          <S.ButtonContainer>
            <S.ButtonText>Send email</S.ButtonText>
            <S.Button type="submit">Send email</S.Button>
          </S.ButtonContainer>
        </S.Form>
      </Formik>
    </S.FormWrapper>
  );
};

export default FeedbackForm;
