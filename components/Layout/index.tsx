import classNames from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { LayoutProps } from '../../types/layout';
import Logo from '../molecules/commons/Logo';
import ToggleTheme from '../molecules/commons/ToggleTheme';
import Navigation from '../organisms/layout/Navigation';

const Layout = ({ children, title }: LayoutProps) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <div
          className={classNames('', {
            'flex items-center justify-between border-b border-slate-100 p-5':
              router.pathname === '/',
          })}>
          {router.pathname === '/' && <Logo />}
          <div className="flex items-center">
            <Navigation />
            {router.pathname === '/' && <ToggleTheme />}
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
