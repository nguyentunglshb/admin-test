import "./App.css";
import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { router } from "./routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
