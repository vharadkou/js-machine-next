import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      console.log('we are being triggered :D');
      setSupportsPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener('beforeinstallprompt', handler as never);

    return () => window.removeEventListener('transitionend', handler as never);
  }, []);

  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (!promptInstall) return;

    promptInstall.prompt();
  };

  if (!supportsPWA) {
    return null;
  }

  return (
    <Button
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
      size="small"
    >
      Install as PWA
    </Button>
  );
};

export default InstallPWA;
