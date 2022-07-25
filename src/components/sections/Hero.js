import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Button from "@components/Button"

const Hero = () => (
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
          My future goals are to become a tech lead front end developer. I want
          to work React/Gatsby and Wordpress or other Headless CMS.I’m also
          interested to learn other frameworks/libraries: Svelte, Redwood.
        </p>
        <p className="mt-200 md:mt-12">
          <AnchorLink size="lg" href="#stats">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Check my 1337 skills here!
            </Button>
          </AnchorLink>
        </p>
      </div>
      <div
        style={{ zIndex: -1 }}
        className="flex flex-wrap flex-center lg:w-1/3"
      >
        <StaticImage
          className="shadow-lg object-contain object-cover rounded align-middle border-none "
          src="../../images/davidszmak.png"
          alt="David Szmak - Front End Developer"
        />
      </div>
    </div>
  </section>
)

export default Hero
