'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import React, { FC, MouseEvent } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { SwitchWithIcon } from '@/components/ui/switch';
import { useMounted } from '@/hooks/use-mounted';

interface ThemeToggleProps {
  uniqueId?: string;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ uniqueId }) => {
  const mounted = useMounted();
  const { setTheme, resolvedTheme } = useTheme();

  const switchId = `themeSwitch-${uniqueId}`;
  const iconId = (name: string) => `${name}Icon-${uniqueId}`;

  const handleThemeToggle = (e: MouseEvent<HTMLButtonElement>) => {
    const x = e.clientX ?? window.innerWidth / 2;
    const y = e.clientY ?? window.innerHeight / 2;

    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);

    const nextTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(nextTheme);
      });
    } else {
      setTheme(nextTheme);
    }
  };

  return mounted ? (
    <SwitchWithIcon id={switchId} checked={resolvedTheme === 'dark'} onClick={handleThemeToggle}>
      <Moon
        id={iconId('moon')}
        className="absolute scale-0 rotate-90 transition-all dark:scale-75 dark:rotate-0"
      />
      <Sun
        id={iconId('sun')}
        className="scale-75 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      />
      <span className="sr-only">Toggle theme</span>
    </SwitchWithIcon>
  ) : (
    <Skeleton className="h-5 w-11 rounded-full" />
  );
};

export default ThemeToggle;
