import { useMovies } from '../../../context/movies';
import Layout from '../../Layout';
import MovieList from '../../organisms/commons/MovieList';
import SearchFilter from '../../organisms/search/SearchFilter';

const SearchTemplate = () => {
  const { filter, filteredData, filteredTotalData, loadMoreFiltered } =
    useMovies();
  return (
    <Layout title="Search">
      <div className="sticky top-0 z-10 items-center gap-5 bg-white p-5 dark:bg-slate-900">
        <SearchFilter />
      </div>
      <div className="flex flex-col gap-5 p-5 pt-0">
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
