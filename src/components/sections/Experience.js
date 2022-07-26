import React from 'react';
import Card from '../../components/Card';
import JointAcademy from '../../assets/svg/logos/JointAcademy';
import GutsAndGlory from '../../assets/svg/logos/GutsAndGlory';
import BestFriends from '../../assets/svg/logos/BestFriends';

const Experience = () => (
  <section id="experience" className="py-20 lg:pb-40 lg:pt-48">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl lg:text-5xl font-semibold">Experience</h2>
      <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
        <div className="flex-1 px-3">
          <Card className="mb-8 Cards">
            <h3 className="text-2xl mb-4">FRONT-END DEVELOPER</h3>
            <p className="font-semibold text-xl">Joint Academy</p>
            <p className="font-bold text-gray-700">2020 - now</p>
            <p className="mt-4 mb-12 text-left">
              I work in a Marketing team in Joint Academy and the size of my team is 12 colleges. My
              stacks are React/Gatsby, Storybook, PHP, SASS, ACF and more.
            </p>
            <JointAcademy className="mt-8" />
          </Card>
        </div>
        <div className="flex-1 px-3">
          <Card className="mb-8 Cards">
            <h3 className="text-2xl mb-4">FULL-STACK DEVELOPER</h3>
            <p className="font-semibold text-xl">Best Friends</p>
            <p className="font-bold text-gray-700">2018 - 2020</p>
            <p className="mt-4 mb-2 text-left">
              At Best Friends I work a lot with Wordpress sites. I created a MVC with webpack. Own
              developed theme wit Timber, twig, ACF and Wordpress.
            </p>
            <BestFriends />
          </Card>
        </div>
        <div className="flex-1 px-3">
          <Card className="mb-8 Cards">
            <h3 className="text-2xl mb-4">FRONT-END DEVELOPER</h3>
            <p className="font-semibold text-xl">Guts & Glory</p>
            <p className="font-bold text-gray-700">2017 - 2018</p>
            <p className="mt-4 mb-12 text-left">
              I was an Intern two times at Guts & Glory. I learn a lot from an Full-Stack Developer.
              Here I worked with Wordpress, PHP, jQuery, SASS, ACF and more.
            </p>
            <GutsAndGlory />
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
