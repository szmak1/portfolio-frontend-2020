import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../Logo';
import Button from '@components/Button';
import pdf from '../../assets/docs/cvDsEng.pdf';

const Header = ({ siteTitle }) => {

  return (
    
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
        <div className="hidden md:block">
          <a href={pdf} target="_blank" rel="noreferrer">
            <Button className="bg-transparent hover:bg-[#3b82f6] font-bold hover:text-white py-2 px-4 border  text-[#3b82f6] border-[#3b82f6] hover:border-transparent rounded">
              Check My CV here!
            </Button>
          </a>
        </div>
      </div>
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
