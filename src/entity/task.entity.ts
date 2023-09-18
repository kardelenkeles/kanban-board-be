import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { BoardEntity } from "./board.entity";

@Table
export class TaskEntity extends Model<TaskEntity> {

  @Column
  header: string;

  @Column
  content: string;

  @Column
  label: string;

  @Column
  status: string;


  @ForeignKey(() => BoardEntity)
  @Column
  boardId: number;

  @BelongsTo(() => BoardEntity)
  board: BoardEntity;

  // @ForeignKey(() => LabelEntity)
  // categoryId: number;
  //
  // @BelongsTo(() => LabelEntity)
  // category: LabelEntity;

}
