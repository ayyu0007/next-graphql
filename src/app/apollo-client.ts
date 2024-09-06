// app/apollo-client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API, // GraphQL API endpoint
  cache: new InMemoryCache,
});

// Expose client to the window for debugging
if (typeof window !== 'undefined') {
  (window as any).apolloClient = client;
}

export default client;
