import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '@components/Button';
import pdf from '../../assets/docs/cvDsEng.pdf';


const Hero = () => (
  <section id="hero" className="pt-8 md:pt-40">
    <div className="container mx-auto lg:flex justify-between">
      <div className="text-center lg:text-left lg:w-1/2 ">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
          Front-End Developer
        </h1>
        <h2 className="text-2xl lg:text-4xl xl:text-4xl font-bold text-gray-700">
        4 years of code experiance 
        </h2>
        <div className="CodeHack"></div>
        <p className="text-xl lg:text-2xl mt-6 font-light">
          My future goals are to become a tech lead front-end developer. I want to work with
          React/Gatsby and Wordpress or other Headless CMS. I’m also interested to learn other
          frameworks/libraries such as Svelte, Redwood.
        </p>
        <p className="mt-200 md:mt-12">
          <AnchorLink size="lg" href="#skills">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Check my 1337 skills here!
            </Button>
          </AnchorLink>
        </p>
        <div className="sm:block">
          <a href={pdf} target="_blank" rel="noreferrer">
            <Button className="bg-transparent hover:bg-[#3b82f6] font-bold hover:text-white py-2 px-4 border  text-[#3b82f6] border-[#3b82f6] hover:border-transparent rounded">
              Check My CV here!
            </Button>
          </a>
        </div>
      </div>
      <div style={{ zIndex: -1 }} className="flex flex-wrap flex-center lg:w-1/3">
        <StaticImage
          quality={100}
          placeholder="blurred"
          className="shadow-lg object-contain object-cover rounded align-middle border-none "
          src="../../images/davidszmak.jpg"
          alt="David Szmak - Front End Developer"
        />
      </div>
    </div>
  </section>
);

export default Hero;
