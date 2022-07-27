import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';

const ReadMoreReadLess = () => {
  return (
    <>
      <ReadMoreAndLess
        className="read-more-content"
        charLimit={146}
        readMoreText="Read more"
        readLessText=""
      >
        I hired David to make cosmetic changes on my webshop www.prylster.se and I am very satisfied
        with the results. David is a great listener and he kept doing changes until it met my vision
        and needs. I can recommend David to anyone that needs a good Front End Developer.
      </ReadMoreAndLess>
    </>
  );
};

export default ReadMoreReadLess;
