import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/lib/providers/next-theme-provider';
import { DM_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
const fontFamily = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cypress | Notion Clone',
  description: 'This is a notion clone built with nextjs and supabase',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={twMerge('bg-background', fontFamily.className)}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
