export const getDisplayedTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = formatTime(minutes, seconds);
  return formattedTime;
};

const formatTime = (minutes: number, seconds: number) => {
  return `${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;
};
