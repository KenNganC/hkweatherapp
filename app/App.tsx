import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import WeatherList from './page/WeatherList';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <WeatherList />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
