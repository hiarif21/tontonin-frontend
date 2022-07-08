import { useRouter } from 'next/router';
import { useDiscovers } from '../../../context/discovers';
import { useTheme } from '../../../context/theme';
import Icons from '../../atoms/Icons';
import Layout from '../../Layout';
import MovieList from '../../organisms/commons/MovieList';

const DiscoversDetailTemplate = () => {
  const router = useRouter();

  const { singleData, totalSingleData, loadMoreDiscover } = useDiscovers();
  const { isDarkTheme } = useTheme();

  const title = singleData.title;
  const data = singleData.movies;
  const totalData = totalSingleData;
  const loadMore = () => loadMoreDiscover(router.query.dd!.toString());

  return (
    <Layout title="Discovers Detail">
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
          </div>{' '}
        </>
      )}
    </Layout>
  );
};

export default DiscoversDetailTemplate;
