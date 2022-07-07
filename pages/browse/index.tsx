import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import BrowseTemplate from '../../components/templates/BrowseTemplate';
import { useMovies } from '../../context/movies';
import { getMovies } from '../../services/api/movies.service';

const Browse = ({ data, totalData }: BrowseProps) => {
  const router = useRouter();
  const { gr, pr } = router.query;

  const { setFilteredData, setFilteredTotalData, setFilter } = useMovies();
  useEffect(() => {
    if (!gr && !pr) router.push('/');

    setFilteredData(data);
    setFilteredTotalData(totalData);
    setFilter({
      genres: gr?.toString() || '',
      persons: pr?.toString() || '',
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gr, pr]);

  return <BrowseTemplate />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { gr, pr } = query;

  if (gr || pr) {
    const params: MoviesParams = {
      genres: gr?.toString() || '',
      persons: pr?.toString() || '',
    };
    const result = await getMovies(params);
    return {
      props: {
        data: result.data,
        totalData: result.total_data,
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

export default Browse;
