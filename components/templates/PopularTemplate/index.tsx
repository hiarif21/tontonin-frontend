import { useDiscovers } from '../../../context/discovers';
import Loading from '../../atoms/Loading';
import Layout from '../../Layout';
import MovieDetails from '../../molecules/commons/MovieDetails';
import MovieList from '../../organisms/commons/MovieList';

const PopularTemplate = () => {
  const { moreDiscoversData, totalMoreDiscoversData, loadMoreDiscovers } =
    useDiscovers();

  const data = moreDiscoversData.popular;
  const totalData = totalMoreDiscoversData.popular;
  const loadMore = () => loadMoreDiscovers('popular');

  return (
    <Layout title="Most Popular">
      <div className="sticky top-0 z-10 items-center gap-5 bg-white p-5 dark:bg-slate-900 lg:static">
        <h1 className="col-span-3 text-center font-bold sm:text-lg lg:text-xl">
          Most Popular
        </h1>
      </div>
      <div className="p-5 pt-0 lg:p-5">
        {totalData === 0 ? (
          <div className="flex w-full justify-center">
            <Loading />
          </div>
        ) : (
          <MovieList data={data} loadMore={loadMore} totalData={totalData} />
        )}
      </div>
      <MovieDetails />
    </Layout>
  );
};

export default PopularTemplate;
