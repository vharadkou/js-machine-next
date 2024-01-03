import { headers } from 'next/headers';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import DotsImage from '../../../public/images/dots.jpg';
import { Shell } from '../../_components/Layout/Shell';
import { Markdown } from '../../_components/Markdown';
import { Title } from '../../_components/Title';

interface Props {
  params: {
    id: string;
  };
}

async function fetchMdFile(id: string) {
  const host = headers().get('host');
  const protocol = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
  const res = await fetch(`${protocol}://${host}/md/${id}.md`);

  return res.text();
}

export default async function DigestItem({ params }: Props) {
  const markdown = await fetchMdFile(params.id);

  return (
    <Shell
      hideOffset
      image={DotsImage}
      noBluredBackground
      maxWidth="md"
      sx={{
        pt: { xs: 0, sm: 4, md: 16 },
        pr: { xs: 0, sm: 4 },
        pb: { xs: 0, sm: 4, md: 16 },
        pl: { xs: 0, sm: 4 },
        mt: { xs: 0, sm: 2 },
        mb: { xs: 0, sm: 2 },
        viewTransitionName: 'jsm-content',
      }}
      hideLayout
    >
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
        <Box px={{ xs: 2, sm: 5 }}>
          <Title title={params.id} />
          <Markdown markdown={markdown} />
        </Box>
      </Grid>
    </Shell>
  );
}
