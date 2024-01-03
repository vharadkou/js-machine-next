import { memo } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Button from '@mui/material/Button';

interface Props {
  href: string;
  label: string;
  fontSize?: number;
}

export const NavigationButton = memo(function NavigationButton({
  href,
  label,
  fontSize,
}: Props) {
  const pathname = usePathname();

  return (
    <Button
      size="large"
      sx={{ fontSize, color: pathname === href ? '#f2e14c' : 'white' }}
      component={Link}
      href={href}
    >
      {label}
    </Button>
  );
});
