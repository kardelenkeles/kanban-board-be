import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table
export class BoardEntity extends Model {


  @Column
  name: string;

  @Column
  description: string;


}
