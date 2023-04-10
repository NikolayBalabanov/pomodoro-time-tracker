import React, { useEffect, useRef } from 'react';
import ButtonClose from '../ButtonClose';
import ButtonConfirm from '../ButtonConfirm';
import ButtonUnderscored from '../ButtonUnderscored';

interface IConfirmProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function Confirm({ onClose, onConfirm }: IConfirmProps) {
  const modal = useRef<HTMLDivElement | null>(null);
  const modalContent = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      modal.current?.classList.remove('opacity-0');
      modalContent.current?.classList.remove('-translate-y-10');
    });
  }, []);

  const close = (fn: () => void) => {
    modal.current?.classList.add('opacity-0');
    modalContent.current?.classList.add('-translate-y-10');
    setTimeout(() => {
      fn();
    }, 300);
  };

  return (
    <div
      ref={modal}
      onClick={() => close(onClose)}
      className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-30 bg-gray-500 bg-opacity-80 opacity-0 transition-opacity duration-300"
    >
      <div
        ref={modalContent}
        className="flex flex-col relative shadow-md bg-white px-[84px] py-[25px] -translate-y-10 duration-300 transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col-reverse text-center mb-[20px] justify-between items-center">
          <h2 className="text-2xl font-medium leading-[17px] text-gray-900">Удалить задачу?</h2>
        </div>
        <div className="flex flex-col">
          <ButtonConfirm text="Удалить" callback={() => close(onConfirm)} />
          <ButtonUnderscored text="Отмена" callback={() => close(onClose)} />
        </div>
        <ButtonClose callback={() => close(onClose)} />
      </div>
    </div>
  );
}
