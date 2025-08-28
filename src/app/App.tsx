import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

import GlobalErrorBoundary from '@router/global-error-boundary';
import { router } from '@router/router';

import { rootStyle } from '@shared/styles/global.css';
import ThemeProvider from '@shared/styles/theme-provider';
import { queryClient } from '@shared/utils/query-client';

function App() {
  return (
    <GlobalErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider className={rootStyle}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </GlobalErrorBoundary>
  );
}

export default App;
