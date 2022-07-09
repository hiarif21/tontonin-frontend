import Layout from '../../Layout';
import Genre from '../../molecules/genres/Genre';

const GenresTemplate = ({ data }: GenresTemplate) => {
  return (
    <Layout title="Genres">
      <div className="sticky top-0 z-10 items-center gap-5 bg-white p-5 dark:bg-slate-900 lg:static">
        <h1 className="col-span-3 text-center font-bold sm:text-lg lg:text-xl">
          Genres
        </h1>
      </div>
      <div className="grid gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((val, idx) => (
          <Genre key={idx} data={val} />
        ))}
      </div>
    </Layout>
  );
};

export default GenresTemplate;
