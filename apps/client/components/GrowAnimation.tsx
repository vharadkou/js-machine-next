import Grow from '@mui/material/Grow';
import { memo, ReactElement } from 'react';

interface Props {
  index: number;
  children: ReactElement;
}

export const GrowAnimation = memo(function GrowAnimation({
  index,
  children,
}: Props) {
  return (
    <Grow
      in
      style={{ transformOrigin: '0 0 0' }}
      timeout={animationDelayByIndex(index)}
    >
      {children}
    </Grow>
  );
});

const BASE_ANIMATION_DELAY = 500;

function animationDelayByIndex(index: number) {
  return BASE_ANIMATION_DELAY * Math.log(index + 2);
}
