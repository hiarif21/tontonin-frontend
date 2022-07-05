import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getMovies } from '../../services/api/movies.service';

const Context = createContext({});

export const initialFilterMovies = {
  title: '',
  watch_options: '',
  persons: '',
  genres: '',
};

export const MoviesProvider = (props: { children: ReactNode }) => {
  const [data, setData] = useState<MovieData[]>([]);
  const [totalData, setTotalData] = useState(0);

  const [filteredData, setFilteredData] = useState<MovieData[]>([]);
  const [filteredTotalData, setFilteredTotalData] = useState(0);

  const [filter, setFilter] = useState<FilterMovies>(initialFilterMovies);

  useEffect(() => {
    const abortController = new AbortController();

    const checkFilter =
      Boolean(filter.genres) ||
      Boolean(filter.persons) ||
      Boolean(filter.title) ||
      Boolean(filter.watch_options);

    if (checkFilter) {
      const signal = abortController.signal;
      loadFilteredData(signal);
    }

    return () => {
      abortController.abort();
    };
  }, [filter]);

  const loadFilteredData: LoadFilteredDataMovies = async (
    signal = undefined
  ) => {
    const result = await getMovies(filter, signal);

    if (result?.success) {
      setFilteredData(result.data);
      setFilteredTotalData(result.total_data);
    }

    return result;
  };

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

  const loadMoreFiltered: LoadMoreFilteredMovies = async () => {
    let count = Math.floor(filteredData.length / 10 + 1);

    if (filteredData.length < filteredTotalData) {
      const result = await getMovies({
        page: count,
        ...filter,
      });
      setFilteredData([...filteredData, ...result.data]);
      setFilteredTotalData(result.total_data);
    }
  };

  const store = {
    data,
    setData,
    totalData,
    setTotalData,
    loadMore,
    filteredData,
    filteredTotalData,
    loadMoreFiltered,
    filter,
    setFilter,
  };

  return <Context.Provider value={store}>{props.children}</Context.Provider>;
};

// @ts-ignore
export const useMovies: UseMovies = () => {
  return useContext(Context);
};
