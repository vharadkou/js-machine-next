import { useCallback } from 'react';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import { useGetDigestQuery } from '../../redux/service';
import { Shell } from '../../components/Layout/Shell';
import { Markdown } from '../../components/Markdown';
import DotsJpg from '../../public/images/dots.jpg';
import { Title } from '../../components/Title';

function DigestItem() {
  const router = useRouter();
  const { data, isLoading } = useGetDigestQuery(
    (router.query.id as string) || ''
  );

  const navigate = useCallback(() => {
    router.push('/digest');
  }, [router]);

  return (
    <Shell
      isLoading={isLoading}
      hideOffset
      image={DotsJpg}
      noBluredBackground
      maxWidth="md"
      sx={{
        pt: { xs: 0, sm: 4, md: 16 },
        pr: { xs: 0, sm: 4 },
        pb: { xs: 0, sm: 4, md: 16 },
        pl: { xs: 0, sm: 4 },
        mt: { xs: 0, sm: 2 },
        mb: { xs: 0, sm: 2 },
      }}
    >
      {!isLoading && (
        <Grid
          container
          sx={{
            height: '100%',
            boxShadow: '0px 0px 2px 0px rgb(159 159 159 / 46%)',
            borderRadius: 2,
            backgroundColor: 'white',
            pt: { xs: 4, sm: 6 },
            pb: { xs: 0, sm: 4 },
          }}
        >
          <Title
            title={data.title}
            onClose={navigate}
            sx={{ pr: { xs: 2, sm: 5 }, pl: { xs: 2, sm: 5 } }}
          />
          <Markdown
            markdown={data.content}
            sx={{ pr: { xs: 2, sm: 5 }, pl: { xs: 2, sm: 5 } }}
          />
        </Grid>
      )}
    </Shell>
  );
}

export default DigestItem;
