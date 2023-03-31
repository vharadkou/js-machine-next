import { CSSProperties } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface Props {
  style?: CSSProperties;
  path: string;
}

export function Video({ path, style }: Props) {
  const theme = useTheme();

  return (
    <>
      <video
        id="myVideo"
        style={{
          objectFit: 'cover',
          width: '100vw',
          height:
            'calc(100vh + env(safe-area-inset-bottom) + env(safe-area-inset-top))',
          position: 'fixed',
          top: 0,
          left: 0,
          ...style,
        }}
        autoPlay
        muted
        loop
        poster="images/video.jpg"
      >
        <source src={path} type="video/mp4" />
      </video>
      <Box
        sx={{
          width: '100vw',
          height:
            'calc(100vh + env(safe-area-inset-bottom) + env(safe-area-inset-top))',
          position: 'fixed',
          inset: '0 0 0 0',
          ...theme.mixins.bluredBackground,
        }}
      ></Box>
    </>
  );
}
