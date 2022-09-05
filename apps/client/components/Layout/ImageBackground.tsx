import { memo } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface Props {
  image: string;
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
        position: 'fixed',
        width: '100vw',
        height:
          'calc(100vh + env(safe-area-inset-bottom) + env(safe-area-inset-top))',
      }}
    >
      <Image
        src={image}
        alt="Picture of the author"
        layout="fill"
        objectPosition="center center"
        objectFit="cover"
        placeholder="blur"
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
