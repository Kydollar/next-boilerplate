import DOMPurify from 'isomorphic-dompurify';
import { Home } from 'lucide-react';

import Link from 'next/link';

import ThemeToggle from '@/components/themes/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ErrorProps = {
  content: {
    title: string;
    description: string;
    body: string;
  };
  isGlobalError?: {
    button: React.ReactNode;
  };
};

export default function Error({ content, isGlobalError }: ErrorProps) {
  const sanitizedTitle = DOMPurify.sanitize(content.title);

  return (
    <section className="container mx-auto flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          {/* Theme Toggle Button */}
          <div className="mb-6">
            <ThemeToggle uniqueId="toggle-error" />
          </div>

          <Badge
            variant={isGlobalError ? 'destructive' : 'outline'}
            className="tracking-widest uppercase"
            dangerouslySetInnerHTML={{ __html: sanitizedTitle }}
          />

          <h1 className="mt-3 text-2xl font-semibold md:text-3xl">{content.description}</h1>
          <p className="mt-4">{content.body}</p>

          <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-3 sm:w-auto">
            {isGlobalError ? (
              <>
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'flex items-center justify-center gap-x-2 sm:w-auto',
                  )}
                >
                  <Home className="size-4" />
                  <span>Back to Home</span>
                </Link>
                {isGlobalError.button}
              </>
            ) : (
              <Link
                href="/"
                className={cn(
                  buttonVariants(),
                  'flex items-center justify-center gap-x-2 sm:w-auto',
                )}
              >
                <Home className="size-4" />
                <span>Back to Home</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
