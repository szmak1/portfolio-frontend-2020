import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Card from '../Card';
import Devicon from '../Devicon';

const WorkProjects = () => {
  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center md:text-4xl">
          Companies I have worked with
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 dark:text-gray-400">
          <Card>
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
                I have worked with this site continuesly for 2 years. Adding new sections and
                styles. Code envirement are: Wordpress, ACF, Php, Javascript & Sass
              </p>
              <p className="font-semibold text-gray-700 mt-0 mb-2 text-left">Tech:</p>
              <div className="flex justify-evenly mb-7">
                <Devicon icon="devicon-wordpress-plain-wordmark colored" />
                <Devicon icon="devicon-php-plain colored" />
                <Devicon icon="devicon-amazonwebservices-plain-wordmark colored" />
                <Devicon icon="devicon-jquery-plain-wordmark colored" />
              </div>
              <a href="https://www.jointacademy.com/se/wp-content/uploads/sites/4/2019/06/joint_academy_logo_color@2x.png">
                Visit website
              </a>
            </div>
          </Card>
          <Card>
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
              <a href="https://www.jointacademy.com/se/wp-content/uploads/sites/4/2019/06/joint_academy_logo_color@2x.png">
                Visit website
              </a>
            </div>
          </Card>
          <Card>
            <div className="flex justify-center">
              <StaticImage
                width="52"
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
                I developed the whole site with my MVC. Code evirement are Wordpress, ACF, Twig,
                Php, Sass
              </p>
              <p className="font-semibold text-gray-700 mt-0 mb-2 text-left">Tech:</p>
              <div className="flex justify-between mb-7 ">
                <Devicon icon="devicon-wordpress-plain-wordmark colored" />
                <Devicon icon="devicon-javascript-plain colored " />
                <Devicon icon="devicon-php-plain " />
                <Devicon icon="devicon-sass-original colored" />
                <Devicon icon="devicon-jquery-plain-wordmark" />
              </div>
              <a href="https://mercedes-benz-malmo.se/">Visit website</a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkProjects;
