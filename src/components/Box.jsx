import React from 'react';

const Box = ({ children }) => {
  return (
    <>
      <div className="bg-gray-700 w-full rounded-lg hover:bg-gray-900 transition duration-100">
        {children}
      </div>
    </>
  );
};

export default Box;
