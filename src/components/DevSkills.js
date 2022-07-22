import React from 'react';
import SkillBar from 'react-skillbars';

const skills = [
  { type: 'Gatsby', level: 90 },
  { type: 'React', level: 85 },
  { type: 'Javascript', level: 70 },
  { type: 'PHP', level: 80 },
  { type: 'SASS', level: 100 },
  { type: 'HTML', level: 100 },
  { type: 'Vue', level: 30 },
];
const colors = {
  bar: '#3498db',
  background: 'none',
  title: {
    text: '#fff',
    background: '#000',
  },
};

const DevSkills = () => (
  <>
    <SkillBar className="pr-4" skills={skills} colors={colors} height="42px" />
  </>
);

export default DevSkills;
