import { useGetRecentEventsQuery } from '../redux/events';
import { EventCard } from '../components/EventCard';
import { Shell } from '../components/Layout/Shell';
import VideoJpg from '../public/images/video.jpg';

function Index() {
  const { data, isLoading } = useGetRecentEventsQuery('');

  return (
    <Shell
      isLoading={isLoading}
      image={VideoJpg}
      video="video/main.mp4"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'start', sm: 'center' },
      }}
      maxWidth="sm"
    >
      {data?.map((event) => (
        <EventCard key={event.id} event={event} sx={{ mb: 1 }} />
      ))}
    </Shell>
  );
}

export default Index;
