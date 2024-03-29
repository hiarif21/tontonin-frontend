import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useMovies } from '../../../../context/movies';
import { useTheme } from '../../../../context/theme';
import Icons from '../../../atoms/Icons';
import Loading from '../../../atoms/Loading';
import Modal from '../../../atoms/Modal';

const MovieDetails = () => {
  const refModal = useRef(null);

  const router = useRouter();
  const { v } = router.query;

  const [data, setData] = useState<MovieData>();
  const [mute, setMute] = useState(true);

  const { getData } = useMovies();
  const { isDarkTheme } = useTheme();

  const handleClose = () => {
    let query = router.query;
    delete query.v;

    router.push(
      {
        pathname: router.pathname,
        query: query,
      },
      undefined,
      { shallow: true }
    );

    setData(undefined);
  };

  useEffect(() => {
    setData(undefined);

    if (v) {
      (async () => {
        const result = await getData(v.toString());
        if (!result.success) handleClose();
        setData(result.data);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [v]);

  if (!v) return null;

  let persons: any = {};

  if (data) {
    data.persons.forEach((value) => {
      if (Object.keys(persons).find((val) => val === value.role.name)) {
        persons = {
          ...persons,
          [value.role.name]: [...persons[value.role.name], value],
        };
      } else {
        persons = { ...persons, [value.role.name]: [value] };
      }
    });
  }

  return (
    <Modal onClickOutside={handleClose} show _ref={refModal}>
      <div className="flex h-full w-full flex-col items-center overflow-y-auto md:bg-slate-900/20 md:p-5 md:backdrop-blur-sm md:dark:bg-slate-500/20">
        {!data ? (
          <Loading _ref={refModal} />
        ) : (
          <div
            ref={refModal}
            className="rounded-lg bg-white pb-5 dark:bg-slate-900 md:max-w-screen-md">
            {/* header */}
            <div className="flex justify-end p-5">
              <button onClick={handleClose}>
                <Icons
                  icon="close"
                  type="solid"
                  color={isDarkTheme ? 'light' : 'default'}
                />
              </button>
            </div>

            {/* content */}
            <div className="flex flex-col gap-5 p-5 pt-0">
              {/* title */}
              <div className="flex flex-col items-center">
                <h2 className="text-lg font-bold sm:text-2xl">{data.title}</h2>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span>{data.release_year}</span>
                  <span className="h-[2px] w-[2px] rounded-full bg-slate-900 dark:bg-slate-100"></span>
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
                  <Icons
                    icon={mute ? 'mute' : 'unmute'}
                    type="solid"
                    color="light"
                  />
                </button>
              </div>

              {/* storyline */}
              <div className="flex flex-col gap-5">
                <h3 className="text-center font-bold sm:text-lg">Storyline</h3>
                <p className="darkb whitespace-normal rounded-lg bg-slate-50 p-5 text-sm dark:bg-slate-800">
                  {data.storyline}
                </p>
              </div>

              {/* about movie */}
              <div className="flex flex-col gap-5">
                <h3 className="text-center font-bold sm:text-lg">
                  About Movie
                </h3>
                <div className="flex flex-col gap-2 whitespace-normal rounded-lg bg-slate-50 p-5 text-sm dark:bg-slate-800">
                  {Object.keys(persons).map((value, index) => {
                    return (
                      <div key={index}>
                        <span className="font-bold">{value}: </span>
                        {persons[value].map(
                          (val: { _id: string; name: string }, idx: any) => {
                            return (
                              <button
                                onClick={() =>
                                  router.push({
                                    pathname: 'browse',
                                    query: {
                                      pr: val._id,
                                      tl: val.name,
                                    },
                                  })
                                }
                                key={val._id + idx}
                                className={
                                  "ml-1 after:content-[','] last:after:content-[''] hover:underline"
                                }>
                                {val.name}
                              </button>
                            );
                          }
                        )}
                      </div>
                    );
                  })}
                  <div>
                    <span className="font-bold">Genres: </span>
                    {data.genres.map((val, idx) => {
                      return (
                        <button
                          onClick={() =>
                            router.push({
                              pathname: 'browse',
                              query: {
                                gr: val._id,
                                tl: val.name,
                              },
                            })
                          }
                          key={val._id + idx}
                          className={
                            "ml-1 after:content-[','] last:after:content-[''] hover:underline"
                          }>
                          {val.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* watch options */}
              <div className="flex flex-col gap-5">
                <h3 className="text-center font-bold sm:text-lg">
                  All Watch Options
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {data.watch_options.map((val, idx) => {
                    const url = new URL(val.link_streaming);
                    const srcIcon =
                      url.protocol + '//' + url.hostname + '/favicon.ico';
                    const icon = (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={srcIcon}
                        className={'h-4 w-4'}
                        alt={val.title}
                      />
                    );
                    return (
                      <a
                        key={idx}
                        href={val.link_streaming}
                        className="flex items-center gap-2 rounded-lg bg-slate-50 px-5 py-3 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700">
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
        )}
      </div>
    </Modal>
  );
};

export default MovieDetails;
