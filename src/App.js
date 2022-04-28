import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes/AppRoutes';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={true} />
      <AppRoutes />
      <ToastContainer theme='colored' />
    </QueryClientProvider>
  );
};

export default App;
