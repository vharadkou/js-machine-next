import { memo } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { SxProps, Theme } from '@mui/material/styles';

interface Props {
  sx: SxProps<Theme>;
}

export const NavigationMobile = memo(function NavigationMobile({ sx }: Props) {
  const pathname = usePathname();

  return (
    <Paper
      sx={{
        backgroundColor: 'transparent',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        ...sx,
      }}
      style={{ bottom: 'env(safe-area-inset-bottom)' }}
      elevation={3}
    >
      <BottomNavigation
        sx={(theme) => theme.mixins.bluredBackground}
        showLabels
        value={pathname}
      >
        <BottomNavigationAction
          value="/about"
          label="О НАС"
          component={Link}
          href="/about"
        />
        <BottomNavigationAction
          value="/digest"
          label="ДАЙДЖЕСТ"
          component={Link}
          href="/digest"
        />
        <BottomNavigationAction
          value="/events"
          label="СОБЫТИЯ"
          component={Link}
          href="/events"
        />
      </BottomNavigation>
    </Paper>
  );
});
