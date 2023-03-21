import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ButtonColored from './UI/ButtonColored';

type FormValues = {
  inputText: string;
};

export default function AddTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log('Форма отправлена', data);
  return (
    <form className="mb-[25px] flex flex-col items-start" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="mb-[25px] w-[370px] py-[19px] px-[15px] bg-colorBg border-transparent border-1 text-base placeholder:text-colorTextGrey"
        type="text"
        placeholder="Название задачи"
        {...register('inputText', {
          required: 'true',
          minLength: {
            value: 4,
            message: 'Введите больше трех символов',
          },
        })}
        aria-invalid={errors.inputText ? 'true' : undefined}
      />
      {errors.inputText && (
        <span className="text-colorRed text-xs py-2 -mt-5 block">Введите больше трех символов</span>
      )}
      <ButtonColored color="green" text="Добавить" type="submit" />
    </form>
  );
}
