import React from "react"

const SplitSection = ({
  id,
  primarySlot,
  secondarySlot,
  reverseOrder,
  title,
  fixAlign,
}) => (
  <section id={id} className="py-20">
    {title && (
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-16">{title}</h2>
      </div>
    )}
    <div className="container mx-auto items-center flex flex-col lg:flex-row">
      <div className="lg:w-1/2">{primarySlot}</div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 David ${fixAlign} ${
          reverseOrder && `order-last lg:order-first`
        } 
        }`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
)

export default SplitSection
