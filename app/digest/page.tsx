'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DigestImage from '../../public/images/digest.jpg';
import { DigestCard } from '../_components/DigestCard';
import { GrowAnimation } from '../_components/GrowAnimation';
import { Shell } from '../_components/Layout/Shell';
import { useGetDigestsQuery } from '../_redux/service';

export default function Digest() {
  const { data, isLoading } = useGetDigestsQuery();

  return (
    <Shell
      image={DigestImage}
      isLoading={isLoading}
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {data &&
        Object.keys(data).map((key, index) => (
          <GrowAnimation key={key} index={index}>
            <Box>
              <Typography
                variant="h6"
                sx={{ pl: 1 }}
                color="white"
                gutterBottom
              >
                {key}
              </Typography>
              <Grid
                container
                direction="row"
                sx={{ justifyContent: 'start', mb: 2 }}
                spacing={2}
              >
                {data[key].map((digest) => (
                  <Grid key={digest.slug} item xs={12} sm={6} md={4} lg={3}>
                    <DigestCard digest={digest} sx={{ height: '100%' }} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </GrowAnimation>
        ))}
    </Shell>
  );
}
