import { memo, useMemo } from 'react';
import { marked } from 'marked';
import Fade from '@mui/material/Fade';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

interface Props {
  markdown?: string;
  sx?: SxProps<Theme>;
}

const SECOND = 1000;

export const Markdown = memo(function Markdown({ markdown, sx }: Props) {
  const theme = useTheme();

  const formatedMarkdown = useMemo(
    () => (markdown ? marked(markdown.split('\\n').join('\u000A')) : ''),
    [markdown]
  );

  return (
    <Fade in timeout={SECOND}>
      <Box sx={{ ...theme.mixins.markdown, ...sx }}>
        <article
          dangerouslySetInnerHTML={{
            // https://stackoverflow.com/questions/48692039/how-to-use-n-in-a-javascript-string
            __html: formatedMarkdown,
          }}
        />
      </Box>
    </Fade>
  );
});
