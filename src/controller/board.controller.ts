import { Body, Controller, Get, Module, Param, Post } from "@nestjs/common";
import { BoardService } from "../service/board.service";
import { BoardEntity } from "../board.entity/board.entity";


@Controller("board")
export class BoardController {
  constructor(private service: BoardService) {
  }

  @Get()
  getAll() {
    return this.service.getBoards();
  }

  @Post('kanban')
  create(@Body() board: BoardEntity) {
    return this.service.addBoard(board);
  }


}
