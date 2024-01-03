import { memo } from 'react';

import Link from 'next/link';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

interface Props {
  title: string;
}

export const Title = memo(function Title({ title }: Props) {
  return (
    <Box
      sx={{
        top: 0,
        position: 'sticky',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        pt: 2,
        pb: 4,
        backdropFilter: 'saturate(180%) blur(5px)',
        backgroundColor: 'rgba(255,255,255,0.72)',
      }}
    >
      <Typography fontFamily="Russo One" variant="h4">
        {title}
      </Typography>
      <IconButton component={Link} href="/digest" color="inherit">
        <CloseIcon sx={{ cursor: 'pointer' }} fontSize="large" />
      </IconButton>
    </Box>
  );
});
