import React from 'react';
import Box from './Box';
import Link from 'next/link';
import { VideoCameraIcon } from '@heroicons/react/24/outline';

const HowToInstall = ({ videoURL }) => {
  return (
    <>
      <Box>
        <Link href={videoURL} className="boxItem">
          <h3>آموزش فعالسازی</h3>
          <VideoCameraIcon className="w-6 h-6" />
        </Link>
      </Box>
    </>
  );
};

export default HowToInstall;
