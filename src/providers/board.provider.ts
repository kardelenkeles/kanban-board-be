import { BoardEntity } from '../entity/board.entity';

export const boardProvider = [
  {
    provide: 'BOARD_REPOSITORY',
    useValue: BoardEntity,
  },
];
