import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Education from '../components/sections/Education';
import Experience from '../components/sections/Experience';
import Hero from '../components/sections/Hero';
import Seo from '../components/seo';
import SplitSection from '../components/SplitSection';
import DevSkills from '../components/DevSkills';
import CodeIlu1 from '../assets/svg/code-ilu-1';
import DjSzmak from '../assets/svg/logos/DjSzmak';
import Testimonials from '../components/sections/Testimonials';
import WorkProjects from '../components/sections/WorkProjects';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Experience />
    <Education />
    <SplitSection
      id="skills"
      fixAlign="flex justify-end"
      title="My Code skills"
      primarySlot={
        <div className="w-3/4 zdex">
          <DevSkills />
        </div>
      }
      secondarySlot={<CodeIlu1 />}
    />
    <SplitSection
      id="about"
      title="About me"
      primarySlot={
        <div className="md:pr-20">
          <h3 className="text-3xl font-semibold leading-tight">Spain</h3>
          <p className="mt-8 text-xl font-light leading-relaxed text-justify">
            I was born in{' '}
            <a href="https://www.google.com/search?q=la+manga+del+mar+menor+spanien&sxsrf=ALiCzsa9nO-VMzG08bRn17Ila-AeFIqZmw:1658483253429&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjty77Jm4z5AhVCOHoKHfY2AXwQ_AUoAnoECAIQBA&biw=1954&bih=1075&dpr=1">
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
            I live in Malmö togather with my family. In my free time I like to produce music, code
            new fun projects & play computer games.
          </p>
        </div>
      }
      secondarySlot={
        <StaticImage
          style={{ zIndex: -1 }}
          className="flex justify-center shadow-lg object-contain object-cover rounded align-middle border-none float-right "
          src="../images/malmö.jpeg"
          alt="Malmö - David Szmak - Front End Developer"
        />
      }
    />
    <Testimonials />
    <WorkProjects />
    <section className="bg-white">
      <div className="py-8 lg:pt-0 lg:pb-16 mx-auto max-w-screen-xl px-4">
        <h3 className="mb-4 lg:mb-12 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-3xl">
          Other companies
        </h3>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 dark:text-gray-400">
          <a href="#" className="flex justify-center items-center">
            <StaticImage
              src="https://images.prismic.io/royaldesign/a89746e6520cd7b9b8876c00b9475aec554bc336_moccamaster_logo_bl.png?auto=compress,format"
              alt="Malmö - David Szmak - Front End Developer"
            />
          </a>
          <a href="#" className="flex justify-center items-center">
            <StaticImage
              src="https://www.malmosaluhall.se/wp-content/themes/gg/assets/img/logo.png"
              alt="Malmö - David Szmak - Front End Developer"
            />
          </a>
          <a href="#" className="flex justify-center items-center">
            <StaticImage
              src="https://www.jobreg.no/images/logos/290421014054_3896_d4b07ae8e63efd868860a7e255b2fe16ff56fb373063c2e67b6dad90958adf89501ee06be4bf5e8e33dea9.png"
              alt="Malmö - David Szmak - Front End Developer"
            />
          </a>

          <a href="#" className="flex justify-center items-center">
            <StaticImage
              src="http://beijerventures.se/wp-content/uploads/2022/03/doktor-2.png"
              alt="Malmö - David Szmak - Front End Developer"
            />
          </a>
          <a href="#" className="flex justify-center items-center">
            <StaticImage
              src="https://classicum.se/wp-content/uploads/2021/10/Classicum-logga.png"
              alt="Malmö - David Szmak - Front End Developer"
            />
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
