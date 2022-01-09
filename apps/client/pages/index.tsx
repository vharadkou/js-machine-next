import { Video } from '../components/Video';
import Box from '@mui/material/Box';

export function Index() {
  return (
    <Box>
      <Video
        style={{
          position: 'fixed',
          top: '50%',
          right: '50%',
          transform: 'translate(50%,-50%)',
        }}
        path="video/main.mp4"
      />
    </Box>
  );
}

export default Index;
