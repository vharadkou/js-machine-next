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
        height: '100vh',
      }}
      style={{ width: '100lvw', height: '100lvh' }}
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
          height: '100vh',
          ...(!noBluredBackground && theme.mixins.bluredBackground),
        }}
        style={{ width: '100lvw', height: '100lvh' }}
      />
    </Box>
  );
});
