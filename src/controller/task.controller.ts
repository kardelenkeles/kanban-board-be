import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { TaskService } from "../service/task.service";
import { TaskDto } from "../dto/task.dto";
import { UpdateBoardDto } from "../dto/updateBoard.dto";
import { UpdateTaskDto } from "../dto/updateTask.dto";

@Controller("tasks")
export class TaskController {

  constructor(private service: TaskService) {
  }

  @Get()
  getAll() {
    return this.service.getTasks();
  }

  @Post()
  async create(@Body() taskDto: TaskDto) {
    return this.service.addTask(taskDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: number) {
    const task = await this.service.deleteTask(id);
    return task;

  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() data: Partial<UpdateTaskDto>) {
    await this.service.updateTask(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully'
    };
  }


}
