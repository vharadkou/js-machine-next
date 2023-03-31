import { memo } from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { SxProps, Theme } from '@mui/material/styles';

interface Props {
  title: string;
  onClose: () => void;
  sx?: SxProps<Theme>;
}

const SECOND = 1000;

export const Title = memo(function Title({ title, onClose, sx }: Props) {
  return (
    <Box
      sx={{
        top: 0,
        position: 'sticky',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        pt: 2,
        pb: 4,
        backdropFilter: 'saturate(180%) blur(5px)',
        backgroundColor: 'rgba(255,255,255,0.72)',
        ...sx,
      }}
    >
      <Fade in timeout={SECOND}>
        <Typography fontFamily="Russo One" variant="h4">
          {title}
        </Typography>
      </Fade>
      <CloseIcon
        sx={{ cursor: 'pointer' }}
        fontSize="large"
        onClick={onClose}
      />
    </Box>
  );
});
