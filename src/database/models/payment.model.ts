import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Payment extends Model<Payment> {
  @Column({
    type: DataType.CHAR,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  _id?: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.CHAR)
  folio: string;

  @Column(DataType.DOUBLE)
  ammount: number;

  @Column(DataType.BOOLEAN)
  isCash: boolean;

  @Column(DataType.BOOLEAN)
  isPaid: boolean;
}
