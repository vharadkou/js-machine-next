'use client';

import Box from '@mui/material/Box';

import { EventCard } from './_components/EventCard';
import { GrowAnimation } from './_components/GrowAnimation';
import { Shell } from './_components/Layout/Shell';
import { useGetEventsQuery } from './_redux/service';

import VideoImage from '../public/images/video.jpg';

export default function Home() {
  const { data, isLoading } = useGetEventsQuery();

  return (
    <Shell
      isLoading={isLoading}
      image={VideoImage}
      noBluredBackground
      video="/video/main.mp4"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'start', sm: 'center' },
        viewTransitionName: 'jsm-content',
      }}
      maxWidth="sm"
    >
      {data?.slice(0, 4).map((event, index) => (
        <GrowAnimation key={event.slug} index={index}>
          <Box>
            <EventCard event={event} sx={{ mb: 1 }} />
          </Box>
        </GrowAnimation>
      ))}
    </Shell>
  );
}
