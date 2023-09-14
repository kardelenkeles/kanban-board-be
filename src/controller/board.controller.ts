import { Body, Controller, Get, Module, Param, Post } from "@nestjs/common";
import { BoardService } from "../service/board.service";
import { BoardDto } from "../dto/board.dto";


@Controller("board")
export class BoardController {
  constructor(private service: BoardService) {
  }

  @Get()
  getAll() {
    return this.service.getBoards();
  }

  @Post()
  async create(@Body() boardDto: BoardDto) {
    return this.service.addBoard(boardDto);
  }


}
