import Grid from '@mui/material/Grid';
import { Shell } from '../components/Layout/Shell';
import { useGetDigestsQuery } from '../redux/service';
import { DigestCard } from '../components/DigestCard';
import DigestJpg from '../public/images/digest.jpg';

function Digest() {
  const { data, isLoading } = useGetDigestsQuery('');

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
      <Grid
        container
        direction="row"
        sx={{ justifyContent: { sx: 'start', md: 'center' }, mb: 2 }}
        spacing={2}
      >
        {data?.map((digest) => (
          <Grid key={digest.id} item xs={12} sm={6} md={4} lg={3}>
            <DigestCard digest={digest} sx={{ height: '100%' }} />
          </Grid>
        ))}
      </Grid>
    </Shell>
  );
}

export default Digest;
