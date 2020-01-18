import { Document, Types } from "mongoose";
import { ISchool } from "./school.interface";
import { IUser } from "./user.interface";

export interface IGroup extends Document {
  avatarUrl?: string;
  name?: string;
  description?: string;
  members?: IUser[] | Types.ObjectId[];
  school?: ISchool | Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
