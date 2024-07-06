import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaView} from 'react-native';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView></SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
