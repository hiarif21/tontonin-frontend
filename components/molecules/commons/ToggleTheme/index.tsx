import { useTheme } from '../../../../context/theme';
import Icons from '../../../atoms/Icons';

const ToggleTheme = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const type = isDarkTheme ? 'solid' : 'outline';
  const color = isDarkTheme ? 'light' : 'default';

  return (
    <button
      className="flex items-center gap-1 rounded-lg p-[10px] hover:bg-slate-100 dark:hover:bg-slate-800"
      onClick={toggleTheme}>
      <Icons icon="theme" type={type} color={color} />
      <span className="block text-sm">{isDarkTheme ? 'Dark' : 'Light'}</span>
    </button>
  );
};

export default ToggleTheme;
