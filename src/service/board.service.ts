import { Inject, Injectable } from '@nestjs/common';
import { BoardEntity } from '../board.entity/board.entity';
import { BoardDto } from "../dto/board.dto";


@Injectable()
export class BoardService {

  constructor(
    @Inject('BOARD_REPOSITORY')
    private boardRepository: typeof BoardEntity
  ) {
  }

  async getBoards(): Promise<BoardEntity[]>{
    return await this.boardRepository.findAll<BoardEntity>();
  }

  async addBoard(boardDto:BoardDto): Promise<BoardEntity>{
    return await this.boardRepository.create();
  }

}
