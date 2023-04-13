import { ITask } from 'models/task';

export const getTotalTasksTime = (tasksArr: ITask[], session: number) => {
  return tasksArr.reduce((acc, cur) => acc + cur.rounds * session * 60, 0);
};
