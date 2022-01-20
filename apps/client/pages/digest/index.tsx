import { useMemo } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Shell } from '../../components/Layout/Shell';
import { useGetDigestsQuery } from '../../redux/service';
import { DigestCard } from '../../components/DigestCard';
import DigestJpg from '../../public/images/digest.jpg';
import { Digest } from '../../redux/models';

function Digest() {
  const { data, isLoading } = useGetDigestsQuery('');

  const mappedData = useMemo(
    () =>
      data
        ? data.reduce<{ [key: string]: Digest[] }>((prev, current) => {
            const year = new Date(current.date).getFullYear();
            const month = new Date(current.date)
              .toLocaleString('ru', { month: 'long' })
              .toUpperCase();

            const key = `${year} ${month}`;
            prev[key] = prev[key] ? [...prev[key], current] : [current];

            return prev;
          }, {})
        : [],
    [data]
  );

  return (
    <Shell
      image={DigestJpg}
      isLoading={isLoading}
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {Object.keys(mappedData).map((key) => (
        <Box key={key}>
          <Typography variant="h6" sx={{ pl: 1 }} color="white" gutterBottom>
            {key}
          </Typography>
          <Grid
            container
            direction="row"
            sx={{ justifyContent: 'start', mb: 2 }}
            spacing={2}
          >
            {mappedData[key].map((digest) => (
              <Grid key={digest.id} item xs={12} sm={6} md={4} lg={3}>
                <DigestCard digest={digest} sx={{ height: '100%' }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Shell>
  );
}

export default Digest;
