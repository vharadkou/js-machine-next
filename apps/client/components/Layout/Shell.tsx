import { memo, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import { SxProps, Theme } from '@mui/material/styles';
import { Offset } from './Offset';
import { ImageBackground } from './ImageBackground';
import { Video } from '../Video';

interface Props {
  isLoading?: boolean;
  image?: string;
  video?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

export const Shell = memo(function Shell({
  isLoading,
  image,
  video,
  sx,
  children,
}: Props) {
  return (
    <>
      {isLoading && (
        <LinearProgress
          color="secondary"
          sx={{ position: 'fixed', zIndex: 1, width: '100%' }}
        />
      )}
      {image && <ImageBackground image={image} />}
      {video && <Video path="video/main.mp4" />}
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Offset />
        <Container
          sx={{
            flex: 1,
            mt: 2,
            ...sx,
          }}
          maxWidth={'sm'}
        >
          {children}
        </Container>
        <Offset />
      </Box>
    </>
  );
});
