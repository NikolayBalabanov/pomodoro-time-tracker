import dayjs from 'dayjs';

type TIsDaySame = (first: string, second: string) => boolean;

const isDaySame: TIsDaySame = (first, second) => dayjs(first).isSame(dayjs(second), 'day');

export default isDaySame;
