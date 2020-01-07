import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { Student } from "./student.model";
import { Principal } from "./principal.model";

@Table
export class Flight extends Model<Flight> {
  @Column({
    type: DataType.CHAR,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  _id?: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.CHAR)
  folio: string;

  @Column(DataType.INTEGER)
  time: number;

  @Column(DataType.INTEGER)
  maxPilots: number;

  @Column(DataType.BOOLEAN)
  isApproved: boolean;

  @Column(DataType.BOOLEAN)
  isPaid: boolean;

  @HasMany(() => Student, "pilots")
  pilots: Student[];

  @HasMany(() => Principal, "principal")
  principal: Principal[];
}
