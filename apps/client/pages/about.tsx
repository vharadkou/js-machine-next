import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Offset } from '../components/Layout';

export function About() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(images/about.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <Box sx={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Offset />
        <Container maxWidth={false}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            О НАС
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
