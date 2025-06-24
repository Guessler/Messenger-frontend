import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { env } from "@utils";
import type { ReactNode } from 'react';
import DefaultLayout from '@/components/DefaultLayout';
import "../styles/globals.css"
import { ThemeProvider } from '@mui/material/styles';

export async function generateMetadata(): Promise<Metadata> {
  const MINIO_BUCKET_URL = env.MINIO_BUCKET_URL;

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
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <DefaultLayout>
              {children}
            </DefaultLayout>
      </body>
    </html>
  );
}