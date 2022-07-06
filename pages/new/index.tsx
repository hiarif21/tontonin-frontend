import { useEffect } from 'react';
import NewTemplate from '../../components/templates/NewTemplate';
import { useDiscovers } from '../../context/discovers';
import { getMoreDiscovers } from '../../services/api/discovers.service';

const New = ({ data, totalData }: NewProps) => {
  const {
    moreDiscoversData,
    setMoreDiscoversData,
    setTotalMoreDiscoversData,
    totalMoreDiscoversData,
  } = useDiscovers();

  useEffect(() => {
    setMoreDiscoversData({ ...moreDiscoversData, new: data });
    setTotalMoreDiscoversData({
      ...totalMoreDiscoversData,
      new: totalData,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <NewTemplate />;
};

export async function getServerSideProps() {
  const result = await getMoreDiscovers({}, undefined, 'new');
  return {
    props: {
      data: result.data,
      totalData: result.total_data,
    },
  };
}

export default New;
