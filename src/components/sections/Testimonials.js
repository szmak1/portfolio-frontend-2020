import React from 'react';
import Card from '../Card';
import ReadMoreReadLess from '../ReadMoreReadLess';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-12">Testimonials</h2>
        </div>
        <div className="flex flex-col md:flex-row md:-mx-3">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="text-xl font-semibold">Prylster</p>
              <p className="mt-6">
                <ReadMoreReadLess />
              </p>
              <div className="flex items-center mt-8">
                <img
                  className="w-12 h-12 mr-4 rounded-full"
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQHCj8nXVQ0PZA/profile-displayphoto-shrink_100_100/0/1526775571657?e=1664409600&v=beta&t=Do3WH6cCVDCBNhjj06gs1AJS3eayj-7dQjFH_PO698Q"
                  alt="Testimonial Guts&Glory"
                />
                <div>
                  <p className="mb-0">Antonio Markovic</p>
                  <p className="text-sm text-gray-600">Digital Marketing - Growth Hacker</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="text-xl font-semibold">Guts&Glory</p>
              <p className="mt-6">
                <ReadMoreReadLess />
              </p>
              <div className="flex items-center mt-8">
                <img
                  className="w-12 h-12 mr-4 rounded-full"
                  src="https://media-exp2.licdn.com/dms/image/C4D03AQG2euUqAU9oIw/profile-displayphoto-shrink_100_100/0/1516977325292?e=1660176000&v=beta&t=PdExB-BwlfhCjNSepwGoIfny_DPxbcb7TyKIBjk3lrM"
                  alt="Testimonial Guts&Glory"
                />
                <div>
                  <p className="mb-0">Ehsan Pourhadi</p>
                  <p className="text-sm text-gray-600">Full Stack Developer</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex-1 px-3 ">
            <Card className="mb-8 ">
              <p className="text-xl font-semibold">Bästa Kompisar</p>
              <p className="mt-6">
                David was both competent and creative in his role as full-stack developer at Best
                Friends. My warmest recommendations 👍
              </p>
              <div className="flex items-center mt-8">
                <img
                  className="w-12 h-12 mr-4 rounded-full"
                  src="https://media-exp2.licdn.com/dms/image/C4E03AQGq9Hc2dhvihw/profile-displayphoto-shrink_100_100/0/1653467985743?e=1660176000&v=beta&t=LlQ7nDsQgbchUPOddseWj2mlR6mEbV9d84woGpw6Jrc"
                  alt="Testimonial Bästa Kompisar"
                />
                <div>
                  <p className="mb-0">Ola Mohlin</p>
                  <p className="text-sm text-gray-600">Owner</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
