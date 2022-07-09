import { useOnClickOutside } from 'usehooks-ts';

const Modal = ({ children, show, onClickOutside, _ref }: ModalProps) => {
  useOnClickOutside(_ref, (e) => {
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
      <div className="fixed inset-0 z-20 max-h-screen overflow-y-auto">
        {children}
      </div>
    </>
  );
};

export default Modal;
