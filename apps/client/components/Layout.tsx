import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button';

export const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export function Layout() {
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname);

  const navigate = useCallback(
    (href: string) => () => {
      router.push(href);
    },
    [router]
  );

  useEffect(() => {
    setValue(router.pathname);
  }, [router.pathname]);

  return (
    <AppBar
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        backgroundImage: 'none',
      }}
      position="fixed"
    >
      <Toolbar>
        <AppBarButton fontSize={24} href="/" text="JS MACHINE" />
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            p: 0.5,
            borderRadius: 1,
          }}
        >
          <AppBarButton href="/about" text="О НАС" />
          <AppBarButton href="/news" text="НОВОСТИ" />
          <AppBarButton href="/events" text="СОБЫТИЯ" />
        </Box>
        <Paper
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
              backgroundColor: 'transparent',
            },
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          elevation={3}
        >
          <BottomNavigation
            sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            showLabels
            value={value}
          >
            <BottomNavigationAction
              value="/about"
              onClick={navigate('/about')}
              label="О НАС"
            />
            <BottomNavigationAction
              value="/news"
              onClick={navigate('/news')}
              label="НОВОСТИ"
            />
            <BottomNavigationAction
              value="/events"
              onClick={navigate('/events')}
              label="СОБЫТИЯ"
            />
          </BottomNavigation>
        </Paper>
      </Toolbar>
    </AppBar>
  );
}

function AppBarButton({
  href,
  text,
  fontSize,
}: {
  href: string;
  text: string;
  fontSize?: number;
}) {
  const router = useRouter();

  const navigate = useCallback(() => {
    router.push(href);
  }, [href, router]);

  return (
    <Button
      onClick={navigate}
      size="large"
      sx={{ color: router.asPath === href ? '#f2e14c' : 'white', fontSize }}
    >
      {text}
    </Button>
  );
}
