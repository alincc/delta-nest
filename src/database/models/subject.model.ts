import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';

import { Grade } from './grade.model';

@Table
export class Subject extends Model<Subject> {
  @Column({
    type: DataType.CHAR,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  _id?: string;

  @Column(DataType.CHAR)
  email: string;

  @HasMany(() => Grade, 'subjectGrades')
  grades: Grade[];
}
