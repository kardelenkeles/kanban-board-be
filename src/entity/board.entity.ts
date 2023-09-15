import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { TaskEntity } from "./task.entity";


@Table
export class BoardEntity extends Model {

  @Column
  name: string;

  @Column
  description: string;

  @HasMany(() => TaskEntity)
  tasks: TaskEntity[];

}
