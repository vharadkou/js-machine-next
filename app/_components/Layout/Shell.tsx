'use client';

import { memo, ReactNode } from 'react';

import { StaticImageData } from 'next/image';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import { Breakpoint, SxProps, Theme } from '@mui/material/styles';

import { ImageBackground } from './ImageBackground';
import { Layout } from './Layout';
import { Offset } from './Offset';

import { Video } from '../Video';

interface Props {
  isLoading?: boolean;
  hideOffset?: boolean;
  image?: StaticImageData;
  video?: string;
  noBluredBackground?: boolean;
  sx?: SxProps<Theme>;
  maxWidth?: Breakpoint | false;
  children?: ReactNode;
  hideLayout?: boolean;
}

export const Shell = memo(function Shell({
  isLoading,
  hideOffset,
  image,
  video,
  noBluredBackground,
  sx,
  maxWidth,
  children,
  hideLayout,
}: Props) {
  return (
    <>
      <Box
        id="back-to-top-anchor"
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {!hideOffset && <Offset />}
        {!isLoading && (
          <Container
            sx={{
              flex: 1,
              mt: 2,
              mb: 2,
              ...sx,
            }}
            maxWidth={maxWidth}
          >
            {children}
          </Container>
        )}
        {!hideOffset && (
          <Offset sx={{ display: { xs: 'block', sm: 'none' } }} />
        )}
      </Box>
      {!hideLayout && <Layout />}
      {isLoading && (
        <LinearProgress
          color="secondary"
          sx={{ position: 'fixed', zIndex: 1, width: '100%' }}
        />
      )}
      {image && (
        <ImageBackground
          image={image}
          noBluredBackground={noBluredBackground}
        />
      )}
      {video && <Video path="video/main.mp4" />}
    </>
  );
});
