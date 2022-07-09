import { useRouter } from 'next/router';
import { useTheme } from '../../../../context/theme';
import Icons from '../../../atoms/Icons';

const NavigationItem = ({ type, active = false }: NavigationItemProps) => {
  const router = useRouter();

  const { isDarkTheme } = useTheme();

  const handleClick = () => {
    const url = type === 'home' ? '/' : '/' + type;
    router.push(url, undefined, { shallow: true, scroll: false });
  };

  return (
    <button
      onClick={handleClick}
      className={
        'flex w-full flex-col items-center gap-1 rounded-xl p-[10px] text-xs hover:bg-slate-100 dark:hover:bg-slate-800 lg:flex-row lg:gap-2 lg:text-sm'
      }>
      <Icons
        icon={type}
        color={
          active
            ? isDarkTheme
              ? 'light'
              : 'primary'
            : isDarkTheme
            ? 'light'
            : 'default'
        }
        type={active ? 'solid' : 'outline'}
      />
      <span className="capitalize">{type}</span>
    </button>
  );
};

export default NavigationItem;
