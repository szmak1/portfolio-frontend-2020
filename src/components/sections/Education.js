import React from 'react';

const Education = () => {
  return (
    <section
      id="education"
      className="container mx-auto bg-blue-500 rounded-lg mb-24"
      // style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="px-8 md:px-12 py-14 md:py-32 align-center">
        <h2 className="text-5xl font-semibold text-center text-white pb-12"> Education</h2>
        <ol className="items-center sm:flex mx-0">
          <li className="relative mb-6 sm:mb-0 sm:w-1/1 md:w-1/3">
            <div className="flex items-center">
              <div className="flex z-10 justify-start md:justify-center items-center w-12 h-12 rounded-full ring-0 ring-white  sm:ring-4 dark:ring-white shrink-0">
                <svg
                  className="w-8 h-8"
                  fill="#fff"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div
                className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
                style={{ borderTop: '4px solid #fff' }}
              ></div>
            </div>
            <div className="mt-3 sm:pr-8 text-white" data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease-out-back">
              <h3 className="mb-3 text-lg">September 2001 - June 2002</h3>
              <time className="block text-lg leading-none">HIGH SCHOOL</time>
              <p className="text-base">Bitney Springs Charter in California, USA</p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 sm:w-1/1 md:w-1/3">
            <div className="flex items-center">
              <div className="flex z-10 justify-start md:justify-center items-center w-12 h-12 rounded-full ring-0 ring-white  sm:ring-4 dark:ring-white shrink-0">
                <svg
                  className="w-8 h-8"
                  fill="#fff"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div
                style={{ borderTop: '4px solid #fff' }}
                className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
              ></div>
            </div>
            <div className="mt-3 sm:pr-8 text-white" data-sal="slide-up"
  data-sal-delay="600"
  data-sal-easing="ease-out-back">
              <h3 className="mb-3 text-lg ">September 2002 - June 2003</h3>
              <time className="block text-lg leading-none">COMPUTER SCIENCE</time>
              <p className="text-base ">Auburn city college California, USA</p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 sm:w-1/1 md:w-1/3">
            <div className="flex items-center">
              <div className="flex z-10 justify-start md:justify-center items-center w-12 h-12 rounded-full ring-0 ring-white  sm:ring-4 dark:ring-white shrink-0">
                <svg
                  className="w-8 h-8"
                  fill="#fff"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div
                style={{ borderTop: '4px solid #fff' }}
                className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
              ></div>
            </div>

            <div className="mt-3 sm:pr-8 text-white" data-sal="slide-up"
  data-sal-delay="900"
  data-sal-easing="ease-out-back">
              <h3 className="mb-3 text-md  ">August 2016 - June 2018</h3>
              <time className="block text-lg leading-none">YH-EDUCATION, 400 POINTS</time>
              <p className="text-base ">Higher Vocational Education</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Education;
