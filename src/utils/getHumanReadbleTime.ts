type TGetHumanReadbleStr = (value: number, typesArr: string[]) => string;

const typeTimes = {
  seconds: ['секунды', 'секунд', 'секунд'],
  minutes: ['минуты', 'минут', 'минут'],
  hours: ['часа', 'часов', 'часов'],
  days: ['деня', 'дней', 'дней'],
  years: ['года', 'лет', 'лет'],
};

export const getHumanReadbleStr: TGetHumanReadbleStr = (value, typesArr) => {
  if (value % 10 === 1 && value % 100 !== 11) {
    return typesArr[0];
  }
  if (value % 10 in [2, 3, 4] && (value % 100 >= 22 || (value % 100 < 5 && value % 100 > 0))) {
    return typesArr[1];
  }
  return typesArr[2];
};

export const getHumanReadbleTime = (seconds: number, isShort = false) => {
  const s = seconds % 60;
  seconds = (seconds - s) / 60;
  const m = seconds % 60;
  seconds = (seconds - m) / 60;
  const h = seconds % 24;
  seconds = (seconds - h) / 24;
  const d = seconds % 365;
  seconds = (seconds - d) / 365;
  const y = seconds;
  const result = [];
  const optionalPostfixY = isShort ? 'г' : ' ' + getHumanReadbleStr(y, typeTimes.years);
  const optionalPostfixD = isShort ? 'д' : ' ' + getHumanReadbleStr(h, typeTimes.hours);
  const optionalPostfixH = isShort ? 'ч' : ' ' + getHumanReadbleStr(d, typeTimes.minutes);
  const optionalPostfixM = isShort ? 'м' : ' ' + getHumanReadbleStr(m, typeTimes.minutes);
  const optionalPostfixS = isShort ? 'с' : ' ' + getHumanReadbleStr(s, typeTimes.seconds);
  if (y) result.push(y + optionalPostfixY);
  if (d) result.push(d + optionalPostfixD);
  if (h) result.push(h + optionalPostfixH);
  if (m) result.push(m + optionalPostfixM);
  if (s) result.push(s + optionalPostfixS);
  return result.join(' ');
};
