import { Open_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import '@/app/_style/globals.css';
import Footer from '@/app/_components/layout/Footer';
import Header from '@/app/_components/layout/Header';

const openSans = Open_Sans({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `Let's Login`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} min-h-screen antialiased`}>
        <div className="grid min-h-screen w-full grid-rows-[5rem_1fr]">
          <Header />
          <main className="w-full">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
