import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

type TIsValidDay = (targetDay: string, firstDay: string, lastday: string) => boolean;

const isValidDay: TIsValidDay = (targetDay, firstDay, lastday) => {
  // is target day between the range [firstDay, lastday]
  dayjs.extend(isBetween);
  return dayjs(targetDay).isBetween(dayjs(firstDay), dayjs(lastday), 'day', '[]');
};

export default isValidDay;
