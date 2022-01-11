import Grid from '@mui/material/Grid';
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
      maxWidth={false}
    >
      <Grid
        container
        direction="row"
        sx={{ justifyContent: { sx: 'start', md: 'center' } }}
        spacing={2}
      >
        {data?.map((event) => (
          <Grid key={event.id} item xs={12} sm={6} md={4} lg={3}>
            <EventCard event={event} sx={{ height: '100%' }} />
          </Grid>
        ))}
      </Grid>
    </Shell>
  );
}

export default Events;
