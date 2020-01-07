import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { School } from "./school.model";

@Table
export class Principal extends Model<Principal> {
  @Column({
    type: DataType.CHAR,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  _id?: string;

  @Column({
    type: DataType.CHAR,
    allowNull: false,
    unique: true
  })
  username: string;

  @Column(DataType.CHAR)
  password: string;

  @Column(DataType.CHAR)
  name: string;

  @Column(DataType.CHAR)
  email: string;

  @Column(DataType.CHAR)
  phone: string;

  @Column(DataType.CHAR)
  avatarUrl: string;

  @HasMany(() => School, "schools")
  schools: School[];
}
