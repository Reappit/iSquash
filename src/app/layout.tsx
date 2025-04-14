import { type Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import PlausibleProvider from 'next-plausible';
import { type ReactNode, type ScriptHTMLAttributes, Suspense } from 'react';

import PostHogPageView from '@/components/custom/post-hog-page-view';
import { env } from '@/env';
import Providers from '@/providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider
          domain={env.APP_URL.replace('https://', '')}
          enabled={true}
          selfHosted={true}
          scriptProps={
            {
              'data-api': env.PLAUSIBLE_URL,
            } as ScriptHTMLAttributes<HTMLScriptElement>
          }
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          {children}
        </Providers>
      </body>
    </html>
  );
}
