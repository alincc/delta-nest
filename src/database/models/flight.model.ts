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
export class Flight extends Model<Flight> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  flightId: number;

  @Column(DataType.CHAR)
  name: string;

  @Column(DataType.INTEGER)
  time: number;

  @BelongsTo(() => User, 'requestedFlights')
  requestedBy: User[];

  @BelongsTo(() => User, 'approvedFlights')
  approvedFor: User[];

  @BelongsTo(() => School, 'postedFlights')
  school: School;
}
