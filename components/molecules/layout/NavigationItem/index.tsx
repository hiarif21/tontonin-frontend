import Link from 'next/link';
import { useTheme } from '../../../../context/theme';
import Icons from '../../../atoms/Icons';

const NavigationItem = ({ type, active = false }: NavigationItemProps) => {
  const { isDarkTheme } = useTheme();

  return (
    <Link href={type === 'home' ? '/' : '/' + type}>
      <a
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
      </a>
    </Link>
  );
};

export default NavigationItem;
