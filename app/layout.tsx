import '@/styles/dist.css';
import Header from '@/ui/components/Header';
import React from 'react';
import { mountainsOfChristmas } from 'utils/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Gabsi's Advent Calendar</title>
      </head>
      <body className={`bg-black w-full ${mountainsOfChristmas.variable}`}>
        <div className="container mx-auto px-4">
          <Header />
        </div>
        <div className="h-full w-full absolute top-0 left-0">
          {children}
        </div>
      </body>
    </html>
  );
}
