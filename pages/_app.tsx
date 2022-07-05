import type { AppProps } from 'next/app';
import { DiscoversProvider } from '../context/discovers';
import { MoviesProvider } from '../context/movies';
import useScrollRestoration from '../hooks/useScrollRestoration';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router);
  return (
    <MoviesProvider>
      <DiscoversProvider>
        <Component {...pageProps} />
      </DiscoversProvider>
    </MoviesProvider>
  );
}

export default MyApp;
