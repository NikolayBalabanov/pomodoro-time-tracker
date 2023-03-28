import React from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { addRound, editTask, removeTask, subtractRound } from '../../../redux/Slices/rootSlice';
import Icon, { EIcons } from '../Icon';

interface IDropDownProps {
  id: number;
  count: number;
  onClose: () => void;
}

export default function DropDown({ count, id, onClose }: IDropDownProps) {
  const dispatch = useAppDispatch();
  const handleIncrement = () => dispatch(addRound(id));
  const handleDecrement = () => dispatch(subtractRound(id));
  const handleEdit = () => dispatch(editTask(id)); // TODO
  const handleRemove = () => {
    onClose();
    dispatch(removeTask(id));
  };

  return (
    <ul className="dropdown absolute w-[165px] h-[153px] py-[5px] list-none top-[44px] -right-[69px] border border-colorGrey bg-white">
      <li>
        <button
          className="w-full py-[9px] px-[14px] flex items-center hover:bg-colorBg"
          onClick={() => handleIncrement()}
        >
          <Icon name={EIcons.increment} styles="mr-2" />
          <span className="text-base leading-[17px] text-colorTextGrey">Увеличить</span>
        </button>
      </li>
      <li>
        <button
          className="w-full py-[9px] px-[14px] flex items-center hover:bg-colorBg"
          disabled={count <= 1}
          onClick={() => handleDecrement()}
        >
          <Icon
            name={EIcons.decrement}
            styles={`mr-2 ${count <= 1 ? 'text-colorGrey' : 'text-colorGreen'}`}
          />
          <span className="text-base leading-[17px] text-colorTextGrey">Уменьшить</span>
        </button>
      </li>
      <li>
        <button
          className="w-full py-[9px] px-[14px] flex items-center hover:bg-colorBg"
          onClick={() => handleEdit()}
        >
          <Icon name={EIcons.edit} styles="mr-2" />
          <span className="text-base leading-[17px] text-colorTextGrey">Редактировать</span>
        </button>
      </li>
      <li>
        <button
          className="w-full py-[9px] px-[14px] flex items-center hover:bg-colorBg"
          onClick={() => handleRemove()}
        >
          <Icon name={EIcons.remove} styles="mr-2" />
          <span className="text-base leading-[17px] text-colorTextGrey">Удалить</span>
        </button>
      </li>
    </ul>
  );
}
