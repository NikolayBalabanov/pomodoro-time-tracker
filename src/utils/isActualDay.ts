import dayjs from 'dayjs';

type TIsActualDay = (targetDay: string, lastday: string) => boolean;

const isActualDay: TIsActualDay = (targetDay, lastday) => {
  return dayjs(targetDay).isBefore(dayjs(lastday), 'day');
};

export default isActualDay;
