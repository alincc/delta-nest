import { IStudent } from "./student.iterface";
import { IPrincipal } from "./principal.interface";

export interface IFlight {
  _id?: string;
  description: string;
  folio: string;
  time: number;
  maxPilots: number;
  isApproved: boolean;
  isPaid: boolean;
  pilots?: IStudent[] | string[];
  principal?: IPrincipal[] | string[];
}
