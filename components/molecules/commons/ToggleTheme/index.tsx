import { useState } from 'react';
import Icons from '../../../atoms/Icons';

const ToggleTheme = () => {
  const [active, setActive] = useState(false);
  return (
    <button onClick={() => setActive(!active)}>
      {active ? (
        <Icons icon="theme" type="solid" />
      ) : (
        <Icons icon="theme" type="outline" />
      )}
    </button>
  );
};

export default ToggleTheme;
