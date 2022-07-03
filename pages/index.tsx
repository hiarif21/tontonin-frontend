import { useEffect } from 'react';
import HomeTemplate from '../components/templates/HomeTemplate';
import { useDiscovers } from '../context/discovers';
import { useMovies } from '../context/movies';
import { getDiscovers } from '../services/api/discovers.service';
import { getMovies } from '../services/api/movies.service';

const Home = ({
  dataDiscovers,
  totalDataDiscovers,
  dataMovies,
  totalDataMovies,
}: HomeProps) => {
  const UseDiscovers = useDiscovers();
  const UseMovies = useMovies();

  useEffect(() => {
    UseDiscovers.setData(dataDiscovers);
    UseDiscovers.setTotalData(totalDataDiscovers);

    UseMovies.setData(dataMovies);
    UseMovies.setTotalData(totalDataMovies);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <HomeTemplate />;
};

export async function getServerSideProps() {
  const discovers = await getDiscovers();
  const movies = await getMovies();
  return {
    props: {
      dataDiscovers: discovers.data,
      totalDataDiscovers: discovers.total_data,
      dataMovies: movies.data,
      totalDataMovies: movies.total_data,
    },
  };
}

export default Home;
