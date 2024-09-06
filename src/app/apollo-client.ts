// app/apollo-client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API, // GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default client;
