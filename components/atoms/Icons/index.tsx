import classNames from 'classnames';
import {
  ClipboardListIconOutline,
  FireIconOutline,
  HomeIconOutline,
  SearchIconOutline,
  StarIconOutline,
  SunIconOutline,
} from './IconOutline';
import {
  ChevronLeftIconSolid,
  ChevronRightIconSolid,
  ClipboardListIconSolid,
  FireIconSolid,
  HomeIconSolid,
  SearchIconSolid,
  StarIconSolid,
  SunIconSolid,
  VolumeOffIconSolid,
  VolumeUpIconSolid,
  XIconSolid,
} from './IconSolid';

const Icons = ({
  icon,
  type = 'outline',
  color = 'default',
  size = 'default',
}: IconsProps) => {
  const style = classNames('stroke-[1.5px]', {
    'stroke-slate-900': type === 'outline' && color === 'default',
    'fill-slate-900': type === 'solid' && color === 'default',
    'stroke-blue-500': type === 'outline' && color === 'primary',
    'fill-blue-500': type === 'solid' && color === 'primary',
    'stroke-slate-500': type === 'outline' && color === 'secondary',
    'fill-slate-500': type === 'solid' && color === 'secondary',
    'stroke-slate-100': type === 'outline' && color === 'light',
    'fill-slate-100': type === 'solid' && color === 'light',
    'h-6 w-6': size === 'default',
    'h-4 w-4': size === 'small',
    'h-3 w-3': size === 'smallest',
  });

  if (type === 'outline') {
    switch (icon) {
      case 'theme':
        return <SunIconOutline className={style} />;
      case 'home':
        return <HomeIconOutline className={style} />;
      case 'search':
        return <SearchIconOutline className={style} />;
      case 'popular':
        return <StarIconOutline className={style} />;
      case 'new':
        return <FireIconOutline className={style} />;
      case 'genres':
        return <ClipboardListIconOutline className={style} />;
      default:
        return <span>😢</span>;
    }
  } else {
    switch (icon) {
      case 'theme':
        return <SunIconSolid className={style} />;
      case 'home':
        return <HomeIconSolid className={style} />;
      case 'search':
        return <SearchIconSolid className={style} />;
      case 'popular':
        return <StarIconSolid className={style} />;
      case 'new':
        return <FireIconSolid className={style} />;
      case 'genres':
        return <ClipboardListIconSolid className={style} />;
      case 'chevron':
        return <ChevronRightIconSolid className={style} />;
      case 'close':
        return <XIconSolid className={style} />;
      case 'mute':
        return <VolumeOffIconSolid className={style} />;
      case 'unmute':
        return <VolumeUpIconSolid className={style} />;
      case 'back':
        return <ChevronLeftIconSolid className={style} />;
      default:
        return <span>😢</span>;
    }
  }
};
export default Icons;
