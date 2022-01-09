import React, { MouseEventHandler, useCallback } from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export function Layout() {
  const router = useRouter();

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

  return (
    <Button
      onClick={() => router.push(href)}
      size="large"
      sx={{ color: router.asPath === href ? '#f2e14c' : 'white', fontSize }}
    >
      {text}
    </Button>
  );
}
