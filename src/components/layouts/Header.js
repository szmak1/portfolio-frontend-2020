import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Logo from "../Logo"
import Button from "@components/Button"
import pdf from "../../assets/docs/cvDsEng.pdf"

const Header = ({ siteTitle }) => (
  <header className="top-0 bg-white shadow sticky z-50">
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Lato"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      ></link>
    </Helmet>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `var(--size-content)`,
        padding: `var(--size-gutter)`,
      }}
      className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8"
    >
      <div className="flex items-center text-2xl">
        <div className="">
          <Logo />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0 text-2xl">
        <AnchorLink className="px-4" href="#experience">
          Experience
        </AnchorLink>
        <AnchorLink offset="180" className="px-4" href="#education">
          Education
        </AnchorLink>
        <AnchorLink offset="100" className="px-4" href="#skills">
          Skills
        </AnchorLink>
        <AnchorLink offset="100" className="px-4" href="#about">
          About
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <a href={pdf} target="_blank" rel="noreferrer">
          <Button className="bg-transparent hover:bg-blue-400 text-blue-400 font-bold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded">
            Check My CV here!
          </Button>
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
export default Header
