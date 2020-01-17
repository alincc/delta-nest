import { Document, Types } from "mongoose";
import { IPayment } from "./payment.interface";
import { IGroup } from "./group.interface";
import { ISubject } from "./subject.iterface";
import { IFlight } from "./flight.interface";
import { IGrade } from "./grade.interface";
import { IUser } from "./user.interface";
import { IProgram } from "./program.interface";

export interface ISchool extends Document {
  name?: string;
  avatarUrl?: string;
  email?: string;
  phone?: string;
  flights?: IFlight[] | Types.ObjectId[];
  grades?: IGrade[] | Types.ObjectId[];
  groups?: IGroup[] | Types.ObjectId[];
  payments?: IPayment[] | Types.ObjectId[];
  principals?: IUser[] | Types.ObjectId[];
  programs?: IProgram[] | Types.ObjectId[];
  students?: IUser[] | Types.ObjectId[];
  subjects?: ISubject[] | Types.ObjectId[];
  createdAt?: number;
  updatedAt?: number;
}
