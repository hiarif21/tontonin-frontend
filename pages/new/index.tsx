import { useEffect } from 'react';
import NewTemplate from '../../components/templates/NewTemplate';
import { useDiscovers } from '../../context/discovers';
import { getMoreDiscovers } from '../../services/api/discovers.service';

const New = () => {
  const {
    moreDiscoversData,
    totalMoreDiscoversData,
    setMoreDiscoversData,
    setTotalMoreDiscoversData,
  } = useDiscovers();

  useEffect(() => {
    const setData = async () => {
      const result = await getMoreDiscovers({}, undefined, 'new');

      setMoreDiscoversData({ ...moreDiscoversData, new: result.data });
      setTotalMoreDiscoversData({
        ...totalMoreDiscoversData,
        new: result.total_data,
      });
    };

    if (moreDiscoversData.new.length === 0) setData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <NewTemplate />;
};

export default New;
