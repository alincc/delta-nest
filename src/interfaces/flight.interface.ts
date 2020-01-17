import { Document, Types } from "mongoose";
import { IUser } from "./user.interface";
import { ISchool } from "./school.interface";

export interface IFlight extends Document {
  folio?: string;
  name?: string;
  description?: string;
  startDate?: number;
  duration?: number;
  cost?: number;
  enlisted?: IUser[] | Types.ObjectId[];
  approved?: IUser[] | Types.ObjectId[];
  school?: ISchool | Types.ObjectId;
  authorizedBy?: IUser | Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
