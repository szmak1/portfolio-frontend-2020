import React, { useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
// import HeroImage from '../svg/HeroImage';
import JointAcademy from '../svg/logos/JointAcademy';
import GutsAndGlory from '../svg/logos/GutsAndGlory';
import BestFriends from '../svg/logos/bestFriends';
import DjSzmak from '../svg/logos/DjSzmak';
import SvgCharts from '../svg/SvgCharts';
import DevSkills from '../components/DevSkills';
import OtherSkills from '../components/OtherSkills';
import CodeIlu1 from '../svg/code-ilu-1';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto lg:flex justify-between">
        <div className="text-center lg:text-left lg:w-1/2 ">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Front-End Developer
          </h1>
          <h2 className="text-2xl lg:text-4xl xl:text-4xl font-bold text-gray-700">
            4 years of code experiance
          </h2>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            My name is David and I live in Malmö, Sweden. I love to Code, DJ, play PC games and
            watch movies.
          </p>
          <p className="mt-200 md:mt-12">
            <AnchorLink size="lg" href="#stats">
              <Button size="lg">Go to my Skills</Button>
            </AnchorLink>
          </p>
        </div>
        <div style={{ zIndex: -1 }} className="flex flex-wrap flex-center lg:w-1/3">
          <StaticImage
            className="shadow-lg object-contain object-cover rounded align-middle border-none "
            src="../images/davidszmak.png"
            alt="David Szmak - Front End Developer"
          />
        </div>
      </div>
    </section>

    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">My work experience</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8 Cards">
              <h3 className="text-2xl mb-4">FRONT-END DEVELOPER</h3>
              <p className="font-semibold text-xl">Joint Academy</p>
              <p className="font-bold text-gray-700">2020 - now</p>
              <p className="mt-4 mb-12 text-left">
                I work in a Marketing team in Joint Academy and the size of my team is 12 colleges.
                My stacks are React/Gatsby, Storybook, PHP, SASS, ACF and more.
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
                I was an Intern two times at Guts & Glory. I learn a lot from an Full-Stack
                Developer. Here I worked with Wordpress, PHP, jQuery, SASS, ACF and more.
              </p>
              <GutsAndGlory />
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section className="container mx-auto bg-gray-100 rounded-lg mb-24">
      <div className="px-12 py-32 align-center">
        <h3 className="text-5xl font-semibold text-center"> Education</h3>
        <ol className="items-center sm:flex mt-16">
          <li className="relative mb-6 sm:mb-0 w-1/3">
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-3 h-3 text-blue-600 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div
                className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
                style={{ borderTop: '8px solid #edf2f7' }}
              ></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Augusti 2016 - Juni 2018
              </h3>
              <time className="block mb-2 text-lg font-normal leading-none text-gray-600 dark:text-gray-500">
                KYH-UTBILDNING, 400 POÄNG
              </time>
              <p className="text-base font-normal text-gray-700 dark:text-gray-800">
                KYH Yrkeshögskola i Malmö Examensbevis
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 w-1/3">
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-3 h-3 text-blue-600 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div
                style={{ borderTop: '8px solid #edf2f7' }}
                className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
              ></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                September 2002 - Juni 2003
              </h3>
              <time className="block mb-2 text-lg font-normal leading-none text-gray-600 dark:text-gray-500">
                COMPUTER SCIENCE
              </time>
              <p className="text-base font-normal text-gray-700 dark:text-gray-400">
                Auburn city college California, USA
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 w-1/3">
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-3 h-3 text-blue-600 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div
                style={{ borderTop: '8px solid #edf2f7' }}
                className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
              ></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                September 2001 - Juni 2002
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">
                HIGH SCHOOL
              </time>
              <p className="text-base font-normal text-gray-700 dark:text-gray-400">
                Bitney Springs Charter High School California, USA
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <SplitSection
      fixAlign="flex justify-end"
      title="My Code skills"
      primarySlot={
        <div className="w-3/4">
          <DevSkills />
        </div>
      }
      secondarySlot={<CodeIlu1 />}
    />
    <SplitSection
      reverseOrder
      title="Marketing Skills"
      primarySlot={
        <div className="w-3/4 float-right">
          <OtherSkills />
        </div>
      }
      secondarySlot={
        <StaticImage
          style={{ top: '-24px', zIndex: '-2px' }}
          src="../images/codeguy.png"
          alt="David Szmak - Front End Developer"
        />
      }
    />
    <SplitSection
      id="services"
      title="About me"
      primarySlot={
        <div className="md:pr-20">
          <h3 className="text-3xl font-semibold leading-tight">Spain</h3>
          <p className="mt-8 text-xl font-light leading-relaxed text-justify">
            I was born in{' '}
            <a url="https://www.google.com/search?q=la+manga+del+mar+menor+spanien&sxsrf=ALiCzsa9nO-VMzG08bRn17Ila-AeFIqZmw:1658483253429&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjty77Jm4z5AhVCOHoKHfY2AXwQ_AUoAnoECAIQBA&biw=1954&bih=1075&dpr=1">
              La Manga Del mar menor
            </a>{' '}
            in Spain. I grew up in this paradise with my family and friends. I loved to surf & sail
            Catamaran.
          </p>
        </div>
      }
      secondarySlot={
        <StaticImage
          style={{ zIndex: -1 }}
          className="flex justify-center shadow-lg object-contain object-cover rounded align-middle border-none float-right "
          src="../images/lamanga.jpeg"
          alt="David Szmak - Front End Developer"
        />
      }
    />
    <SplitSection
      fixAlign=""
      reverseOrder
      primarySlot={
        <div className="">
          <h3 className="text-3xl font-semibold leading-tight text-right">Sidekick job</h3>
          <p className="mt-8 text-xl font-light leading-relaxed text-justify">
            My first job was a DJ was in Spain and I still work as one here in Malmö, Sweden. In
            Spain I have had many DJ gigs, but the best place I have worked in was in{' '}
            <a href="https://www.pacha.com">Pacha</a>. In Malmö I have worked in many clubs. Atm I
            get all my Dj Gigs from my site <a href="https://www.djszmak.se">djszmak.se</a>.
          </p>
        </div>
      }
      secondarySlot={
        <div className="float-left py-32 ">
          <DjSzmak />
        </div>
      }
    />
    <SplitSection
      primarySlot={
        <div className="md:pr-20">
          <h3 className="text-3xl font-semibold leading-tight">Malmö</h3>
          <p className="mt-8 text-xl font-light leading-relaxed text-justify">
            Right now I live in Hyllie in Malmö. I live togather with my family and I have a 4 year
            old dougher. In my free time I on my different interest such as producing music, code
            new fun projects & play computer games.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />

    {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section> */}
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        {/* <LabelText className="mb-8 text-gray-600 text-center">
          My LinkedIn Testimonials are saying
        </LabelText> */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-12">
            My LinkedIn Testimonials are saying
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Do you need me?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section> */}
  </Layout>
);

export default Index;
