import { memo } from 'react';

import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export const HideOnScroll = memo(function HideOnScroll(props: {
  children: React.ReactElement;
}) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
});
