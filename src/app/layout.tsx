// app/layout.tsx
'use client';  // Ensure this layout is client-side

import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ApolloProvider>
  );
}
