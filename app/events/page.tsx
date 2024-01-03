'use client';

import Grid from '@mui/material/Grid';

import EventsImage from '../../public/images/events.jpg';
import { EventCard } from '../_components/EventCard';
import { GrowAnimation } from '../_components/GrowAnimation';
import { Shell } from '../_components/Layout/Shell';
import { useGetEventsQuery } from '../_redux/service';

export default function Events() {
  const { data, isLoading } = useGetEventsQuery();

  return (
    <Shell
      isLoading={isLoading}
      image={EventsImage}
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
          <GrowAnimation key={event.slug} index={index}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <EventCard event={event} sx={{ height: '100%' }} />
            </Grid>
          </GrowAnimation>
        ))}
      </Grid>
    </Shell>
  );
}
