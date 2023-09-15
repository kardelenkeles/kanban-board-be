import { Module } from "@nestjs/common";
import { BoardService } from "../service/board.service";
import { BoardController } from "../controller/board.controller";
import { boardProvider } from "../providers/board.provider";
import { DatabaseModule } from "./database. module";
import { TaskService } from "../service/task.service";
import { TaskController } from "../controller/task.controller";
import { taskProvider } from "../providers/task.provider";

@Module({
  imports: [DatabaseModule],
  providers: [TaskService,
    ...taskProvider
  ],
  controllers: [TaskController]

})
export class TaskModule {
}
