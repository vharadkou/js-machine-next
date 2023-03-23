import { memo, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import { Breakpoint, SxProps, Theme } from '@mui/material/styles';
import Head from 'next/head';
import { Offset } from './Offset';
import { ImageBackground } from './ImageBackground';
import { Video } from '../Video';
import { StaticImageData } from 'next/image';

const DEFAULT_TITLE = 'JS Machine App';

interface Props {
  isLoading?: boolean;
  hideOffset?: boolean;
  image?: string | StaticImageData;
  video?: string;
  noBluredBackground?: boolean;
  sx?: SxProps<Theme>;
  maxWidth?: Breakpoint | false;
  title?: string;
  children?: ReactNode;
}

export const Shell = memo(function Shell({
  isLoading,
  hideOffset,
  image,
  video,
  noBluredBackground,
  sx,
  maxWidth,
  title = DEFAULT_TITLE,
  children,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
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
      <Box
        id="back-to-top-anchor"
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {!hideOffset && <Offset />}
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
        {!hideOffset && (
          <Offset sx={{ display: { xs: 'block', sm: 'none' } }} />
        )}
      </Box>
    </>
  );
});
