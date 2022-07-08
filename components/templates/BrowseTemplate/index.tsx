import { useRouter } from 'next/router';
import { useMovies } from '../../../context/movies';
import { useTheme } from '../../../context/theme';
import Icons from '../../atoms/Icons';
import Layout from '../../Layout';
import MovieList from '../../organisms/commons/MovieList';

const BrowseTemplate = () => {
  const router = useRouter();

  const { filteredData, filteredTotalData, loadMoreFiltered } = useMovies();
  const { isDarkTheme } = useTheme();

  const data = filteredData;
  const title = router.query.tl?.toString();
  const totalData = filteredTotalData;
  const loadMore = loadMoreFiltered;

  return (
    <Layout title={title || 'Browse'}>
      {Boolean(title) && (
        <>
          <div className="sticky top-0 z-10 grid grid-cols-5 items-center gap-5 bg-white p-5 dark:bg-slate-900">
            <div className="flex items-center">
              <button onClick={router.back}>
                <Icons
                  icon="back"
                  type="solid"
                  color={isDarkTheme ? 'light' : 'default'}
                />
              </button>
            </div>
            <h1 className="col-span-3 text-center font-bold">{title}</h1>
          </div>
          <div className="p-5">
            <MovieList data={data} loadMore={loadMore} totalData={totalData} />
          </div>
        </>
      )}
    </Layout>
  );
};

export default BrowseTemplate;
