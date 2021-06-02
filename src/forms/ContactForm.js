import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { useLocation } from 'react-router-dom';
import Spacer from '../components/Spacer';
import Input from '../components/form/Input';
import { useToast } from '../context/toast';
import Button from '../components/form/Button';
import Textarea from '../components/form/Textarea';
import { promiseTimeout } from '../utilities';

const schema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address.')
    .required('Please enter your email address.'),
  name: Yup.string().trim().required('Please enter your name.'),
  message: Yup.string().trim().required('Please enter your message.'),
});

const ReCaptchaContainer = styled.div`
  display: none;
`;

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const recaptchaRef = useRef();
  const { showSuccessToast, showErrorToast } = useToast();
  const { state } = useLocation();

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
    initialValues: { name: '', email: '', message: state?.message || '' },
    initialErrors: { error: 'invalid' },
    onSubmit: sendEmail,
    validationSchema: schema,
  });

  const setFieldValueAndTouched = (field, value) => {
    setFieldTouched(field, true);
    setFieldValue(field, value);
  };

  return (
    <>
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
    </>
  );
};

export default ContactForm;
