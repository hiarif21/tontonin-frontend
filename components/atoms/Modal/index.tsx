import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

const Modal = ({ children, show, onClickOutside }: ModalProps) => {
  const ref = useRef(null);

  useOnClickOutside(ref, (e) => {
    if (e.button === 0) {
      onClickOutside();
    }
  });

  if (!show) {
    return null;
  }

  document.body.style.overflow = 'hidden';

  return (
    <>
      <div className="fixed inset-0 z-10 h-screen w-screen bg-slate-900/20 backdrop-blur-sm"></div>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-20 max-h-screen overflow-y-auto bg-white dark:bg-slate-900">
        {children}
      </div>
    </>
  );
};

export default Modal;
