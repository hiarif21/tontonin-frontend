import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Icons from '../../../atoms/Icons';
import Modal from '../../../atoms/Modal';

const Notice = () => {
  const router = useRouter();
  const ref = useRef(null);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    router.push(router.pathname, undefined, { shallow: true });
    setShow(false);
  };

  useEffect(() => {
    if (!localStorage.notice) {
      setShow(true);
      localStorage.notice = true;
    }
  }, []);

  return (
    <Modal _ref={ref} onClickOutside={handleClose} show={show}>
      <div className="flex h-full w-full items-center justify-center bg-slate-900/20 p-5 text-white backdrop-blur-sm dark:bg-slate-500/20 md:p-5">
        <div
          ref={ref}
          className="max-w-screen-md rounded-lg bg-red-500 p-5 pb-5 text-center">
          <div className="flex justify-center p-5">
            <button
              onClick={handleClose}
              className="flex items-center justify-center gap-2 rounded-lg bg-slate-50/20 px-5 py-2">
              <Icons icon="close" type="solid" color="light" />{' '}
              <span>Close</span>
            </button>
          </div>
          <div className="flex flex-col gap-2 p-5">
            <span>This is just for learning!</span>
            <span>
              I don&apos;t guarantee that the movie data presented on this
              website is correct.
            </span>
            <span>
              All movie thumbnails are from{' '}
              <a href="Netflix.com">Netflix.com</a>, so I just added the watch
              options only for <a href="Netflix.com">Netflix.com</a> (although
              it is actually available on other platforms).
            </span>
            <span>
              Icons are from <a href="Heroicons.com">Heroicons.com</a>, except
              for the genres page (from <a href="Flaticon.com">Flaticon.com</a>)
              and the error page (from <a href="Storyset.com">Storyset.com</a>)
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Notice;
