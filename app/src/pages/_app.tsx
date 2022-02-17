import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import createRelayEnvironment from '../utils/create-relay-environment';

function MyApp({ Component, pageProps }: AppProps) {
  const environment = createRelayEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="Loading...">
        <Component {...pageProps} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
