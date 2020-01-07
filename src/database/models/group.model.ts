import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { Student } from "./student.model";

@Table
export class Group extends Model<Group> {
  @Column({
    type: DataType.CHAR,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  _id?: string;

  @Column(DataType.CHAR)
  name: string;

  @Column(DataType.CHAR)
  avatarUrl: string;

  @HasMany(() => Student, "students")
  students: Student[];
}
