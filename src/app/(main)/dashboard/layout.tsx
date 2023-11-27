import React from 'react';

interface IProps {
  children: React.ReactNode;
  params: any;
}

const Layout: React.FC<IProps> = ({ children, params }) => {
  return <main className='flex h-screen overflow-hidden'>{children}</main>;
};

export default Layout;
