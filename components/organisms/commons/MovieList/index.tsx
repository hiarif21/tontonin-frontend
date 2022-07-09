import InfiniteScrolling from '../../../molecules/commons/InfiniteScrolling';
import MovieCard from '../../../molecules/commons/MovieCard';

const MovieList = ({ data, totalData, loadMore, title }: MovieListProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        {title && <h1 className="text-center font-bold sm:text-lg">{title}</h1>}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {data.map((val, idx) => {
            return (
              <MovieCard
                key={idx}
                data={val}
                imagePriority={idx < 10 ? true : false}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <InfiniteScrolling
          loadMore={loadMore}
          finished={totalData !== 0 && totalData === data.length}
          markFinished
        />
      </div>
    </div>
  );
};

export default MovieList;
