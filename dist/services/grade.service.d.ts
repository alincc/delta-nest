/// <reference types="mongodb" />
import { Model } from "mongoose";
import { IGrade } from "src/interfaces/grade.interface";
export declare class GradeService {
    private readonly gradeModel;
    constructor(gradeModel: Model<IGrade>);
    findAll(): Promise<IGrade[]>;
    findById(id: string): Promise<IGrade>;
    findAllInSchool(schoolId: string): Promise<IGrade[]>;
    findAllInSubject(schoolId: string): Promise<IGrade[]>;
    findAllInStudent(studentId: string): Promise<IGrade[]>;
    createOneOrMany(grade: IGrade | IGrade[]): Promise<IGrade | IGrade[]>;
    updateCreateOne(id: string, grade: IGrade): Promise<import("mongodb").FindAndModifyWriteOpResultObject<IGrade>>;
    updateMany(conditions: IGrade, newValues: IGrade): Promise<any>;
    addChild(id: string, pushProperties: {
        subjects?: any;
        students?: any;
    }): Promise<IGrade>;
    removeChild(id: string, pullProperties: {
        subjects?: any;
        students?: any;
    }): Promise<IGrade>;
    deleteOne(id: string): Promise<void>;
    deleteMany(conditions: IGrade): Promise<void>;
    deleteAll(): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
