import { useRouter } from 'next/router';
import { NavigationItemProps } from '../../../../types/layout';
import Icons from '../../../atoms/Icons';

const NavigationItem = ({ type, active = false }: NavigationItemProps) => {
  const router = useRouter();

  const style =
    'flex flex-col items-center gap-1 text-xs w-full rounded-xl hover:bg-slate-100 p-[10px]';

  const handleClick = () => {
    type === 'home' ? router.push('/') : router.push('/' + type);
  };

  return (
    <button onClick={handleClick} className={style}>
      <Icons
        icon={type}
        color={active ? 'primary' : 'default'}
        type={active ? 'solid' : 'outline'}
      />
      <span className="capitalize">{type}</span>
    </button>
  );
};

export default NavigationItem;
