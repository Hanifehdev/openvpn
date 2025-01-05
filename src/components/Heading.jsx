import React from 'react';
import Logo from './Logo';
const Heading = ({ HeadingText }) => {
  return (
    <div>
      <Logo />
      <div className="text-center font-bold py-6 text-2xl">{HeadingText}</div>
    </div>
  );
};

export default Heading;
