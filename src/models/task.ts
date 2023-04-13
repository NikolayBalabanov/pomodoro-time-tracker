export interface ITask {
  id: string;
  title: string;
  rounds: number;
}

export interface ITaskState {
  tasks: ITask[];
  totalTasksTime: number;
}
