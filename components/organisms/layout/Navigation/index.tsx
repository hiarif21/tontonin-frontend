import { useRouter } from 'next/router';
import NavigationItem from '../../../molecules/layout/NavigationItem';

const listMenu: TypeGenres[] = ['home', 'search', 'popular', 'new', 'genres'];

const Navigation = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="fixed left-0 bottom-0 flex w-full gap-[10px] border-t border-slate-100 bg-white p-[10px] dark:border-slate-800 dark:bg-slate-900 lg:static lg:border-none lg:p-0">
        {listMenu.map((val, idx) => {
          return (
            <NavigationItem
              key={idx}
              type={val}
              active={router.pathname === '/' + (val === 'home' ? '' : val)}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
