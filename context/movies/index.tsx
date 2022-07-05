import { createContext, ReactNode, useContext, useState } from 'react';
import { getMovies } from '../../services/api/movies.service';

const Context = createContext({});

export const MoviesProvider = (props: { children: ReactNode }) => {
  const [data, setData] = useState<MovieData[]>([]);
  const [totalData, setTotalData] = useState(0);

  const loadMore: LoadMoreMovies = async () => {
    let count = Math.floor(data.length / 10 + 1);

    if (data.length < totalData) {
      const result = await getMovies({
        page: count,
      });
      setData([...data, ...result.data]);
      setTotalData(result.total_data);
    }
  };

  const store = {
    data,
    setData,
    totalData,
    setTotalData,
    loadMore,
  };

  return <Context.Provider value={store}>{props.children}</Context.Provider>;
};

// @ts-ignore
export const useMovies: UseMovies = () => {
  return useContext(Context);
};
