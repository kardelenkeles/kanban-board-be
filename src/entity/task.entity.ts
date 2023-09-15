import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { BoardEntity } from "./board.entity";
import { CategoryEntity } from "./category.entity";

@Table
export class TaskEntity extends Model<TaskEntity> {

  @Column
  header: string;

  @Column
  content: string;

  @ForeignKey(() => BoardEntity)
  @Column
  taskId: number;


  @BelongsTo(() => BoardEntity)
  board: BoardEntity;


  @ForeignKey(() => CategoryEntity)
  categoryId: number;

  @BelongsTo(() => CategoryEntity)
  category: CategoryEntity;
}
