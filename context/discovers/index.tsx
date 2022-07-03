import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getDiscovers } from '../../services/api/discovers.service';

const Context = createContext({});

export const DiscoversProvider = (props: { children: ReactNode }) => {
  const [data, setData] = useState<DataDiscover[]>([]);
  const [totalData, setTotalData] = useState(0);

  const loadMore: LoadMoreDiscovers = async () => {
    let count = Math.floor(data.length / 10 + 1);

    if (data.length < totalData) {
      const result = await getDiscovers({
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
export const useDiscovers: UseDiscovers = () => {
  return useContext(Context);
};
