import { useEffect } from 'react';
import HomeTemplate from '../components/templates/HomeTemplate';
import { useDiscovers } from '../context/discovers';
import { useMovies } from '../context/movies';
import { getDiscovers } from '../services/api/discovers.service';
import { getMovies } from '../services/api/movies.service';

const Home = () => {
  const Discovers = useDiscovers();
  const Movies = useMovies();

  useEffect(() => {
    if (Discovers.data.length === 0 && Movies.data.length === 0) {
      (async () => {
        const discovers = await getDiscovers();
        const movies = await getMovies();

        Discovers.setData(discovers.data);
        Discovers.setTotalData(discovers.total_data);

        Movies.setData(movies.data);
        Movies.setTotalData(movies.total_data);
      })();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <HomeTemplate />;
};

export default Home;
