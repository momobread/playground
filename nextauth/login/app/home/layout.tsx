import { Open_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import '@/app/_style/globals.css';
import Footer from '@/app/_components/layout/Footer';
import Header from '@/app/_components/layout/Header';
import UserNav from '@/app/_components/layout/UserNav';
import SessionWrapper from '../_components/session/SessionWrapper';
import UserMiddle from '../_components/layout/UserMiddlet';

const openSans = Open_Sans({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `Welcome`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} min-h-screen antialiased`}>
        <div className="grid min-h-screen w-full grid-rows-[1fr_5rem]">
          <UserMiddle />
          <main className="w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
