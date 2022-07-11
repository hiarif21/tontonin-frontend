import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import Loading from '../../../atoms/Loading';

const InfiniteScrolling = ({
  loadMore,
  dataLength,
  totalData,
  markFinished,
}: InfiniteScrollingProps) => {
  const ref = useRef(null);

  const [prevDataLength, setPrevDataLength] = useState(1);
  const [prevTotalData, setPrevTotalData] = useState(1);

  const entry = useIntersectionObserver(ref, {});

  useEffect(() => {
    if (totalData === undefined) {
      setPrevTotalData(1);
    }
  }, [totalData]);

  useEffect(() => {
    const check =
      (entry?.isIntersecting &&
        dataLength !== 0 &&
        dataLength !== totalData &&
        dataLength !== prevDataLength) ||
      prevTotalData !== totalData;

    if (check) {
      loadMore();
      setPrevDataLength(dataLength);
      setPrevTotalData(totalData);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataLength, totalData, entry?.isIntersecting]);

  if (!markFinished) {
    return null;
  }

  const checkFinished = dataLength !== 0 && dataLength === totalData;

  return (
    <div ref={ref}>
      {markFinished ? (
        <>
          {checkFinished ? (
            <span className="atext-xs">
              🙄 It&apos;s the end of the road...
            </span>
          ) : (
            <Loading />
          )}
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default InfiniteScrolling;
