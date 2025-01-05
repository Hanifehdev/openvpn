import React from 'react';

const Box = ({ children }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="sm:max-w-2xl bg-gray-700 w-full rounded-lg hover:bg-gray-900 transition duration-100">
          {children}
        </div>
      </div>
    </>
  );
};

export default Box;
