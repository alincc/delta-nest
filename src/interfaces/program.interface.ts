import { Document, Types } from "mongoose";
import { ISchool } from "./school.interface";
import { ISubject } from "./subject.iterface";

export interface IProgram extends Document {
  folio?: string;
  name?: string;
  description?: string;
  avatarUrl?: string;
  email?: string;
  subjects?: ISubject[] | Types.ObjectId[];
  school?: ISchool | Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
