export interface ITask {
  id: number;
  title: string;
  rounds: number;
}

export interface ITaskState {
  tasks: ITask[];
}
