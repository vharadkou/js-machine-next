import Box from '@mui/material/Box';
import { ImageBackground } from '../components/Layout/ImageBackground';
import NewsJpg from '../public/images/news.jpg';

function News() {
  return (
    <>
      <ImageBackground image={NewsJpg} />
      <Box>News</Box>
    </>
  );
}

export default News;
