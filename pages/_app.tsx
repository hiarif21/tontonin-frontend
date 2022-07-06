import type { AppProps } from 'next/app';
import MovieDetails from '../components/molecules/commons/MovieDetails';
import { DiscoversProvider } from '../context/discovers';
import { MoviesProvider } from '../context/movies';
import useScrollRestoration from '../hooks/useScrollRestoration';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  try {
    document.body.style.overflow = 'visible';
  } catch (error) {}
  useScrollRestoration(router);
  return (
    <MoviesProvider>
      <DiscoversProvider>
        <Component {...pageProps} />
        <MovieDetails />
      </DiscoversProvider>
    </MoviesProvider>
  );
}

export default MyApp;
