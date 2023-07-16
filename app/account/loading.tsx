'use client';

import Box from '@/components/Box';
import { BounceLoader } from 'react-spinners';

const Loading = () => {
  return (
    <Box classname="h-full flex items-center justify-center">
      Loading...
      <BounceLoader color="#wwc55e" size={40} />
    </Box>
  );
};

export default Loading;
