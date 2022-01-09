import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export function Layout() {
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
        <Typography variant="h6" noWrap component="div">
          JS MACHINE
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            p: 1,
            borderRadius: 1,
          }}
        >
          <NavBarText text="О НАС" />
          <NavBarText text="НОВОСТИ" />
          <NavBarText text="СОБЫТИЯ" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function NavBarText({ text }: { text: string }) {
  return (
    <Typography
      sx={{ ml: 1, mr: 1, fontWeight: 'bold' }}
      variant="subtitle1"
      noWrap
      component="div"
    >
      {text}
    </Typography>
  );
}
