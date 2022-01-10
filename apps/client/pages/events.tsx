import Box from '@mui/material/Box';
import { ImageBackground } from '../components/Layout/ImageBackground';
import EventsJpg from '../public/images/events.jpg';

function Events() {
  return (
    <>
      <ImageBackground image={EventsJpg} />
      <Box>News</Box>
    </>
  );
}

export default Events;
