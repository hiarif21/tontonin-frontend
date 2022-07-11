import { useEffect } from 'react';
import PopularTemplate from '../../components/templates/PopularTemplate';
import { useDiscovers } from '../../context/discovers';
import { getMoreDiscovers } from '../../services/api/discovers.service';

const Popular = () => {
  const {
    moreDiscoversData,
    totalMoreDiscoversData,
    setMoreDiscoversData,
    setTotalMoreDiscoversData,
  } = useDiscovers();

  useEffect(() => {
    const setData = async () => {
      const result = await getMoreDiscovers({}, undefined, 'popular');

      setMoreDiscoversData({ ...moreDiscoversData, popular: result.data });
      setTotalMoreDiscoversData({
        ...totalMoreDiscoversData,
        popular: result.total_data,
      });
    };

    if (moreDiscoversData.popular.length === 0) setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PopularTemplate />;
};

export default Popular;
