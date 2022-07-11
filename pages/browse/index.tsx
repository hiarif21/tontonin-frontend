import { useRouter } from 'next/router';
import { useEffect } from 'react';
import BrowseTemplate from '../../components/templates/BrowseTemplate';
import { initialFilterMovies, useMovies } from '../../context/movies';
import { getMovies } from '../../services/api/movies.service';

const Browse = () => {
  const router = useRouter();
  const { gr, pr } = router.query;

  const {
    setFilteredData,
    setFilteredTotalData,
    setFilter,
    filter,
    filteredData,
  } = useMovies();

  useEffect(() => {
    setFilteredData([]);
    setFilteredTotalData(undefined);
    setFilter(initialFilterMovies);

    const setData = async (
      id: string | undefined,
      type: 'genres' | 'persons'
    ) => {
      const result = await getMovies({ [type]: id });

      if (!result.success) router.push('/');

      setFilteredData(result.data);
      setFilteredTotalData(result.total_data);
      setFilter({ [type]: id });
    };

    if (gr && gr !== filter.genres) {
      setData(gr.toString(), 'genres');
    } else if (pr && pr !== filter.persons) {
      setData(pr.toString(), 'persons');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gr, pr]);

  return <BrowseTemplate />;
};

export default Browse;
