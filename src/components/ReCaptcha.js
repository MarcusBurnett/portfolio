import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptacha = ({ onChange }) => (
  <ReCAPTCHA
    sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
    onChange={onChange}
  />
);

export default ReCaptacha;
