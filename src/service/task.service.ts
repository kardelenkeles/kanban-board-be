import { Inject, Injectable } from "@nestjs/common";
import { TaskEntity } from "../entity/task.entity";
import { TaskDto } from "../dto/task.dto";
import { UpdateBoardDto } from "../dto/updateBoard.dto";
import { UpdateTaskDto } from "../dto/updateTask.dto";

@Injectable()
export class TaskService {

  constructor(
    @Inject("TASK_REPOSITORY")
    private taskRepository: typeof TaskEntity
  ) {
  }

  async getTasks(): Promise<TaskEntity[]> {
    return await this.taskRepository.findAll<TaskEntity>();
  }

  async addTask(taskDto: TaskDto): Promise<TaskEntity> {
    return this.taskRepository.create({
      header: taskDto.header,
      content: taskDto.content
    });
  }

  async deleteTask(id: number): Promise<any> {
    await this.taskRepository.destroy({ where: { id } });
  }

  async updateTask(id: number, data: Partial<UpdateTaskDto>) {
    const existingTask = await this.taskRepository.findOne({ where: { id } });
    if (!existingTask) {
      throw new Error("Board not found");
    }
    return await this.taskRepository.update(data, { where: { id } });
  }

}
