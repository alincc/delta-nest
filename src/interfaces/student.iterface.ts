import { IPayment } from "./payment.interface";
import { IGrade } from "./grade.interface";

export interface IStudent {
  _id?: string;
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  payments?: IPayment[] | string[];
  grades?: IGrade[] | string[];
}
