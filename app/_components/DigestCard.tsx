import { memo, useCallback, useMemo } from 'react';

import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Digest } from '../_redux/models';

interface Props {
  digest: Digest;
  sx?: SxProps<Theme>;
}

export const DigestCard = memo(function DigestCard({ digest, sx }: Props) {
  const theme = useTheme();
  const router = useRouter();

  const navigate = useCallback(
    (href: string) => () => {
      router.push(href);
    },
    [router],
  );

  const { day, month } = useMemo(
    () => ({
      day: new Date(digest.date).getDate(),
      month: new Date(digest.date)
        .toLocaleString('ru', { month: 'short' })
        .toUpperCase(),
    }),
    [digest.date],
  );

  return (
    <CardActionArea onClick={navigate(`digest/${digest.slug}`)} sx={{ ...sx }}>
      <Card
        sx={{
          ...theme.mixins.bluredBackground,
          ...theme.mixins.responsiveBlur,
          ...sx,
        }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="body2">
            {day} {month}
          </Typography>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {digest.title}
            </Typography>
            <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
              {digest.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </CardActionArea>
  );
});
