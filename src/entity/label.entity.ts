import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { TaskEntity } from "./task.entity";

@Table
export class LabelEntity extends Model{

  @Column
  labelName: string;

  // @HasMany(() => TaskEntity)
  // tasks: TaskEntity[];

}
