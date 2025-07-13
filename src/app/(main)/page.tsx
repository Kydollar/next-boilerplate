import { Code2, Github, Sparkles } from 'lucide-react';

import Link from 'next/link';

import ThemeToggle from '@/components/themes/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      {/* Theme Toggle Button */}
      <div className="mb-6">
        <ThemeToggle uniqueId="toggle-main" />
      </div>

      {/* Hero Section */}
      <section className="space-y-4 text-center">
        <Badge variant="outline" className="tracking-widest uppercase">
          Next Boilerplate 🚀
        </Badge>

        <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-6xl">
          A modern, professional, <br className="hidden md:inline" /> and super chill
          <span className="text-primary"> Next.js Starter</span>.
        </h1>

        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
          Built with React 19, TypeScript, TailwindCSS, Playwright, and all the cool dev tools you
          need for serious projects or just having fun.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row">
          <Link href="/docs">
            <Button size="lg">
              <Sparkles className="mr-2 h-4 w-4" />
              Get Started
            </Button>
          </Link>

          <Link href="https://github.com/Kydollar/next-boilerplate" target="_blank">
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <feature.icon className="text-primary h-5 w-5" />
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}

const features = [
  {
    title: 'React 19 + Next.js 15',
    description: 'Leverage the latest React features with Next.js App Router for ultra-fast apps.',
    icon: Sparkles,
  },
  {
    title: 'TypeScript & Tailwind',
    description: 'Strict TypeScript and beautifully organized Tailwind CSS for scalable apps.',
    icon: Code2,
  },
  {
    title: 'Testing & CI',
    description:
      'Jest, Playwright, Husky, and GitHub Actions for rock-solid quality and deployment.',
    icon: Github,
  },
];
