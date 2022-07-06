import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

const MovieCard = ({
  data,
  imagePriority = false,
  className,
}: MovieCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('?v=' + data._id, undefined, { shallow: true });
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={classNames(
          'relative inline-block aspect-video cursor-pointer bg-slate-100',
          { [`${className}`]: className }
        )}>
        <Image
          src={data.image}
          alt={data.title}
          layout="fill"
          priority={imagePriority}
          className={'rounded-md'}
        />
      </div>
    </>
  );
};

export default MovieCard;
