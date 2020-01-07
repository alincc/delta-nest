export class ReceivePaymentDto {
  _id?: string;
  description: string;
  folio: string;
  ammount: number;
  isCash: boolean;
  isPaid: boolean;
}
