import { useMovies } from '../../../context/movies';
import Layout from '../../Layout';
import MovieList from '../../organisms/commons/MovieList';
import SearchFilter from '../../organisms/search/SearchFilter';

const SearchTemplate = () => {
  const { filter, filteredData, filteredTotalData, loadMoreFiltered } =
    useMovies();
  return (
    <Layout title="Search">
      <div className="flex flex-col gap-5 p-5">
        <SearchFilter />
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
