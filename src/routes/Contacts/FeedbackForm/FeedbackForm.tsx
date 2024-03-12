import { RefObject, useRef, useState } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';

import env from 'react-dotenv';
import emailjs from '@emailjs/browser';

import Input from '../../../components/Input/Input';
import loaderIcon from '../../../assets/icons/loader.gif';

import * as S from './FeedbackForm.styles';

const FeedbackForm: React.FC = () => {
  const form: RefObject<HTMLFormElement> = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (values: any) => {
    setIsLoading(true);
    if (form.current) {
      emailjs
        .sendForm(env.EMAILJS_SERVICE_ID, env.EMAILJS_TEMPLATE_ID, form.current, {
          publicKey: env.EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            toast.success('The message was successfully sent');
            setIsLoading(false);
          },
          (error) => {
            toast.error('Something goes wrong');
            setIsLoading(false);
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
            {isLoading && (
              <S.Hold>
                <S.Loader src={loaderIcon} />
              </S.Hold>
            )}
          </S.ButtonContainer>
        </S.Form>
      </Formik>
    </S.FormWrapper>
  );
};

export default FeedbackForm;
