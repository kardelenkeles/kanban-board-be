import { PartialType } from "@nestjs/swagger";
import { BoardDto } from "./board.dto";
import { TaskDto } from "./task.dto";

export class UpdateTaskDto extends PartialType(TaskDto){}
