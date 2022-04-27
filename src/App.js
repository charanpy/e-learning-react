import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./layout";
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
      {/* <Layout> */}
      <AppRoutes />
      {/* </Layout> */}
    </QueryClientProvider>
  );
};

export default App;
