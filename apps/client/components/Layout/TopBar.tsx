import React, { memo } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { NavigationDesktop } from './NavigationDesktop';
import { NavigationMobile } from './NavigationMobile';
import { NavigationButton } from './NavigationButton';

export const TopBar = memo(function TopBar() {
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
        <NavigationButton href="/" label="JS MACHINE" fontSize={24} />
        <Box sx={{ flexGrow: 1 }} />
        <NavigationDesktop sx={{ display: { xs: 'none', sm: 'flex' } }} />
        <NavigationMobile sx={{ display: { xs: 'block', sm: 'none' } }} />
      </Toolbar>
    </AppBar>
  );
});
