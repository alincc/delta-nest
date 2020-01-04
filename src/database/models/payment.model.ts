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
export class Payment extends Model<Payment> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  paymentId: number;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.CHAR)
  folio: string;

  @Column(DataType.DOUBLE)
  ammount: number;

  @Column(DataType.BOOLEAN)
  isCash: boolean;

  @Column(DataType.BOOLEAN)
  paid: boolean;

  @BelongsTo(() => User, 'userPayments')
  user: User;

  @BelongsTo(() => School, 'schoolIncome')
  school: School;
}
