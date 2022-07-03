import classNames from 'classnames';
import Image from 'next/image';

const MovieCard = ({ data, imagePriority = false, height }: MovieCardProps) => {
  return (
    <div
      className={classNames(
        'relative aspect-video overflow-hidden rounded-md bg-slate-100',
        {
          [`h-[${height}px]`]: height,
        }
      )}>
      <Image
        src={data.image}
        alt={data.title}
        layout="fill"
        priority={imagePriority}
      />
    </div>
  );
};

export default MovieCard;
