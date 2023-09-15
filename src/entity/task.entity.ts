import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { BoardEntity } from "./board.entity";
import { CategoryEntity } from "./category.entity";

@Table
export class TaskEntity extends Model<TaskEntity> {

  @Column
  header: string;

  @Column
  content: string;

  // @ForeignKey(() => BoardEntity)
  // @BelongsTo(() => BoardEntity)
  // board: BoardEntity;
  //
  //
  // @ForeignKey(() => CategoryEntity)
  // @BelongsTo(() => CategoryEntity)
  // category: CategoryEntity;
}
