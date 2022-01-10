import { memo } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface Props {
  image: string;
}

export const ImageBackground = memo(function ImageBackground({ image }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: '0 0 0 0',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <Box
        sx={{
          height: '100%',
          ...theme.mixins.bluredBackground,
        }}
      />
    </Box>
  );
});
