import Image from 'next/image';

const Genre = ({ data }: GenreProps) => {
  return (
    <button className="flex w-full items-center gap-5 rounded-xl bg-slate-50 p-5">
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
