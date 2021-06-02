import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { formatDuration } from '../../utilities';
import { xsmall } from '../../styles/breakpoints';

const Text = styled.span`
  font-size: 2rem;

  @media screen and (max-width: ${xsmall}) {
    font-size: 2.6rem;
  }
`;

const Letter = styled(Text)`
  width: 1rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${xsmall}) {
    width: 1.4rem;
  }
`;

const DurationUnit = styled(Text)`
  margin-right: 0.5rem;

  :last-child {
    margin-right: 0;
  }
`;

const Container = styled.div`
  display: flex;
`;

const formatDurationItem = (item) =>
  [...item].map((letter, i) => <Letter key={i.toString()}>{letter}</Letter>);

const Countdown = ({ date }) => {
  const [duration, setDuration] = useState(formatDuration(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(formatDuration(date));
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <Container>
      {formatDurationItem(duration.years)}
      <DurationUnit>y</DurationUnit>
      {formatDurationItem(duration.months)}
      <DurationUnit>m </DurationUnit>
      {formatDurationItem(duration.days)}
      <DurationUnit>d </DurationUnit>
      {formatDurationItem(duration.hours)}
      <DurationUnit>h </DurationUnit>
      {formatDurationItem(duration.minutes)}
      <DurationUnit>mins </DurationUnit>
      {formatDurationItem(duration.seconds)}
      <DurationUnit>s</DurationUnit>
    </Container>
  );
};

export default Countdown;
