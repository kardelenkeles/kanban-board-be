import { Inject, Injectable, Param } from "@nestjs/common";
import { BoardEntity } from "../board.entity/board.entity";
import { BoardDto } from "../dto/board.dto";
import { UpdateBoardDto } from "../dto/updateBoard.dto";
import any = jasmine.any;


@Injectable()
export class BoardService {

  constructor(
    @Inject("BOARD_REPOSITORY")
    private boardRepository: typeof BoardEntity
  ) {
  }

  async getBoards(): Promise<BoardEntity[]> {
    return await this.boardRepository.findAll<BoardEntity>();
  }

  async getOneBoard(id: string): Promise<BoardEntity> {
    return this.boardRepository.findOne({ where: { id } });
  }


  async addBoard(boardDto: BoardDto): Promise<BoardEntity> {
    return this.boardRepository.create({ ...boardDto });

  }

  async deleteBoard(id: number): Promise<any> {
    await this.boardRepository.destroy({ where: { id } });
  }

  async updateBoard(id: number, data: Partial<UpdateBoardDto>) {
    const existingBoard = await this.boardRepository.findOne({ where: { id } });
    if (!existingBoard) {
      throw new Error("Board not found");
    }
    return await this.boardRepository.update(data, { where: { id } });
  }

}
