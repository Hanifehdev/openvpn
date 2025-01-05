import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex justify-center">
      <div className="p-4 bg-gray-200 w-fit rounded-full">
        <Image
          className="w-12 h-12"
          width={256}
          height={256}
          src={'/logo.png'}
          alt="Open VPN Logo"
        />
      </div>
    </div>
  );
};

export default Logo;
