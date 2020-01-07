import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Payment } from './payment.model';
import { Grade } from './grade.model';

@Table
export class Student extends Model<Student> {
  @Column({
    type: DataType.CHAR,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  _id?: string;

  @Column({
    type: DataType.CHAR,
    allowNull: false,
    unique: true,
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

  @Column(DataType.TEXT)
  avatarUrl: string;

  @HasMany(() => Payment, 'payments')
  payments: Payment[];

  @HasMany(() => Grade, 'grades')
  grades: Grade[];
}
