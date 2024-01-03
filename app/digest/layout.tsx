import { PropsWithChildren } from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digest',
};

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
