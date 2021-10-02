import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Matches from './components/Matches';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Matches />
    </QueryClientProvider>
  );
}

export default App;
