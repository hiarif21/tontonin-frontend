import Image from 'next/image';
import { useRouter } from 'next/router';

const Genre = ({ data }: GenreProps) => {
  const router = useRouter();
  const params = new URLSearchParams({ gr: data._id, tl: data.name });
  return (
    <button
      onClick={() => router.push('/browse?' + params)}
      className="flex w-full items-center gap-5 rounded-lg bg-slate-50 p-5 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700">
      <div className="relative h-5 w-5">
        <Image
          src={'/icons/' + data.name.toLocaleLowerCase() + '.png'}
          layout="fill"
          alt={data.name}
        />
      </div>
      <span className="font-bold">{data.name}</span>
    </button>
  );
};

export default Genre;
