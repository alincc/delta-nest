import { Document, Types } from "mongoose";
import { IUser } from "./user.interface";
import { ISubject } from "./subject.iterface";
import { ISchool } from "./school.interface";
export interface IGrade extends Document {
    grade?: number;
    student?: IUser | Types.ObjectId;
    subject?: ISubject | Types.ObjectId;
    school?: ISchool | Types.ObjectId;
    createdAt?: number;
    updatedAt?: number;
}
