import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { addTask } from '../redux/Slices/tasksSlice';
import ButtonColored from './UI/ButtonColored';

export default function AddTask() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.trim().length <= 3) {
      setError(true);
      return;
    }
    setError(false);
    dispatch(addTask(value));
    setValue('');
  };
  return (
    <form className="mb-[25px] flex flex-col items-start" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="mb-[25px] md:mr-0 mr-3 sm:w-[370px] w-full md:py-[19px] md:px-[15px] bg-colorBg border-transparent border-1 text-base placeholder:text-colorTextGrey dark-mode dark:bg-colorTextGrey dark:placeholder:text-colorBg dark:text-white"
        type="text"
        placeholder="Название задачи"
        value={value}
        onChange={(e) => handleChange(e)}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && (
        <span className="text-colorRed text-xs py-2 -mt-5 block">Введите больше трех символов</span>
      )}
      <ButtonColored color="green" text="Добавить" type="submit" callback={() => {}} />
    </form>
  );
}
