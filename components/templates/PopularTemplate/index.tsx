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
      <div className="sticky top-0 z-10 items-center gap-5 bg-white p-5 dark:bg-slate-900">
        <h1 className="col-span-3 text-center font-bold">Most Popular</h1>
      </div>
      <div className="p-5">
        <MovieList data={data} loadMore={loadMore} totalData={totalData} />
      </div>
    </Layout>
  );
};

export default PopularTemplate;
