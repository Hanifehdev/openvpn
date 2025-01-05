import React from 'react';

import Box from './Box';

import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const DownloadBox = ({ downloadlink }) => {
  const text = 'دانلود نرم‌افزار (اندروید)';

  return (
    <>
      <Box>
        <a href={downloadlink} className="flex items-center justify-between">
          <h3>{text}</h3>
          <ArrowDownTrayIcon className="w-6 h-6" />
        </a>
      </Box>
    </>
  );
};

export default DownloadBox;
