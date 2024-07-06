import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import WeatherList from './page/WeatherList';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherList />
    </QueryClientProvider>
  );
};

export default App;
