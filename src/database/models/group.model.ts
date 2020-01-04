import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { User } from './user.model';
import { School } from './school.model';

@Table
export class Group extends Model<Group> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  groupId: number;

  @Column(DataType.CHAR)
  name: string;

  @HasMany(() => User, 'groupMembers')
  users: User[];

  @BelongsTo(() => School, 'schoolGroups')
  school: School;
}
