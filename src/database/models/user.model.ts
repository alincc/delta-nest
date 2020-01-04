import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';

import { School } from './school.model';
import { Subject } from './subject.model';
import { Group } from './group.model';
import { Payment } from './payment.model';
import { Flight } from './flight.model';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  userId: number;

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
  profileUrl: string;

  @Column(DataType.CHAR)
  role: string;

  @BelongsTo(() => School, 'enrolledStudents')
  students: School;

  @BelongsTo(() => Group, 'groupMembers')
  groups: Group;

  @HasMany(() => Flight, 'approvedFlights')
  approvedForFlights: Flight[];

  @HasMany(() => Flight, 'requestedFlights')
  requestedForFlights: Flight[];

  @HasMany(() => Subject, 'userStudyProgram')
  subjects: Subject[];

  @HasMany(() => Payment, 'userPayments')
  payments: Payment[];
}
