import Link from 'next/link';
import Icons from '../../../atoms/Icons';
import InfiniteScrolling from '../../../molecules/commons/InfiniteScrolling';
import MovieCard from '../../../molecules/commons/MovieCard';

const DiscoverList = ({ data, totalData, loadMore }: DiscoverListProps) => {
  return (
    <div className="flex flex-col gap-5">
      {data.map((val, idx) => {
        return (
          <div key={idx} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-bold">{val.title}</span>
              <Link href={'/discover?dd=' + val._id} passHref>
                <a className="flex items-center gap-1 text-xs text-blue-500">
                  Explore All
                  <Icons
                    icon="chevron"
                    type="solid"
                    size="smallest"
                    color="primary"
                  />
                </a>
              </Link>
            </div>
            <div className="overflow-auto whitespace-nowrap scrollbar-hide">
              {val.movies.map((val, idx) => {
                return (
                  <MovieCard
                    key={idx}
                    data={val}
                    imagePriority={idx < 4 ? true : false}
                    className="mr-2 h-[90px]"
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="flex justify-center">
        <InfiniteScrolling
          loadMore={loadMore}
          finished={totalData !== 0 && totalData === data.length}
        />
      </div>
    </div>
  );
};

export default DiscoverList;
