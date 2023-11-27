import Header from '@/components/landing-page/header';
import React from 'react';
interface IProps {
  children: React.ReactNode;
}
const HomePageLayout: React.FC<IProps> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default HomePageLayout;
