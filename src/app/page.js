import React from 'react';

import data from '@/db.json';

import Heading from '@/components/Heading';
import DownloadBox from '@/components/DownloadBox';
import HowToInstall from '@/components/HowToInstall';

const page = () => {
  return (
    <>
      <Heading HeadingText={data.HeadingText} />
      <div className="space-y-4">
        <DownloadBox downloadlink={data.downloadURL} />
        <HowToInstall videoURL={data.videoURL} />
      </div>
    </>
  );
};

export default page;
