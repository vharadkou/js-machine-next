import { Video } from '../components/Video';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Offset } from '../components/Layout/Offset';

export function Index() {
  return (
    <Box>
      <Video path="video/main.mp4" />
      <Box sx={{ position: 'relative' }}>
        <Offset />
        <Typography variant="h5">Content</Typography>
      </Box>
    </Box>
  );
}

export default Index;
