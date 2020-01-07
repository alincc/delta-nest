export class CreatePaymentDto {
  paymentId?: number;
  description: string;
  folio: string;
  ammount: number;
  isCash: boolean;
  paid: boolean;
  user: number;
  school: number;
}
