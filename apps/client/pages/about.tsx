import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Offset } from '../components/Layout/Offset';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

export function About() {
  return (
    <>
      <Background />
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Offset />
        <Container
          sx={{
            flex: 1,
            position: 'relative',
            display: { sm: 'flex', sx: 'block' },
            alignItems: { sm: 'center' },
          }}
          maxWidth={'sm'}
        >
          <Grid
            container
            direction="row"
            sx={{ justifyContent: { sx: 'start', md: 'center' } }}
            spacing={2}
          >
            <Grid item sm={12} sx={{ p: 2 }}>
              <Article
                Icon={HistoryEduIcon}
                title="История"
                content="Комьюнити зародилось в конце 2017 года с целью обмена знаниями и общения
                на техтоках. В дальнейшем начали проводить митапы вместе с сообществом
                Rolling Scopes, JSDevDay и другие ивенты. На данный момент комьюнити
                активно ведёт ивентную деятельность, есть каналы связи в телеграме, вк,
                инстаграмм и гитхаб."
              />
            </Grid>
            <Grid item sm={12} sx={{ p: 2 }}>
              <Article
                Icon={EmojiEventsIcon}
                title="Достижения"
                content="Проведено  4 митапа \n
                Рассказано более 30 техтоков \n
                Выиграно 1 хакатон \n
                Создано 1 ифопанель \n
                Посещено 5 конференций \n
                Разыграно более 5 маек \n
                Наклеено более 100 стикеров"
              />
            </Grid>
            <Grid item sm={12} sx={{ p: 2 }}>
              <Article
                Icon={GroupsIcon}
                title="Команда"
                content='Разумеется, каждый из нас разработчик, каждый из нас эксперт и будущий номинант на
                премию Тьюринга, но в тоже время мы такие же люди как, и вы! Мы любим видеоигры, пиццы,
                общение, холивары и фан, поэтому даже если ты не знаешь, как фильтровать массивы
                и чем отчличается "null" от "undefined" - это не значит что нам не по пути.'
              />
            </Grid>
          </Grid>
        </Container>
        <Offset />
      </Box>
    </>
  );
}

function Background() {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: '0 0 0 0',
        backgroundImage: 'url(images/about.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <Box
        sx={{
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />
    </Box>
  );
}

function Article({
  title,
  content,
  Icon,
}: {
  title: string;
  content: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
}) {
  const splitText = (text: string) => {
    return text.split('\\n');
  };

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
}

export default About;
