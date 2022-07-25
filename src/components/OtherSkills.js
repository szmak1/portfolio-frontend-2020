import React from "react"
import SkillBar from "react-skillbars"

const skills = [
  { type: "SEO", level: 95 },
  { type: "Analytics", level: 60 },
  { type: "Tag Manager", level: 85 },
  { type: "Segment", level: 70 },
  { type: "Yoast", level: 100 },
  { type: "MixPanel", level: 60 },
  { type: "GoogleAds", level: 70 },
]
const colors = {
  bar: "#3b82f6",
  title: {
    text: "#fff",
    background: "#000",
  },
}

const OtherSkills = () => (
  <>
    <SkillBar
      style={{ textAlign: "center" }}
      skills={skills}
      colors={colors}
      height="42px"
      animationDuration={3000}
      offset={`35px`}
      animationThreshold={0.5}
    />
  </>
)

export default OtherSkills
