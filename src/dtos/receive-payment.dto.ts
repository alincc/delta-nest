export class ReceivePaymentDto {
  _id?: string;
  folio: string;
  name: string;
  description?: string;
  charge: number;
  deadLine: number;
  completed: boolean;
  student: string;
  school: string;
  createdAt?: number;
  updatedAt: number;
}
