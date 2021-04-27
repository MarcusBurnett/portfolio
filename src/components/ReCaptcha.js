import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptacha = ({ onChange }) => (
  <ReCAPTCHA
    sitekey={
      process.env.NODE_ENV === 'development'
        ? '6Lekx3IaAAAAALGtX2_NqHcK45m5fvjnF9hTMFtk'
        : process.env.REACT_APP_RECAPTCHA_KEY
    }
    onChange={onChange}
  />
);

export default ReCaptacha;
