const Loading = ({ _ref }: LoadingProps) => {
  return (
    <div
      ref={_ref}
      className="flex h-full w-full items-center justify-center rounded-lg bg-white pb-5 dark:bg-slate-900 md:max-w-screen-md">
      <span className="animate-pulse">🧐 Wait...</span>
    </div>
  );
};

export default Loading;
