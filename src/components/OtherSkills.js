import React from 'react';
import SkillBar from 'react-skillbars';

const skills = [
  { type: 'SEO', level: 90 },
  { type: 'Analytics', level: 85 },
  { type: 'Tag Manager', level: 65 },
  { type: 'Segment', level: 80 },
  { type: 'Yoast', level: 100 },
  { type: 'MixPanel', level: 100 },
  { type: 'GoogleAds', level: 30 },
];
const colors = {
  bar: '#3498db',
  background: 'none',
  title: {
    text: '#fff',
    background: '#000',
  },
};

const OtherSkills = () => (
  <>
    <SkillBar
      skills={skills}
      colors={colors}
      height="42px"
      animationDuration={3000}
      offset={`35px`}
      animationThreshold={0.5}
    />
  </>
);

export default OtherSkills;
