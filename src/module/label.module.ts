import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database. module";
import { BoardService } from "../service/board.service";
import { boardProvider } from "../providers/board.provider";
import { BoardController } from "../controller/board.controller";
import { LabelService } from "../service/label.service";
import { labelProvider } from "../providers/label.provider";
import { LabelController } from "../controller/label.controller";

@Module({
  imports: [DatabaseModule],
  providers: [LabelService,
    ...labelProvider
  ],
  controllers: [LabelController]

})
export class LabelModule {
}
