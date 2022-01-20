import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useGetDigestQuery } from '../../redux/service';
import { Shell } from '../../components/Layout/Shell';

function DigestItem() {
  const router = useRouter();
  const { data, isLoading } = useGetDigestQuery(router.query.id as string);

  return (
    <Shell
      isLoading={isLoading}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      maxWidth={false}
    >
      <Grid container>
        {!isLoading && (
          <Container>
            <Box>{data.title}</Box>
            <Box>{data.content}</Box>
          </Container>
        )}
      </Grid>
    </Shell>
  );
}

export default DigestItem;
