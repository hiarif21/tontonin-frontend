import Link from 'next/link';
import Icons from '../../../atoms/Icons';
import InfiniteScrolling from '../../../molecules/commons/InfiniteScrolling';
import MovieCard from '../../../molecules/commons/MovieCard';

const DiscoverList = ({ data, totalData, loadMore }: DiscoverListProps) => {
  return (
    <div className="flex flex-col gap-5">
      {data.map((val, idx) => {
        return (
          <div key={idx} className="group flex flex-col gap-2">
            <div className="flex items-center justify-between lg:grid lg:grid-cols-3 lg:place-items-center">
              <span className="w-full text-lg font-bold lg:w-auto lg:place-self-start">
                {val.title}
              </span>
              <span className="hidden animate-pulse place-self-center text-xs text-slate-500 lg:invisible lg:block lg:group-hover:visible">
                press shift and then scroll to slide
              </span>
              <div className="flex lg:w-full lg:justify-end">
                <Link href={'/discover?dd=' + val._id} passHref>
                  <a className="flex items-center gap-1 whitespace-nowrap text-xs text-blue-500">
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
            </div>
            <div className="overflow-auto whitespace-nowrap scrollbar-hide">
              {val.movies.map((val, idx) => {
                return (
                  <MovieCard
                    key={idx}
                    data={val}
                    imagePriority={idx < 4 ? true : false}
                    className="mr-2 h-[90px] sm:h-[120px] md:h-[150px]"
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
          dataLength={data.length}
          totalData={totalData}
        />
      </div>
    </div>
  );
};

export default DiscoverList;
