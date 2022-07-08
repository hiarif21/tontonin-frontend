import Layout from '../../Layout';
import Genre from '../../molecules/genres/Genre';

const GenresTemplate = ({ data }: GenresTemplate) => {
  return (
    <Layout title="Genres">
      <div className="sticky top-0 z-10 items-center gap-5 bg-white p-5 dark:bg-slate-900">
        <h1 className="col-span-3 text-center font-bold">Genres</h1>
      </div>
      <div className="flex flex-col gap-5 p-5">
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
