import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'} passHref>
      <a className="flex">
        <Image
          src={'/tontonin.svg'}
          height={35}
          width={105}
          alt={'Logo Tontonin'}
        />
      </a>
    </Link>
  );
};

export default Logo;
