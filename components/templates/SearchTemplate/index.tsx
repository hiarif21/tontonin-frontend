import { useMovies } from '../../../context/movies';
import Layout from '../../Layout';
import MovieList from '../../organisms/commons/MovieList';
import SearchFilter from '../../organisms/search/SearchFilter';

const SearchTemplate = () => {
  const { filter, filteredData, filteredTotalData, loadMoreFiltered } =
    useMovies();
  return (
    <Layout title="Search">
      <div className="sticky top-0 z-10 mx-auto gap-5 bg-white p-5 dark:bg-slate-900 lg:static lg:max-w-3xl">
        <SearchFilter />
      </div>
      <div className="p-5 pt-0">
        {Boolean(filter.title) && (
          <MovieList
            data={filteredData}
            totalData={filteredTotalData}
            loadMore={loadMoreFiltered}
            title={'Results'}
          />
        )}
      </div>
    </Layout>
  );
};

export default SearchTemplate;
