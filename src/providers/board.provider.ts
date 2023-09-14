import { BoardEntity } from '../board.entity/board.entity';

export const boardProvider = [
  {
    provide: 'BOARD_REPOSITORY',
    useValue: BoardEntity,
  },
];
