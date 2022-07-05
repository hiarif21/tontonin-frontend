import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useId, useState } from 'react';
import ReactPlayer from 'react-player';
import Icons from '../../../atoms/Icons';

const MovieCard = ({
  data,
  imagePriority = false,
  className,
}: MovieCardProps) => {
  const router = useRouter();

  const { unq } = router.query;

  useEffect(() => {
    if (unq) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [unq]);

  const uniqueId = useId();
  const params = new URLSearchParams({ unq: uniqueId }).toString();

  const handleClick = () => {
    router.push('?' + params, undefined, { shallow: true });
  };

  if (unq === uniqueId) {
    return <MovieDetail data={data} />;
  }

  return (
    <div
      onClick={handleClick}
      className={
        'relative inline-block aspect-video cursor-pointer bg-slate-100' +
        ' ' +
        className
      }>
      <Image
        src={data.image}
        alt={data.title + uniqueId}
        layout="fill"
        priority={imagePriority}
        className={'rounded-md'}
      />
    </div>
  );
};

const MovieDetail = ({ data }: { data: MovieData }) => {
  const router = useRouter();

  const [mute, setMute] = useState(true);

  let aboutMovie: any = {};

  data.persons.forEach((value) => {
    if (Object.keys(aboutMovie).find((val) => val === value.role.name)) {
      aboutMovie = {
        ...aboutMovie,
        [value.role.name]: [...aboutMovie[value.role.name], value.name],
      };
    } else {
      aboutMovie = { ...aboutMovie, [value.role.name]: [value.name] };
    }
  });

  data.genres.forEach((value) => {
    if (aboutMovie.Genres) {
      aboutMovie = {
        ...aboutMovie,
        Genres: [...aboutMovie.Genres, value.name],
      };
    } else {
      aboutMovie = { ...aboutMovie, Genres: [value.name] };
    }
  });

  return (
    <div className="fixed top-0 left-0 z-10 flex h-screen w-screen flex-col overflow-y-auto bg-white">
      {/* header */}
      <div className="sticky top-0 left-0 z-20 flex justify-end bg-white p-5">
        <button
          onClick={() =>
            router.push(router.pathname, undefined, { shallow: true })
          }>
          <Icons icon="close" type="solid" />
        </button>
      </div>

      {/* content */}
      <div className="flex flex-col gap-5 p-5 pt-0">
        {/* title */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold">{data.title}</h2>
          <div className="flex items-center gap-2 text-xs">
            <span>{data.release_year}</span>
            <span className="h-[2px] w-[2px] rounded-full bg-slate-900"></span>
            <span>{data.runtime} minutes</span>
          </div>
        </div>

        {/* trailer */}
        <div className="relative overflow-hidden">
          <ReactPlayer
            className="aspect-video w-full"
            url={data.link_trailer}
            playing
            muted={mute}
            loop
            width={'100%'}
            height={'100%'}
          />
          <button
            onClick={() => setMute(!mute)}
            className="absolute bottom-5 left-5">
            <Icons icon={mute ? 'mute' : 'unmute'} type="solid" color="light" />
          </button>
        </div>

        {/* storyline */}
        <div className="flex flex-col gap-5">
          <h3 className="text-center font-bold">Storyline</h3>
          <p className="whitespace-normal rounded bg-slate-50 p-5 text-sm">
            {data.storyline}
          </p>
        </div>

        {/* about movie */}
        <div className="flex flex-col gap-5">
          <h3 className="text-center font-bold">About Movie</h3>
          <div className="flex flex-col gap-2 whitespace-normal rounded bg-slate-50 p-5 text-sm">
            {Object.keys(aboutMovie).map((value, index) => {
              return (
                <div key={index}>
                  <span className="font-bold">{value}: </span>
                  {aboutMovie[value].map((val: any, idx: KeyType) => {
                    return (
                      <span
                        key={val + idx}
                        className={
                          "after:content-[',_'] last:after:content-['']"
                        }>
                        {val}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* watch options */}
        <div className="flex flex-col gap-5">
          <h3 className="text-center font-bold">All Watch Options</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {data.watch_options.map((val, idx) => {
              const url = new URL(val.link_streaming);
              const srcIcon =
                url.protocol + '//' + url.hostname + '/favicon.ico';
              const icon = (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={srcIcon} className={'h-4 w-4'} alt={val.title} />
              );
              return (
                <a
                  key={idx}
                  href={val.link_streaming}
                  className="flex items-center gap-2 rounded bg-slate-50 p-5 hover:bg-slate-100">
                  {icon}
                  {val.streaming_service.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* end content */}
      </div>
    </div>
  );
};

export default MovieCard;
