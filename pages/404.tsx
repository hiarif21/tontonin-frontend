import Image from 'next/image';
import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10 p-10 pb-40">
      <div className="relative aspect-square w-full max-w-[750px]">
        <Image src={'/icons/404.png'} layout="fill" alt="404" />
      </div>
      <button
        onClick={() => router.push('/')}
        className="rounded-lg bg-blue-500 px-8 py-4 text-white">
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
