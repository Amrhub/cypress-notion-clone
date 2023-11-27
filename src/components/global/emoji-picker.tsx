'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Theme } from 'emoji-picker-react';
import { useTheme } from 'next-themes';

interface IProps {
  children: React.ReactNode;
  getValue?: (emoji: string) => void;
}

const EmojiPicker: React.FC<IProps> = ({ getValue, children }) => {
  const { theme } = useTheme();

  const Picker = dynamic(() => import('emoji-picker-react'));
  const onClick = (selectedEmoji: any) => {
    if (getValue) getValue(selectedEmoji.emoji);
  };

  return (
    <div className='flex items-center'>
      <Popover>
        <PopoverTrigger className='cursor-pointer'>{children}</PopoverTrigger>
        <PopoverContent className='p-0 border-none'>
          <Picker onEmojiClick={onClick} theme={theme === 'dark' ? Theme.DARK : Theme.LIGHT} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default EmojiPicker;
