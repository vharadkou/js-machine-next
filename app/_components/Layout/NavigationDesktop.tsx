import { memo } from 'react';

import Box from '@mui/material/Box';
import { SxProps, Theme, useTheme } from '@mui/material/styles';

import { NavigationButton } from './NavigationButton';

interface Props {
  sx: SxProps<Theme>;
}

export const NavigationDesktop = memo(function NavigationDesktop({
  sx,
}: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 0.5,
        borderRadius: 1,
        ...theme.mixins.bluredBackground,
        ...sx,
      }}
    >
      <NavigationButton href="/about" label="О НАС" />
      <NavigationButton href="/digest" label="ДАЙДЖЕСТ" />
      <NavigationButton href="/events" label="СОБЫТИЯ" />
    </Box>
  );
});
