import Grid from '@mui/material/Grid';
import { useGetEventsQuery } from '../redux/service';
import { EventCard } from '../components/EventCard';
import { Shell } from '../components/Layout/Shell';
import { GrowAnimation } from '../components/GrowAnimation';
import EventsJpg from '../public/images/events.jpg';

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
      title="Events"
    >
      <Grid
        container
        direction="row"
        sx={{ justifyContent: { sx: 'start', md: 'center' }, mb: 2 }}
        spacing={2}
      >
        {data?.map((event, index) => (
          <GrowAnimation key={event.id} index={index}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <EventCard event={event} sx={{ height: '100%' }} />
            </Grid>
          </GrowAnimation>
        ))}
      </Grid>
    </Shell>
  );
}

export default Events;
