import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DiscoversProvider } from '../context/discovers';
import { MoviesProvider } from '../context/movies';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoviesProvider>
      <DiscoversProvider>
        <Component {...pageProps} />
      </DiscoversProvider>
    </MoviesProvider>
  );
}

export default MyApp;
