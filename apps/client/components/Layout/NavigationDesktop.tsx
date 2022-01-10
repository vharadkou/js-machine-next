import { memo } from 'react';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import { NavigationButton } from './NavigationButton';

interface Props {
  sx: SxProps<Theme>;
}

export const NavigationDesktop = memo(function NavigationDesktop({
  sx,
}: Props) {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
        p: 0.5,
        borderRadius: 1,
        ...sx,
      }}
    >
      <NavigationButton href="/about" label="О НАС" />
      <NavigationButton href="/news" label="НОВОСТИ" />
      <NavigationButton href="/events" label="СОБЫТИЯ" />
    </Box>
  );
});
