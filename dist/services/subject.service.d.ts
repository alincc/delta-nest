/// <reference types="mongodb" />
import { ISubject } from "src/interfaces/subject.iterface";
import { Model } from "mongoose";
export declare class SubjectService {
    private readonly subjectModel;
    constructor(subjectModel: Model<ISubject>);
    findAll(): Promise<ISubject[]>;
    findAllInSchool(schoolId: string): Promise<ISubject[]>;
    findAllInProgram(programId: string): Promise<ISubject[]>;
    findById(id: string): Promise<ISubject>;
    findOne(folio: string): Promise<ISubject>;
    createOneOrMany(subject: ISubject | ISubject[]): Promise<ISubject | ISubject[]>;
    updateCreateOne(id: string, subject: ISubject): Promise<import("mongodb").FindAndModifyWriteOpResultObject<ISubject>>;
    updateMany(conditions: ISubject, newValues: ISubject): Promise<any>;
    pullMany(conditions: ISubject, pullProperties: ISubject): Promise<ISubject>;
    deleteOne(id: string): Promise<void>;
    deleteMany(conditions: ISubject): Promise<void>;
    deleteAll(): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
