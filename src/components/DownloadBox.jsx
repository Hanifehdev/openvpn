import React from 'react';
import Link from 'next/link';

import Box from './Box';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const DownloadBox = ({ downloadlink }) => {
  const text = 'دانلود نرم‌افزار (اندروید)';

  return (
    <>
      <Box>
        <Link href={downloadlink} className="boxItem">
          <h3>{text}</h3>
          <ArrowDownTrayIcon className="w-6 h-6" />
        </Link>
      </Box>
    </>
  );
};

export default DownloadBox;
