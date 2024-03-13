import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

type QueriesArgs = {
  children: React.ReactNode;
};

export const Queries = ({ children }: QueriesArgs) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
