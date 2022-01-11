import { memo, useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';

import { Video } from '../components/Video';
import { Offset } from '../components/Layout/Offset';
import { useGetRecentEventsQuery } from '../redux/events';
import { Event } from '../redux/models';

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
            <RecentEvent key={event.id} event={event} />
          ))}
        </Container>
        <Offset sx={{ display: { xs: 'block', sm: 'none' } }} />
      </Box>
    </Box>
  );
}

interface Props {
  event: Event;
}

const RecentEvent = memo(function RecentEvent({ event }: Props) {
  const theme = useTheme();

  const { day, year, month } = useMemo(
    () => ({
      day: new Date(event.date).getDate(),
      year: new Date(event.date).getFullYear(),
      month: new Date(event.date)
        .toLocaleString('ru', { month: 'short' })
        .toUpperCase(),
    }),
    [event.date]
  );

  return (
    <Card key={event.id} sx={{ mb: 2, ...theme.mixins.bluredBackground }}>
      <CardContent sx={{ display: 'flex' }}>
        <Box sx={{ mr: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            {day}
          </Typography>
          <Typography variant="body2">{month}</Typography>
          <Typography variant="body2">{year}</Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {event.title}
          </Typography>
          <Typography variant="body2">{event.description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
});

export default Index;
