import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

const Context = createContext({});

export const ThemeProvider = (props: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.dark_theme === undefined) {
      const isSystemDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      setIsDarkTheme(isSystemDark);
      localStorage.dark_theme = isSystemDark;
    } else {
      const dark_theme = JSON.parse(localStorage.dark_theme);

      setIsDarkTheme(dark_theme);
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem('dark_theme', JSON.stringify(!isDarkTheme));
  };

  const store = {
    isDarkTheme,
    toggleTheme,
  };

  return <Context.Provider value={store}>{props.children}</Context.Provider>;
};

// @ts-ignore
export const useTheme: UseTheme = () => {
  return useContext(Context);
};
