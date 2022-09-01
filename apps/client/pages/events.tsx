import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import { EventCard } from '../components/EventCard';
import { Shell } from '../components/Layout/Shell';
import EventsJpg from '../public/images/events.jpg';
import { useGetEventsQuery } from '../redux/service';

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
        sx={{ justifyContent: { sx: 'start', md: 'center' }, mb: 2 }}
        spacing={2}
      >
        {data?.map((event, index) => (
          <Grow
            in
            key={event.id}
            style={{ transformOrigin: '0 0 0' }}
            timeout={animationDelayByIndex(index)}
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <EventCard event={event} sx={{ height: '100%' }} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Shell>
  );
}

const BASE_ANIMATION_DELAY = 500;

function animationDelayByIndex(index: number) {
  return BASE_ANIMATION_DELAY * Math.log(index + 2);
}

export default Events;
