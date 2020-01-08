export interface IPayment {
  _id?: string;
  description: string;
  folio: string;
  ammount: number;
  isCash: boolean;
  isPaid: boolean;
}
