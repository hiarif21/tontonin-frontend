import classNames from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Logo from '../molecules/commons/Logo';
import ToggleTheme from '../molecules/commons/ToggleTheme';
import Navigation from '../organisms/layout/Navigation';

const Layout = ({ children, title }: LayoutProps) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta
          name="theme-color"
          content="#fff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0F172A"
          media="(prefers-color-scheme: dark)"
        />
        <title>{title}</title>
      </Head>
      <header className="sticky top-0 z-10 bg-white">
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
      <footer className="pt-[105px]"></footer>
    </div>
  );
};

export default Layout;
