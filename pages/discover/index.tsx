import { useRouter } from 'next/router';
import { useEffect } from 'react';
import DiscoversDetailTemplate from '../../components/templates/DiscoversDetailTemplate';
import {
  initialSingleDataDiscover,
  useDiscovers,
} from '../../context/discovers';
import { getDiscover } from '../../services/api/discovers.service';

const DiscoversDetail = () => {
  const router = useRouter();
  const { dd } = router.query;

  const { setSingleData, setTotalSingleData } = useDiscovers();

  useEffect(() => {
    setSingleData(initialSingleDataDiscover);
    setTotalSingleData(0);

    if (dd) {
      (async () => {
        const result = await getDiscover(dd.toString());

        if (!result.success) router.push('/');

        setSingleData(result.data);
        setTotalSingleData(result.total_movies);
      })();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dd]);

  return <DiscoversDetailTemplate />;
};

export default DiscoversDetail;
