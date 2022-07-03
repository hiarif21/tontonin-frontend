import Layout from '../../Layout';
import DiscoverList from '../../organisms/commons/DiscoverList';
import MovieList from '../../organisms/commons/MovieList';

const HomeTemplate = () => {
  return (
    <Layout title="Home">
      <div className="p-5">
        <DiscoverList />
        <MovieList />
      </div>
    </Layout>
  );
};

export default HomeTemplate;
