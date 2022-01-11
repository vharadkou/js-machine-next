import { EventCard } from '../components/EventCard';
import { Shell } from '../components/Layout/Shell';
import EventsJpg from '../public/images/events.jpg';
import { useGetEventsQuery } from '../redux/events';

function Events() {
  const { data, isLoading } = useGetEventsQuery('');

  return (
    <Shell
      isLoading={isLoading}
      image={EventsJpg}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {data?.map((event) => (
        <EventCard key={event.id} event={event} sx={{ mb: 2 }} />
      ))}
    </Shell>
  );
}

export default Events;
