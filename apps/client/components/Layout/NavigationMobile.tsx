import { memo, useCallback, useEffect, useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import { SxProps, Theme, useTheme } from '@mui/material/styles';

interface Props {
  sx: SxProps<Theme>;
}

export const NavigationMobile = memo(function NavigationMobile({ sx }: Props) {
  const theme = useTheme();
  const router = useRouter();
  const [value, setValue] = useState(router.pathname);

  useEffect(() => {
    setValue(router.pathname);
  }, [router.pathname]);

  const navigate = useCallback(
    (href: string) => () => {
      router.push(href);
    },
    [router]
  );

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
      elevation={3}
    >
      <BottomNavigation
        sx={theme.mixins.bluredBackground}
        showLabels
        value={value}
      >
        <BottomNavigationAction
          value="/about"
          onClick={navigate('/about')}
          label="О НАС"
        />
        <BottomNavigationAction
          value="/digest"
          onClick={navigate('/digest')}
          label="ДАЙДЖЕСТ"
        />
        <BottomNavigationAction
          value="/events"
          onClick={navigate('/events')}
          label="СОБЫТИЯ"
        />
      </BottomNavigation>
    </Paper>
  );
});
