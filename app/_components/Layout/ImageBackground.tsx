import { memo } from 'react';

import Image, { StaticImageData } from 'next/image';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface Props {
  image: StaticImageData;
  noBluredBackground?: boolean;
}

export const ImageBackground = memo(function ImageBackground({
  image,
  noBluredBackground,
}: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        inset: 0,
        position: 'fixed',
        width: '100vw',
        height:
          'calc(100vh + env(safe-area-inset-bottom) + env(safe-area-inset-top))',
      }}
    >
      <Image
        src={image.src}
        style={{ objectFit: 'cover', objectPosition: 'center center' }}
        alt="Picture of the author"
        placeholder="blur"
        blurDataURL={image.blurDataURL}
        fill
        priority
      />
      <Box
        sx={{
          width: '100vw',
          height:
            'calc(100vh + env(safe-area-inset-bottom) + env(safe-area-inset-top))',
          ...(!noBluredBackground && theme.mixins.bluredBackground),
        }}
      />
    </Box>
  );
});
