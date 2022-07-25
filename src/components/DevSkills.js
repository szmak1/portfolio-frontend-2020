import React from "react"
import SkillBar from "react-skillbars"
import Devicon from "./Devicon"

const skills = [
  {
    type: <Devicon icon="devicon-react-original-wordmark colored" />,
    level: 85,
  },
  { type: <Devicon icon="devicon-javascript-plain colored" />, level: 70 },
  { type: <Devicon icon="devicon-gatsby-plain colored" />, level: 95 },
  { type: <Devicon icon="devicon-php-plain" />, level: 80 },
  { type: <Devicon icon="devicon-sass-plain colored" />, level: 100 },
  { type: <Devicon icon="devicon-html5-plain colored" />, level: 100 },
  { type: <Devicon icon="devicon-vuejs-plain-wordmark colored" />, level: 30 },
  {
    type: <Devicon icon="devicon-storybook-plain colored" />,
    level: 70,
  },
  { type: <Devicon icon="devicon-jquery-plain-wordmark colored" />, level: 90 },
]
const colors = {
  bar: "#3b82f6",

  title: {
    text: "#000",
    background: "#fff",
  },
}

const DevSkills = () => (
  <>
    <SkillBar
      style={{ zIndex: "-1" }}
      className="pr-4"
      skills={skills}
      colors={colors}
      height="42px"
    />
  </>
)

export default DevSkills
