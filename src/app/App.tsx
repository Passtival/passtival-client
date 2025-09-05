import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

import GlobalErrorBoundary from '@router/global-error-boundary';
import { router } from '@router/router';

import ThemeProvider from '@shared/styles/theme-provider';
import { queryClient } from '@shared/utils/query-client';

function App() {
  return (
    <ThemeProvider>
      <GlobalErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </GlobalErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
