import { Inject, Injectable } from '@nestjs/common';
import { BoardEntity } from '../board.entity/board.entity';


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

  async addBoard(): Promise<BoardEntity>{
    return await this.boardRepository.create();
  }

}
