import { Video } from '../components/Video';
import Box from '@mui/material/Box';

export function Index() {
  return (
    <Box>
      <Video
        style={{
          objectFit: 'cover',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
        path="video/main.mp4"
      />
    </Box>
  );
}

export default Index;
