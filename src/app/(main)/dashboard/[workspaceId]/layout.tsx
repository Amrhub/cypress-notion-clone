import Sidebar from '@/components/sidebar/sidebar';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  params: any;
}

const Layout: React.FC<IProps> = ({ children, params }) => {
  return (
    <main className='flex w-screen h-screen overflow-hidden'>
      <Sidebar params={params} />
      <div className='dark:border-Neutrals-12/70 border-l-[1px] w-full relative overflow-auto'>
        {children}
      </div>
    </main>
  );
};

export default Layout;
