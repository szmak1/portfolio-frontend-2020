import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useState } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../Logo';
import Button from '@components/Button';
import pdf from '../../assets/docs/cvDsEng.pdf';

const Header = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    /*
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
          <AnchorLink href="#hero">
            <Logo />
          </AnchorLink>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0 text-2xl hover:text-blue-700">
        <AnchorLink className="px-4 hover:text-blue-700" href="#missions">
          Missions
        </AnchorLink>
        <AnchorLink className="px-4 hover:text-blue-700 " href="#experience">
          Experience
        </AnchorLink>
        <AnchorLink offset="180" className="px-4 hover:text-blue-700" href="#education">
          Education
        </AnchorLink>
        <AnchorLink offset="100" className="px-4 hover:text-blue-700" href="#skills">
          Skills
        </AnchorLink>
        <AnchorLink offset="100" className="px-4 hover:text-blue-700" href="#about">
          About
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <a href={pdf} target="_blank" rel="noreferrer">
          <Button className="bg-transparent hover:bg-[#3b82f6] font-bold hover:text-white py-2 px-4 border  text-[#3b82f6] border-[#3b82f6] hover:border-transparent rounded">
            Check My CV here!
          </Button>
        </a>
      </div>
    </div>
    */
    <header id="header" className="top-0 bg-white shadow sticky z-50">
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
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
            <AnchorLink offset={200} href="#hero">
              <Logo />
            </AnchorLink>
          </div>
        </div>

        {/* <div className="flex mt-4 sm:mt-0 text-2xl hover:text-blue-700">
          <AnchorLink className="px-4 hover:text-blue-700" href="#missions">
            Missions
          </AnchorLink>
          <AnchorLink className="px-4 hover:text-blue-700 " href="#experience">
            Experience
          </AnchorLink>
          <AnchorLink offset="180" className="px-4 hover:text-blue-700" href="#education">
            Education
          </AnchorLink>
          <AnchorLink offset="100" className="px-4 hover:text-blue-700" href="#skills">
            Skills
          </AnchorLink>
          <AnchorLink offset="100" className="px-4 hover:text-blue-700" href="#about">
            About
          </AnchorLink>
        </div> */}

        <div className="hidden md:block">
          <a href={pdf} target="_blank" rel="noreferrer">
            <Button className="bg-transparent hover:bg-[#3b82f6] font-bold hover:text-white py-2 px-4 border  text-[#3b82f6] border-[#3b82f6] hover:border-transparent rounded">
              Check My CV here!
            </Button>
          </a>
        </div>
      </div>
      {/* <nav
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
        className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8"
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center text-2xl">
            <div className="">
              <AnchorLink href="#hero">
                <Logo />
              </AnchorLink>
            </div>
          </div>

          <div className="flex md:order-2">
            <div>
              <a href={pdf} target="_blank" rel="noreferrer">
                <Button className="bg-transparent hover:bg-[#3b82f6] font-bold hover:text-white py-2 px-4 border  text-[#3b82f6] border-[#3b82f6] hover:border-transparent rounded">
                  Check My CV here!
                </Button>
              </a>
            </div>
            <button
              onClick={() => toggleExpansion(!isExpanded)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow flex flex-center justify-center">
              <AnchorLink>
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 hover:text-blue-700"
                >
                  Missions
                </a>
              </AnchorLink>
              <AnchorLink>
                <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 hover:text-blue-700">
                  Experience
                </a>
              </AnchorLink>
              <AnchorLink>
                <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 hover:text-blue-700">
                  Education
                </a>
              </AnchorLink>
              <AnchorLink>
                <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 hover:text-blue-700">
                  Testimonials
                </a>
              </AnchorLink>
              <AnchorLink>
                <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 hover:text-blue-700">
                  Code skills
                </a>
              </AnchorLink>
              <AnchorLink>
                <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 hover:text-blue-700">
                  About me
                </a>
              </AnchorLink>
            </div>
          </div>
        </div>
      </nav>  */}
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
export default Header;
