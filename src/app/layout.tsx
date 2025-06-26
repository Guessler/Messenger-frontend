// app/layout.tsx

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import DefaultLayout from '@/components/DefaultLayout';
import "../styles/globals.css";
import { Providers } from './Providers';

export async function generateMetadata(): Promise<Metadata> {
  const MINIO_BUCKET_URL = process.env.MINIO_BUCKET_URL || '';
  return {
    title: 'TinyLine',
    description: 'TinyLine — private messaging made simple...',
    icons: {
      icon: `${MINIO_BUCKET_URL}/tinyline.svg`,
    },
  };
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <DefaultLayout>{children}</DefaultLayout>
        </Providers>
      </body>
    </html>
  );
}