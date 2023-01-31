import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import CajaScreen from './src/navigation/CajaScreens';

const queryClient = new QueryClient();


export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <CajaScreen />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
