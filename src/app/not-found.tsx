import React, { FC } from 'react';
import type { Metadata } from 'next';

import Error from '@/components/error';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `404`,
    description: "Well, this page took a day off. We couldn't find what you were looking for.",
  };
}

const NotFound: FC = () => {
  return (
    <Error
      content={{
        title: '<strong>404</strong>Not Found!',
        description: 'Oops! This page decided to ghost us.',
        body: "We've looked everywhere but couldn't find what you were searching for. Maybe try heading back home and starting fresh?",
      }}
    />
  );
};

export default NotFound;
