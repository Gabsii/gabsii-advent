// import { AnimatePresence } from 'framer-motion';

import '@/styles/dist.css';
import Header from '@/ui/components/Header';
import { mountainsOfChristmas } from 'utils/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Gabsi's Advent Calendar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gabsi's Advent Calendar" />
        <meta name="author" content="Lukas Gabsi" />
        <meta name="keywords" content="advent, calendar, gabsi" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
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
