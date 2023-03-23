import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      console.log('we are being triggered :D');
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('transitionend', handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
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
