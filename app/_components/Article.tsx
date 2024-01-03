import { memo } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

const splitText = (text: string) => {
  return text.split('\\n');
};

export const Article = memo(function Article({
  title,
  content,
  Icon,
}: {
  title: string;
  content: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
}) {
  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        boxShadow: 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'left', sm: 'center' },
          mb: 1,
        }}
      >
        <Icon sx={{ mr: 1 }} fontSize="large" />
        <Typography sx={{ fontSize: 24, fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Box>
      {splitText(content).map((text) => (
        <Typography
          key={text}
          sx={{ fontSize: 14, textAlign: { xs: 'left', sm: 'center' } }}
          component="div"
        >
          {text}
        </Typography>
      ))}
    </Card>
  );
});
