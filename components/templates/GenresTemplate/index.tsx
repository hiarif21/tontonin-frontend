import Layout from '../../Layout';
import Genre from '../../molecules/genres/Genre';

const GenresTemplate = ({ data }: GenresTemplate) => {
  return (
    <Layout title="Genres">
      <div className="flex flex-col gap-5 p-5">
        <h1 className="text-center font-bold">Genres</h1>
        <div className="flex flex-col gap-2">
          {data.map((val, idx) => (
            <Genre key={idx} data={val} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GenresTemplate;
