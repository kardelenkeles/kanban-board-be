import { Body, Controller, Delete, Get, HttpStatus, Module, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { BoardService } from "../service/board.service";
import { BoardDto } from "../dto/board.dto";
import { BoardEntity } from "../entity/board.entity";
import { UpdateBoardDto } from "../dto/updateBoard.dto";


@Controller("boards")
export class BoardController {
  constructor(private service: BoardService) {
  }

  @Get()
  getAll() {
    return this.service.getBoards();
  }

  @Get(":id")
  async getOne(@Param("id") id: string): Promise<BoardEntity> {
    const board = await this.service.getOneBoard(id);
    if (!board) {
      throw new NotFoundException("Board does not exist!");
    } else {
      return board;
    }
  }

  @Post()
  async create(@Body() boardDto: BoardDto) {
    return this.service.addBoard(boardDto);
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() data: Partial<UpdateBoardDto>) {
    await this.service.updateBoard(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Board updated successfully'
    };
  }

  @Delete(":id")
  async remove(@Param("id") id: number) {
    const board = await this.service.deleteBoard(id);
      return board;

  }


}
