import { FC, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = async ({ children }) => {
  return (
    <main className="relative">
      {children}
      <div
        className="pointer-events-none absolute inset-0 -z-10 size-full bg-background opacity-5
        bg-[linear-gradient(to_right,theme(colors.primary.DEFAULT)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.primary.DEFAULT)_1px,transparent_1px)] 
        bg-[size:6rem_4rem] 
        dark:bg-[linear-gradient(to_right,theme(colors.primary.900)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.primary.900)_1px,transparent_1px)]"
      ></div>
    </main>
  );
};

export default MainLayout;
