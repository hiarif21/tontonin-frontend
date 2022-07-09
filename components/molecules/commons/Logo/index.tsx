import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'} passHref>
      <a className="relative aspect-[3/1] h-9 sm:h-10">
        <Image src={'/tontonin.svg'} layout={'fill'} alt={'Logo Tontonin'} />
      </a>
    </Link>
  );
};

export default Logo;
