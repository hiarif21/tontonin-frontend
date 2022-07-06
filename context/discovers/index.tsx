import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  getDiscovers,
  getMoreDiscovers,
} from '../../services/api/discovers.service';

const initialMoreDiscovers: MoreDiscoversData = {
  popular: [],
  new: [],
};

const initialTotalMoreDiscovers: TotalMoreDiscoversData = {
  popular: 0,
  new: 0,
};

const Context = createContext({});

export const DiscoversProvider = (props: { children: ReactNode }) => {
  const [data, setData] = useState<DiscoverData[]>([]);
  const [totalData, setTotalData] = useState(0);

  const [moreDiscoversData, setMoreDiscoversData] =
    useState<MoreDiscoversData>(initialMoreDiscovers);
  const [totalMoreDiscoversData, setTotalMoreDiscoversData] = useState(
    initialTotalMoreDiscovers
  );

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

  const loadMoreDiscovers: LoadMoreDiscoversDiscovers = async (type) => {
    let count = Math.floor(moreDiscoversData[type].length / 10 + 1);

    if (moreDiscoversData[type].length < totalMoreDiscoversData[type]) {
      const result = await getMoreDiscovers(
        {
          page: count,
        },
        undefined,
        type
      );
      setMoreDiscoversData({
        ...moreDiscoversData,
        [type]: [...moreDiscoversData[type], ...result.data],
      });
      setTotalMoreDiscoversData({
        ...totalMoreDiscoversData,
        [type]: result.total_data,
      });
    }
  };

  const store = {
    data,
    setData,
    totalData,
    setTotalData,
    loadMore,
    loadMoreDiscovers,
    moreDiscoversData,
    setMoreDiscoversData,
    totalMoreDiscoversData,
    setTotalMoreDiscoversData,
  };

  return <Context.Provider value={store}>{props.children}</Context.Provider>;
};

// @ts-ignore
export const useDiscovers: UseDiscovers = () => {
  return useContext(Context);
};
