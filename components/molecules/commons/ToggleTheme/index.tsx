import { useTheme } from '../../../../context/theme';
import Icons from '../../../atoms/Icons';

const ToggleTheme = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const type = isDarkTheme ? 'solid' : 'outline';
  const color = isDarkTheme ? 'light' : 'default';

  return (
    <button onClick={toggleTheme}>
      <Icons icon="theme" type={type} color={color} />
    </button>
  );
};

export default ToggleTheme;
