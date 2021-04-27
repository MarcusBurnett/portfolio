import React from 'react';
import styled from 'styled-components/macro';
import { greyDark } from '../styles/colors';
import { medium } from '../styles/fonts';
import Spacer from './Spacer';

const Text = styled.p`
  text-align: center;
`;

const Button = styled.span`
  background: none;
  border: none;
  font-weight: ${medium};
  color: ${greyDark};
  text-decoration: underline;
`;

const ErrorFallback = () => (
  <>
    <Spacer size="xl" />
    <Text>
      Something went wrong.{' '}
      <Button
        role="button"
        onClick={() => window.location.reload()}
        onKeyPress={(event) =>
          event.key === 'Enter' && window.location.reload()
        }
        tabIndex={0}
      >
        Refresh.
      </Button>
    </Text>
  </>
);

export default ErrorFallback;
