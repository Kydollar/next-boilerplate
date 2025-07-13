import type { Metadata } from 'next';

import '@/styles/globals.css';

import ThemeProvider from '@/components/themes/theme-provider';
import { site } from '@/constants/site';
import { geistMono, geistSans } from '@/lib/fonts';
import getBaseUrl from '@/lib/get-base-url';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = new URL(getBaseUrl());

  return {
    metadataBase: baseUrl,
    title: {
      default: site.name,
      template: `%s - ${site.name}`,
    },
    description: 'A modern, professional, and super chill Next.js Starter.',
    creator: site.creator,
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    verification: {
      google: 'lE3xaWJT7w0sxTJTQcMvb71-bzbwZbGeeFniK5vqR18',
    },
    alternates: {
      canonical: '/',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
