import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { contactBackground } from '../assets/images';
import Spacer from '../components/Spacer';
import Input from '../components/Input';
import { useTheme } from '../context/theme';
import { useToast } from '../context/toast';
import Button from '../components/Button';
import Textarea from '../components/Textarea';
import { promiseTimeout } from '../utilities';
import { darkBlue } from '../styles/colors';
import {
  Background,
  BackgroundImage,
  HorizontalImageFadeLight,
  VerticalImageFadeLight,
  VerticalImageFadeDark,
  HorizontalImageFadeDark,
} from '../components/BackgroundImageFade';
import { small, xsmall } from '../styles/breakpoints';
import { fadeInAndSlideRight } from '../keyframes';

const schema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address.')
    .required('Please enter your email address.'),
  name: Yup.string().trim().required('Please enter your name.'),
  message: Yup.string().trim().required('Please enter your message.'),
});

const fadeInAndSlideLeft = keyframes`
0% {
	transform: translateX(20%);
  opacity: 0
}
100% {
	transform: translateX(0%);
  opacity: 1;
}
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-bottom: 5vh;
  min-height: 100vh;
  overflow: hidden;

  @media screen and (max-width: ${xsmall}) {
    padding-bottom: 0;
    align-items: center;
  }
`;

const Header = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => (theme === 'dark' ? '#FFFFFF' : darkBlue)};
  transition: color 0.4s ease;

  @media screen and (max-width: ${small}) {
    font-size: 4rem;
  }
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  animation: 1s ${fadeInAndSlideLeft} ease 0.5s forwards;
  height: 80%;
  overflow: hidden;

  @media screen and (max-width: ${small}) {
    max-width: 70%;
  }
`;

const Content = styled.div`
  position: relative;
  width: 70%;
  max-width: 800px;
  padding: 2vh 5vw;
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideRight} ease 0.3s forwards;
  min-width: 500px;

  @media screen and (max-width: ${small}) {
    width: 100%;
    min-width: 300px;
    max-width: 450px;
    padding: 20vh 20px 20px;
  }
`;

const ReCaptchaContainer = styled.div`
  display: none;
`;

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const { theme, themeChanging } = useTheme();
  const recaptchaRef = useRef();
  const { showSuccessToast, showErrorToast } = useToast();

  const sendEmail = async (values, { resetForm }) => {
    try {
      const token = await Promise.race([
        recaptchaRef.current.executeAsync(),
        promiseTimeout(),
      ]);

      if (token) {
        setSubmitting(true);
        await axios({
          method: 'POST',
          url: 'https://formspree.io/f/mbjqdqpw',
          data: values,
        });

        showSuccessToast('Success! Your message has been sent.', true);
        resetForm();
      } else {
        showErrorToast('Unverified');
      }
    } catch (e) {
      showErrorToast(e.message);
    } finally {
      setSubmitting(false);
    }
  };

  const {
    handleSubmit,
    values,
    errors,
    setFieldValue,
    setFieldTouched,
    touched,
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: { name: '', email: '', message: '' },
    initialErrors: { error: 'invalid' },
    onSubmit: sendEmail,
    validationSchema: schema,
  });

  const setFieldValueAndTouched = (field, value) => {
    setFieldTouched(field, true);
    setFieldValue(field, value);
  };

  return (
    <Container>
      <Background themeChanging={themeChanging}>
        <BackgroundImageContainer>
          <BackgroundImage src={contactBackground} />
          <VerticalImageFadeLight theme={theme} />
          <HorizontalImageFadeLight theme={theme} />
          <VerticalImageFadeDark theme={theme} />
          <HorizontalImageFadeDark theme={theme} />
        </BackgroundImageContainer>
      </Background>
      <Content>
        <Header theme={theme}>Get In Touch</Header>
        <Spacer size="l" />
        <Input
          name="name"
          label="Name"
          value={values.name}
          onChange={(e) => setFieldValueAndTouched('name', e.target.value)}
          onBlur={handleBlur('name')}
          error={touched.name && errors.name}
        />
        <Input
          name="email"
          label="Email"
          value={values.email}
          onChange={(e) => setFieldValueAndTouched('email', e.target.value)}
          onBlur={handleBlur('email')}
          error={touched.email && errors.email}
        />
        <Textarea
          name="message"
          label="Message"
          value={values.message}
          onChange={(e) => setFieldValueAndTouched('message', e.target.value)}
          onBlur={handleBlur('message')}
          error={touched.message && errors.message}
        />
        <Spacer size="l" />
        <Button onClick={handleSubmit} loading={submitting} disabled={!isValid}>
          Send Message
        </Button>
        {process.env.REACT_APP_RECAPTCHA_KEY && (
          <ReCaptchaContainer>
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
            />
          </ReCaptchaContainer>
        )}
      </Content>
    </Container>
  );
};

export default Contact;
