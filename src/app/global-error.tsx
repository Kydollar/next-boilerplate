'use client';

import { RefreshCcw } from 'lucide-react';

import { useEffect } from 'react';
import { Metadata } from 'next';

import Error from '@/components/error';
import ThemeProvider from '@/components/themes/theme-provider';
import { Button } from '@/components/ui/button';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Something Went Wrong',
    description: "An unexpected error occurred. Don't worry, we'll help you get back on track.",
  };
}

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log({ error });
  }, [error]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Error
            content={{
              title: 'Something went wrong!',
              description: 'Error Message',
              body: '"' + error.message + '"',
            }}
            isGlobalError={{
              button: (
                <Button
                  size="icon"
                  onClick={() => {
                    reset();
                    window.location.reload();
                  }}
                >
                  <RefreshCcw className="size-4" />
                </Button>
              ),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
