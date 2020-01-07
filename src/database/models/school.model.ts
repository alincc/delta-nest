import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Payment } from './payment.model';
import { Group } from './group.model';
import { Subject } from './subject.model';
import { Flight } from './flight.model';

@Table
export class School extends Model<School> {
  @Column({
    type: DataType.CHAR,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  _id?: string;

  @Column(DataType.CHAR)
  name: string;

  @Column(DataType.CHAR)
  email: string;

  @Column(DataType.CHAR)
  phone: string;

  @HasMany(() => Payment, 'income')
  income: Payment[];

  @HasMany(() => Group, 'groups')
  groups: Group[];

  @HasMany(() => Subject, 'subjects')
  subjects: Subject[];
}
