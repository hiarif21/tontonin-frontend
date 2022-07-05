import { useDiscovers } from '../../../context/discovers';
import Layout from '../../Layout';
import DiscoverList from '../../organisms/commons/DiscoverList';
import MovieList from '../../organisms/commons/MovieList';

const HomeTemplate = () => {
  const { data, totalData } = useDiscovers();

  return (
    <Layout title="Home">
      <div className="p-5">
        <DiscoverList />
        {data.length === totalData && <MovieList />}
      </div>
    </Layout>
  );
};

export default HomeTemplate;
