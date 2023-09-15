
import { TaskEntity } from "../entity/task.entity";

export const taskProvider = [
  {
    provide: 'TASK_REPOSITORY',
    useValue: TaskEntity,
  },
];
