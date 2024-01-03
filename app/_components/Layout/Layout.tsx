import { memo } from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Toolbar from '@mui/material/Toolbar';

import { HideOnScroll } from './HideOnScroll';
import { NavigationButton } from './NavigationButton';
import { NavigationDesktop } from './NavigationDesktop';
import { NavigationMobile } from './NavigationMobile';
import { ScrollTop } from './ScrollTop';

export const Layout = memo(function Layout() {
  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            backgroundImage: 'none',
          }}
        >
          <Toolbar>
            <NavigationButton href="/" label="JS MACHINE" fontSize={24} />
            <Box sx={{ flexGrow: 1 }} />
            <NavigationDesktop sx={{ display: { xs: 'none', sm: 'flex' } }} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <NavigationMobile sx={{ display: { xs: 'block', sm: 'none' } }} />
      <ScrollTop>
        <Fab
          sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
          color="secondary"
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
});
