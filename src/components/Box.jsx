import React from 'react';

const Box = ({ children }) => {
  return (
    <>
      <div className="p-6 bg-gray-700 w-full rounded-lg focus:ring ring-gray-600 transition duration-100">
        {children}
      </div>
    </>
  );
};

export default Box;
