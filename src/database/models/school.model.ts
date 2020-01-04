import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { User } from './user.model';
import { Group } from './group.model';
import { Payment } from './payment.model';
import { Flight } from './flight.model';
import { Subject } from './subject.model';

@Table
export class School extends Model<School> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  schoolId: number;

  @Column(DataType.CHAR)
  name: string;

  @Column({
    type: DataType.CHAR,
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column(DataType.CHAR)
  password: string;

  @Column(DataType.CHAR)
  email: string;

  @Column(DataType.CHAR)
  phone: string;

  @HasMany(() => User, 'enrolledStudents')
  users: User[];

  @HasMany(() => Group, 'schoolGroups')
  groups: Group[];

  @HasMany(() => Payment, 'schoolIncome')
  incomingPayments: Payment[];

  @HasMany(() => Subject, 'schoolSubjects')
  Subject: Subject[];

  @HasMany(() => Flight, 'postedFlights')
  flights: Flight[];
}
