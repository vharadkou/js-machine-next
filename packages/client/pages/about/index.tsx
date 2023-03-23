import Grid from '@mui/material/Grid';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import AboutJpg from '../../public/images/about.jpg';
import { Shell } from '../../components/Layout/Shell';
import { Article } from '../../components/Article';

function About() {
  return (
    <Shell
      image={AboutJpg}
      sx={{
        display: { sm: 'flex', sx: 'block' },
        alignItems: { sm: 'center' },
      }}
      maxWidth="sm"
      title="About"
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
    </Shell>
  );
}

export default About;
