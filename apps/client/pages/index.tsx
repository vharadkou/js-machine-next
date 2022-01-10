import { Video } from '../components/Video';
import Box from '@mui/material/Box';
import { Offset } from '../components/Layout/Offset';
import Typography from '@mui/material/Typography';

function Index() {
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
