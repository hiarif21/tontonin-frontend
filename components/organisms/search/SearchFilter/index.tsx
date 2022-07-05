import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { initialFilterMovies, useMovies } from '../../../../context/movies';
import Icons from '../../../atoms/Icons';

const SearchFilter = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { filter, setFilter } = useMovies();

  useEffect(() => {
    setFilter(initialFilterMovies);
    ref.current && ref.current.focus();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter({ title: e.target.value });
  };

  return (
    <label className="flex w-full items-center gap-2 rounded-xl bg-slate-50 p-5 text-sm">
      <Icons icon="search" type="solid" color="secondary" size="small" />
      <input
        ref={ref}
        type="search"
        value={filter.title}
        onChange={(e) => handleChange(e)}
        autoComplete="off"
        autoCorrect="off"
        placeholder={'Search a movie title here...'}
        className={
          'w-full bg-slate-50 placeholder:text-slate-500 focus:outline-none focus-visible:outline-none'
        }
      />
    </label>
  );
};

export default SearchFilter;
