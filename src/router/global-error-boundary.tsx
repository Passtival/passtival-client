import { Suspense, type ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorPage from '@pages/error/error';
import LoadingPage from '@pages/loading/loading';

interface GlobalErrorBoundaryProps {
  children: ReactNode;
}

const GlobalErrorBoundary = ({ children }: GlobalErrorBoundaryProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Suspense fallback={<LoadingPage />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
