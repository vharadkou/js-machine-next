import { useGetRecentEventsQuery } from '../redux/service';
import { EventCard } from '../components/EventCard';
import { Shell } from '../components/Layout/Shell';
import { GrowAnimation } from '../components/GrowAnimation';
import VideoJpg from '../public/images/video.jpg';
import Box from '@mui/material/Box';

function Index() {
  const { data, isLoading } = useGetRecentEventsQuery('');

  return (
    <Shell
      isLoading={isLoading}
      image={VideoJpg}
      noBluredBackground
      video="video/main.mp4"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'start', sm: 'center' },
        viewTransitionName: 'jsm-content',
      }}
      maxWidth="sm"
    >
      {data?.map((event, index) => (
        <GrowAnimation key={event.id} index={index}>
          <Box>
            <EventCard event={event} sx={{ mb: 1 }} />
          </Box>
        </GrowAnimation>
      ))}
    </Shell>
  );
}

export default Index;
