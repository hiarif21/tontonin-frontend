import { useDiscovers } from '../../../context/discovers';
import Layout from '../../Layout';
import MovieList from '../../organisms/commons/MovieList';

const PopularTemplate = () => {
  const { moreDiscoversData, totalMoreDiscoversData, loadMoreDiscovers } =
    useDiscovers();

  const data = moreDiscoversData.popular;
  const totalData = totalMoreDiscoversData.popular;
  const loadMore = () => loadMoreDiscovers('popular');

  return (
    <Layout title="Most Popular">
      <div className="p-5">
        <MovieList
          data={data}
          title="Most Popular"
          loadMore={loadMore}
          totalData={totalData}
        />
      </div>
      ;
    </Layout>
  );
};

export default PopularTemplate;
