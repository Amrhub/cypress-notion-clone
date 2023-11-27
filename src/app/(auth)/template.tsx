import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const Template: React.FC<IProps> = ({ children }) => {
  return <div className='h-screen p-6 flex justify-center'>{children}</div>;
};

export default Template;
