import { useEffect } from 'react';
import PopularTemplate from '../../components/templates/PopularTemplate';
import { useDiscovers } from '../../context/discovers';
import { getMoreDiscovers } from '../../services/api/discovers.service';

const Popular = ({ data, totalData }: PopularProps) => {
  const {
    moreDiscoversData,
    setMoreDiscoversData,
    setTotalMoreDiscoversData,
    totalMoreDiscoversData,
  } = useDiscovers();

  useEffect(() => {
    setMoreDiscoversData({ ...moreDiscoversData, popular: data });
    setTotalMoreDiscoversData({
      ...totalMoreDiscoversData,
      popular: totalData,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PopularTemplate />;
};

export async function getServerSideProps() {
  const result = await getMoreDiscovers({}, undefined, 'popular');
  return {
    props: {
      data: result.data,
      totalData: result.total_data,
    },
  };
}

export default Popular;
