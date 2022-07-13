import { useDiscovers } from '../../../context/discovers';
import { useMovies } from '../../../context/movies';
import Loading from '../../atoms/Loading';
import Layout from '../../Layout';
import MovieDetails from '../../molecules/commons/MovieDetails';
import Notice from '../../molecules/commons/notice';
import DiscoverList from '../../organisms/commons/DiscoverList';
import MovieList from '../../organisms/commons/MovieList';

const HomeTemplate = () => {
  const Discovers = useDiscovers();
  const Movies = useMovies();

  return (
    <Layout title="Home">
      <Notice />
      <div className="p-5">
        {Discovers.data.length === 0 && Movies.data.length === 0 ? (
          <div className="flex w-full justify-center">
            <Loading />
          </div>
        ) : (
          <>
            <DiscoverList
              data={Discovers.data}
              totalData={Discovers.totalData}
              loadMore={Discovers.loadMore}
            />
            {Discovers.data.length === Discovers.totalData && (
              <MovieList
                data={Movies.data}
                totalData={Movies.totalData}
                loadMore={Movies.loadMore}
                title={'More For You'}
              />
            )}
            <MovieDetails />
          </>
        )}
      </div>
    </Layout>
  );
};

export default HomeTemplate;
