import { IPayment } from "./payment.interface";
import { IGroup } from "./group.interface";
import { ISubject } from "./subject.iterface";

export interface ISchool {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  income?: IPayment[] | string[];
  groups?: IGroup[] | string[];
  subjects?: ISubject[] | string[];
}
