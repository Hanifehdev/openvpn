import React from 'react';
import Box from './Box';

import { VideoCameraIcon } from '@heroicons/react/24/outline';

const HowToInstall = ({ videoURL }) => {
  return (
    <>
      <Box>
        <a href={videoURL} className="flex items-center justify-between">
          <h3>آموزش فعالسازی</h3>
          <VideoCameraIcon className="w-6 h-6" />
        </a>
      </Box>
    </>
  );
};

export default HowToInstall;
