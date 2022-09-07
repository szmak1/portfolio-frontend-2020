import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Card from '../Card';
import Devicon from '../Devicon';

const WorkProjects = () => {
  return (
    <section id="missions">
      <div className="py-8 lg:pt-48 mx-auto max-w-screen-xl">
        <h2 className="mb-8 lg:mb-12 text-3xl font-extrabold tracking-tight leading-tight text-center md:text-4xl">
          Previous missions
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 mb-8">
          <a href="#" className="flex justify-center items-center" data-sal="zoom-in"
  data-sal-delay="1"
  data-sal-easing="ease-out-back">
            <StaticImage
              src="https://images.prismic.io/royaldesign/a89746e6520cd7b9b8876c00b9475aec554bc336_moccamaster_logo_bl.png?auto=compress,format"
              alt="Malmö - David Szmak - Front End Developer"
            />
          </a>
          <a href="#" className="flex justify-center items-center" data-sal="zoom-in"
  data-sal-delay="200"
  data-sal-easing="ease-out-back">
            <StaticImage
              src="https://www.malmosaluhall.se/wp-content/themes/gg/assets/img/logo.png"
              alt="Malmö - David Szmak - Front End Developer"
            />
          </a>
          <a href="#" className="flex justify-center items-center " data-sal="zoom-in"
  data-sal-delay="400"
  data-sal-easing="ease-out-back">
            <StaticImage
              src="https://www.jobreg.no/images/logos/290421014054_3896_d4b07ae8e63efd868860a7e255b2fe16ff56fb373063c2e67b6dad90958adf89501ee06be4bf5e8e33dea9.png"
              alt="Malmö - David Szmak - Front End Developer"
            />
          </a>


          <a href="#" className="flex justify-center items-center" data-sal="zoom-in"
  data-sal-delay="600"
  data-sal-easing="ease-out-back">
            <StaticImage
              src="https://classicum.se/wp-content/uploads/2021/10/Classicum-logga.png"
              alt="Malmö - David Szmak - Front End Developer"
            />
          </a>
          <a href="#" className="flex justify-center items-center" data-sal="zoom-in"
  data-sal-delay="800"
  data-sal-easing="ease-out-back">
            <StaticImage
              src="https://www.pineberry.com/wp-content/uploads/2021/09/doktorse-logo-600-colour-rgb.png"
              alt="Malmö - David Szmak - Front End Developer"
            />
          </a>
          <a href="#" className="flex justify-center items-center" data-sal="zoom-in"
  data-sal-delay="1000"
  data-sal-easing="ease-out-back">
            <StaticImage
              
              src="../../images/stc.png"
              alt="Malmö - David Szmak - Front End Developer"
            />
          </a>
          
        </div>
        <div>
        <div className="grid grid-cols-1 gap-8 text-gray-500 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 dark:text-gray-400" >
          <div data-sal="zoom-in"
  data-sal-delay="300"
  data-sal-easing="ease-out"><Card>
            <div className="flex justify-center">
              <StaticImage
                width="62"
                className=""
                src="https://i.pinimg.com/originals/3b/df/27/3bdf2786f9bba30a6ff1376c81b76c89.png"
                alt="Malmö - David Szmak - Front End Developer"
              />
            </div>
            <div className="text-center ">
              <p className="font-semibold text-sm mb-0 mt-2">mercedes-benz-malmo.se</p>
              <p className="font-semibold text-sm  mb-2 mt-0">At Bästa Kompisar</p>
              <p className="font-semibold text-gray-600 text-left mb-2">About:</p>
              <p className="font-normal text-gray-700 text-left ">
                I developed the whole site with a team at Bästa kompisar. This site was a big
                project that took 5 month to develop.
              </p>
              <p className="font-semibold text-gray-700 mt-0 mb-2 text-left">Tech:</p>
              <div className="flex justify-between mb-7 ">
                <Devicon icon="devicon-wordpress-plain-wordmark colored" />
                <Devicon icon="devicon-javascript-plain colored " />
                <Devicon icon="devicon-php-plain " />
                <Devicon icon="devicon-sass-original colored" />
                <Devicon icon="devicon-jquery-plain-wordmark" />
              </div>
              <a href="https://mercedes-benz-malmo.se/" target="blank">Visit website</a>
            </div>
          </Card></div>
          <div data-sal="zoom-in"
  data-sal-delay="600"
  data-sal-easing="ease-out"><Card >
            <div className="flex justify-center">
              <StaticImage
                className=""
                src="https://assets.jointacademy.com/logos/jointacademy_logo_pos.png"
                alt="Malmö - David Szmak - Front End Developer"
              />
            </div>
            <div className="text-center ">
              <p className="font-semibold text-sm mb-0 mt-2">jointacademy.com</p>
              <p className="font-semibold text-sm  mb-2 mt-0">Inhouse</p>
              <p className="font-semibold text-gray-600 text-left mb-2">About:</p>
              <p className="font-normal text-gray-700 text-left ">
                I have worked with this site continuesly for 2 years. I further develop thus
                multisite by adding new sections and styles.
              </p>
              <p className="font-semibold text-gray-700 mt-0 mb-2 text-left">Tech:</p>
              <div className="flex justify-evenly mb-7">
                <Devicon icon="devicon-wordpress-plain-wordmark colored" />
                <Devicon icon="devicon-php-plain colored" />
                <Devicon icon="devicon-amazonwebservices-plain-wordmark colored" />
                <Devicon icon="devicon-jquery-plain-wordmark colored" />
              </div>
              <a href="https://www.jointacademy.com/" target="blank">
                Visit website
              </a>
            </div>
          </Card></div>
          <div data-sal="zoom-in"
  data-sal-delay="900"
  data-sal-easing="ease-out">
          <Card >
            <div className="flex justify-center">
              <StaticImage
                className=""
                src="https://assets.jointacademy.com/logos/jointacademy_logo_pos.png"
                alt="Malmö - David Szmak - Front End Developer"
              />
            </div>
            <div className="text-center ">
              <p className="font-semibold text-sm mb-0 mt-2">site.jointacademy.com</p>
              <p className="font-semibold text-sm  mb-2 mt-0">Inhouse</p>
              <p className="font-semibold text-gray-600 text-left mb-2">About:</p>
              <p className="font-normal text-gray-700 text-left ">
                I have build over 100 landing SPA-sites for the marketing team. All the components
                where shared so they can be reused for all SPA-sites.
              </p>
              <p className="font-semibold text-gray-700 mt-0 mb-2 text-left">Tech:</p>
              <div className="flex justify-evenly mb-7">
                <Devicon icon="devicon-react-original-wordmark colored" />
                <Devicon icon="devicon-gatsby-plain-wordmark colored" />
                <Devicon icon="devicon-sass-original colored" />
                <Devicon icon="devicon-storybook-plain colored" />
              </div>
              <a href="https://site.jointacademy.com/doktorse/" target="blank">
                Visit website
              </a>
            </div>
          </Card>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProjects;
