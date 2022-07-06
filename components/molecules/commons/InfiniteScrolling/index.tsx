import { useRef } from 'react';
import useInfinite from '../../../../hooks/useInfinite';

const InfiniteScrolling = ({
  loadMore,
  finished,
  markFinished,
}: InfiniteScrollingProps) => {
  const ref = useRef(null);

  useInfinite(ref, loadMore);

  if (finished) {
    return markFinished ? (
      <span ref={ref} className="atext-xs">
        🙄 No More!
      </span>
    ) : null;
  }

  return (
    <span ref={ref} className="animate-pulse text-xs">
      🧐 Wait...
    </span>
  );
};

export default InfiniteScrolling;
