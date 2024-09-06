// Example: app/components/LogCache.tsx
'use client'; // Ensure this runs on the client-side

import { useEffect } from 'react';
import client from '../apollo-client'; // Adjust the path as necessary

const LogCache = () => {
  useEffect(() => {
    const cacheData = client.cache.extract();
    console.log('Apollo InMemoryCache:', cacheData);
  }, []);

  return null; // This component doesn't render anything
};

export default LogCache;
