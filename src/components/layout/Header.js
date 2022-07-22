import React from 'react';
import Helmet from 'react-helmet';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../Logo';
import Button from '../Button';
import pdf from '../../cv/cvDsEng.pdf';

const Header = () => (
  <header className="top-0 bg-white shadow">
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
    </Helmet>
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="">
          <Logo />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0 text-2xl">
        <AnchorLink className="px-4" href="#features">
          Home
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          About
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Skills
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Portfolio
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <a href={pdf} target="_blank" rel="noreferrer">
          <Button className="text-sm">Check My CV here!</Button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
