import { PropsWithChildren } from 'react';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  return { title: params.id };
}

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
