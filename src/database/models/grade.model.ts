import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table
export class Grade extends Model<Grade> {
  @Column({
    type: DataType.CHAR,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  _id?: string;

  @Column(DataType.CHAR)
  grade: string;
}
