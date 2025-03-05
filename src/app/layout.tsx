'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apolloClient';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}