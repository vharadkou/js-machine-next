import { memo, useMemo } from 'react';
import Typography from '@mui/material/Typography';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';
import { Event } from '../redux/models';

interface Props {
  event: Event;
  sx?: SxProps<Theme>;
}

export const EventCard = memo(function EventCard({ event, sx }: Props) {
  const theme = useTheme();

  const { day, year, month } = useMemo(
    () => ({
      day: new Date(event.date).getDate(),
      year: new Date(event.date).getFullYear(),
      month: new Date(event.date)
        .toLocaleString('ru', { month: 'short' })
        .toUpperCase(),
    }),
    [event.date]
  );

  return (
    <CardActionArea href={event.link} target="_blank" sx={{ ...sx }}>
      <Card
        sx={{
          ...theme.mixins.bluredBackground,
          ...theme.mixins.responsiveBlur,
          ...sx,
        }}
      >
        <CardContent sx={{ display: 'flex' }}>
          <Box sx={{ mr: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {day}
            </Typography>
            <Typography variant="body2">{month}</Typography>
            <Typography variant="body2">{year}</Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {event.title}
            </Typography>
            <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
              {event.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </CardActionArea>
  );
});
