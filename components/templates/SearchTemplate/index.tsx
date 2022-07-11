import { useEffect, useState } from 'react';
import { useMovies } from '../../../context/movies';
import Layout from '../../Layout';
import MovieDetails from '../../molecules/commons/MovieDetails';
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
          <>
            {filteredTotalData === 0 && !filteredTotalData ? (
              <div className="flex w-full justify-center p-5">
                <span>😢 we couldn&apos;t find any Movies for this search</span>
              </div>
            ) : (
              <MovieList
                data={filteredData}
                totalData={filteredTotalData}
                loadMore={loadMoreFiltered}
                title={
                  filteredTotalData
                    ? filteredTotalData +
                      ' Result' +
                      (filteredTotalData > 1 ? 's' : '')
                    : ''
                }
              />
            )}
          </>
        )}
      </div>
      <MovieDetails />
    </Layout>
  );
};

export default SearchTemplate;
