import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './user.model';
import { School } from './school.model';

@Table
export class Subject extends Model<Subject> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  subjectId: number;

  @Column(DataType.CHAR)
  name: string;

  @Column(DataType.CHAR)
  email: string;

  @Column(DataType.CHAR)
  grade: string;

  @BelongsTo(() => User, 'userStudyProgram')
  user: User;

  @BelongsTo(() => School, 'schoolSubjects')
  school: School;
}
