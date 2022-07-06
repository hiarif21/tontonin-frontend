import { useDiscovers } from '../../../context/discovers';
import Layout from '../../Layout';
import MovieList from '../../organisms/commons/MovieList';

const NewTemplate = () => {
  const { moreDiscoversData, totalMoreDiscoversData, loadMoreDiscovers } =
    useDiscovers();

  const data = moreDiscoversData.new;
  const totalData = totalMoreDiscoversData.new;
  const loadMore = () => loadMoreDiscovers('new');

  return (
    <Layout title="New Release">
      <div className="p-5">
        <MovieList
          data={data}
          title="New Release"
          loadMore={loadMore}
          totalData={totalData}
        />
      </div>
      ;
    </Layout>
  );
};

export default NewTemplate;
