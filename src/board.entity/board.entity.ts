import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table
export class BoardEntity extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  description: string;


}
