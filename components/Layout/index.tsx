import classNames from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTheme } from '../../context/theme';
import Logo from '../molecules/commons/Logo';
import ToggleTheme from '../molecules/commons/ToggleTheme';
import Navigation from '../organisms/layout/Navigation';

const Layout = ({ children, title }: LayoutProps) => {
  const router = useRouter();

  const { isDarkTheme } = useTheme();

  return (
    <div>
      <Head>
        <meta name="theme-color" content={isDarkTheme ? '#0F172A' : '#FFF'} />
        <title>{title}</title>
      </Head>
      <header className="sticky top-0 z-10 bg-white dark:bg-slate-900">
        <div
          className={classNames(
            'max-w-7xl lg:mx-auto lg:flex lg:items-center lg:justify-between lg:p-5',
            {
              'flex items-center justify-between p-5': router.pathname === '/',
            }
          )}>
          <div
            className={classNames('', {
              flex: router.pathname === '/',
              'hidden lg:flex': router.pathname !== '/',
            })}>
            <Logo />
          </div>
          <div className="flex items-center">
            <Navigation />
            <div
              className={classNames('', {
                flex: router.pathname === '/',
                'hidden lg:flex': router.pathname !== '/',
              })}>
              <ToggleTheme />
            </div>
          </div>
        </div>
      </header>
      <main className="mb-[105px] max-w-7xl lg:mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
