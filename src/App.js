import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AppRoutes from "./routes/AppRoutes";

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
    </QueryClientProvider>
  );
};

export default App;
