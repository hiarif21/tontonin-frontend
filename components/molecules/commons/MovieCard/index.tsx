import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MovieCard = ({
  data,
  imagePriority = false,
  className,
}: MovieCardProps) => {
  const router = useRouter();

  const [url, setUrl] = useState('');

  useEffect(() => {
    if (Object.keys(router.query).length === 0) {
      setUrl(router.pathname + '?v=' + data._id);
    } else {
      setUrl(router.asPath + '&v=' + data._id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  const handleClick = () => {
    router.push(url, undefined, { shallow: true });
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
