import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { TaskEntity } from "./task.entity";

@Table
export class CategoryEntity extends Model{

  @Column
  categoryName: string;


  @HasMany(() => TaskEntity)
  task: TaskEntity[];

}
