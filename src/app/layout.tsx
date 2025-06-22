import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import {env} from "@utils"

const MINIO_BUCKET_URL = env.MINIO_BUCKET_URL;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TinyLine',
  description: 'TinyLine — private messaging made simple. Built with security in mind and designed for real conversations. Small by size. Big on privacy.',
  icons: {
    icon: `${MINIO_BUCKET_URL}/tinyline.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}