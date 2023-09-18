import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BoardModule } from "./module/board.module";
import { ConfigModule } from "@nestjs/config";
import databaseConfig from "./config/database.config";
import { BoardService } from "./service/board.service";
import { BoardController } from "./controller/board.controller";
import { TaskModule } from "./module/task.module";
import { LabelModule } from "./module/label.module";



@Module({
  imports: [BoardModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig]
    }),
    TaskModule,
    LabelModule

  ],
  controllers: [AppController],

  providers: [AppService]
})
export class AppModule {
}
