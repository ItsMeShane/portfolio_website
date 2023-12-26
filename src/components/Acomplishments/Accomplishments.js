import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: "10+", text: "Open Source Projects"},
  { number: "100k+", text: "Youtube Impressions"},
  { number: "100+", text: "LeetCode Problems Solved"},
  // { number: "5000", text: "Github Stars"}
];

const Accomplishments = () => (
  <Section id='accomplishments'>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Accomplishments;
