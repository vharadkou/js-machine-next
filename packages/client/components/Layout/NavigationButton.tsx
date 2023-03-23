import { memo, useCallback } from 'react';
import { useRouter } from 'next/router';
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
      {label}
    </Button>
  );
});
