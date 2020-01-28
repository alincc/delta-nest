import { Document, Types } from "mongoose";
import { IGrade } from "./grade.interface";
import { ISchool } from "./school.interface";
import { IProgram } from "./program.interface";
export interface ISubject extends Document {
    folio?: string;
    name?: string;
    description?: string;
    avatarUrl?: string;
    email?: string;
    grades?: IGrade[] | Types.ObjectId[];
    school?: ISchool | Types.ObjectId;
    programs?: IProgram[] | Types.ObjectId[];
    createdAt?: number;
    updatedAt?: number;
}
