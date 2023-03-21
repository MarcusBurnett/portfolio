import React, { useState } from 'react';
import styled from 'styled-components/macro';
import timelineItems from '../../data/timeline';
import { small } from '../../styles/breakpoints';
import { fadeInAndSlideUp } from '../../keyframes';
import TimelineItem from './TimelineItem';
import TimelinePath from './TimelinePath';
import TimelineControls from './TimelineControls';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  padding-left: 20px;
  justify-content: space-between;
  width: 100%;
  opacity: 0;
  animation: 0.6s ${fadeInAndSlideUp} 0.6s ease forwards;
  min-height: 400px;
  max-height: 95vh;

  @media screen and (max-width: ${small}) {
    min-height: 550px;
  }
`;

const MyStoryTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timelineMoving, setTimelineMoving] = useState(false);

  return (
    <Container>
      <TimelineItem
        isHidden={timelineMoving}
        item={timelineItems[currentIndex]}
      />
      <TimelinePath
        items={timelineItems}
        timelineMoving={timelineMoving}
        currentIndex={currentIndex}
      />
      <TimelineControls
        setTimelineMoving={setTimelineMoving}
        currentSlideIndex={currentIndex}
        setCurrentSlideIndex={setCurrentIndex}
      />
    </Container>
  );
};

export default MyStoryTimeline;
