import { Module } from "@nestjs/common";
import { BoardService } from "../service/board.service";
import { BoardController } from "../controller/board.controller";
import { boardProvider } from "../providers/board.provider";
import { DatabaseModule } from "./database. module";

@Module({
  imports: [DatabaseModule],
  providers: [BoardService,
    ...boardProvider
  ],
  controllers: [BoardController]

})
export class BoardModule {
}
