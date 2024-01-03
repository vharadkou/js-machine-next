'use client';

import { memo } from 'react';

import Box from '@mui/material/Box';
import { marked } from 'marked';

interface Props {
  markdown?: string;
}

export const Markdown = memo(function Markdown({ markdown }: Props) {
  const formatedMarkdown = markdown
    ? (marked(markdown.split('\\n').join('\u000A')) as string)
    : '';

  return (
    <Box sx={(theme) => ({ ...theme.mixins.markdown })}>
      <article
        dangerouslySetInnerHTML={{
          // https://stackoverflow.com/questions/48692039/how-to-use-n-in-a-javascript-string
          __html: formatedMarkdown,
        }}
      />
    </Box>
  );
});
