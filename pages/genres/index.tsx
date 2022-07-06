import GenresTemplate from '../../components/templates/GenresTemplate';
import { getGenres } from '../../services/api/genres.service';

const Genres = ({ data }: GenresProps) => {
  return <GenresTemplate data={data} />;
};

export async function getStaticProps() {
  const result = await getGenres();
  return {
    props: {
      data: result.data,
    },
  };
}

export default Genres;
