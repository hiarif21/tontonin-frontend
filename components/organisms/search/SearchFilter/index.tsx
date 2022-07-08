import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { initialFilterMovies, useMovies } from '../../../../context/movies';
import { useTheme } from '../../../../context/theme';
import Icons from '../../../atoms/Icons';

const SearchFilter = () => {
  const ref = useRef<HTMLInputElement>(null);

  const { filter, setFilter } = useMovies();
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    setFilter(initialFilterMovies);
    ref.current && ref.current.focus();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter({ title: e.target.value });
  };

  return (
    <label className="flex w-full items-center gap-2 rounded-lg bg-slate-50 p-5 text-sm dark:bg-slate-800">
      <Icons
        icon="search"
        type="solid"
        color={isDarkTheme ? 'light' : 'secondary'}
        size="small"
      />
      <input
        ref={ref}
        type="text"
        value={filter.title}
        onChange={(e) => handleChange(e)}
        autoComplete="off"
        autoCorrect="off"
        placeholder={'Search a movie title here...'}
        className={
          'w-full bg-slate-50 placeholder:text-slate-500 focus:outline-none focus-visible:outline-none dark:bg-slate-800 dark:placeholder:text-slate-300'
        }
      />
    </label>
  );
};

export default SearchFilter;
