'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apolloClient';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { useState } from 'react';
import Topbar from '@/components/Topbar';
import { Provider } from 'react-redux';
import store from '@/redux/store';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
    console.log(`Tab activo: ${tabId}`);
  };

  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Topbar
              tabs={[
                { id: 1, label: 'Home' },
                { id: 2, label: 'Favorites' },
              ]}
              onTabChange={handleTabChange}
            />
            <main className="h-lvh">{children}</main>
          </Provider>
        </ApolloProvider>
      </body>
    </html>
  );
}