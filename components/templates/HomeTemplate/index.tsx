import { useDiscovers } from '../../../context/discovers';
import { useMovies } from '../../../context/movies';
import Layout from '../../Layout';
import DiscoverList from '../../organisms/commons/DiscoverList';
import MovieList from '../../organisms/commons/MovieList';

const HomeTemplate = () => {
  const Discovers = useDiscovers();
  const Movies = useMovies();

  return (
    <Layout title="Home">
      <div className="p-5 pt-0">
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
      </div>
    </Layout>
  );
};

export default HomeTemplate;
