import { Suspense, type ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorPage from '@pages/error/error';

interface GlobalErrorBoundaryProps {
  children: ReactNode;
}

const GlobalErrorBoundary = ({ children }: GlobalErrorBoundaryProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Suspense fallback={'로딩 페이지 넣을곳...'}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
