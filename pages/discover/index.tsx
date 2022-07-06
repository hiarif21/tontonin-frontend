import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import DiscoversDetailTemplate from '../../components/templates/DiscoversDetailTemplate';
import { useDiscovers } from '../../context/discovers';
import { getDiscover } from '../../services/api/discovers.service';

const DiscoversDetail = ({ data, totalData }: DiscoversDetailProps) => {
  const router = useRouter();

  const { setSingleData, setTotalSingleData } = useDiscovers();
  useEffect(() => {
    setSingleData(data);
    setTotalSingleData(totalData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!router.query.dd) router.push('/');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.dd]);

  return <DiscoversDetailTemplate />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (query.dd) {
    const result = await getDiscover(query.dd.toString());
    return {
      props: {
        data: result.data,
        totalData: result.total_movies,
      },
    };
  }
  return {
    props: {
      data: [],
      totalData: 0,
    },
  };
};

export default DiscoversDetail;
