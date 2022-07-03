import { useMovies } from '../../../../context/movies';
import InfiniteScrolling from '../../../molecules/commons/InfiniteScrolling';
import MovieCard from '../../../molecules/commons/MovieCard';

const MovieList = () => {
  const { data, totalData, loadMore } = useMovies();

  console.log(data);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <span className="text-center font-bold">More For You</span>
        <div className="grid grid-cols-2 gap-2">
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