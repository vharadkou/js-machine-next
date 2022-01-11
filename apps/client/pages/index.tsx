import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';

import { Video } from '../components/Video';
import { Offset } from '../components/Layout/Offset';
import { useGetRecentEventsQuery } from '../redux/events';
import { ImageBackground } from '../components/Layout/ImageBackground';
import VideoJpg from '../public/images/video.jpg';
import { EventCard } from '../components/EventCard';

function Index() {
  const { data, isLoading } = useGetRecentEventsQuery('');

  return (
    <Box sx={{ height: '100%' }}>
      {isLoading && (
        <LinearProgress
          color="secondary"
          sx={{ position: 'fixed', zIndex: 1, width: '100%' }}
        />
      )}
      <ImageBackground image={VideoJpg} noBluredBackground />
      <Video path="video/main.mp4" />
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
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: { xs: 'start', sm: 'center' },
            mt: 2,
          }}
        >
          {data?.map((event) => (
            <EventCard key={event.id} event={event} sx={{ mb: 2 }} />
          ))}
        </Container>
        <Offset sx={{ display: { xs: 'block', sm: 'none' } }} />
      </Box>
    </Box>
  );
}

export default Index;
