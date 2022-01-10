import { memo } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface Props {
  image: string;
}

export const ImageBackground = memo(function ImageBackground({ image }: Props) {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'fixed', inset: '0 0 0 0' }}>
      <Image
        src={image}
        alt="Picture of the author"
        layout="fill"
        objectPosition="center center"
        objectFit="cover"
        placeholder="blur"
      />
      <Box sx={{ height: '100%', ...theme.mixins.bluredBackground }} />
    </Box>
  );
});
