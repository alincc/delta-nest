import { Document, Types } from "mongoose";
import { IUser } from "./user.interface";
import { ISchool } from "./school.interface";
export interface IPayment extends Document {
    folio?: string;
    name?: string;
    description?: string;
    charge?: number;
    deadLine?: number;
    completed?: boolean;
    student?: IUser | Types.ObjectId;
    school?: ISchool | Types.ObjectId;
    createdAt?: number;
    updatedAt?: number;
}
