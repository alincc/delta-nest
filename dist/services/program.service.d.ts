/// <reference types="mongodb" />
import { Model } from "mongoose";
import { IProgram } from "src/interfaces/program.interface";
export declare class ProgramService {
    private readonly programModel;
    constructor(programModel: Model<IProgram>);
    findAll(): Promise<IProgram[]>;
    findAllInSchool(schoolId: string): Promise<IProgram[]>;
    findById(id: string): Promise<IProgram>;
    findOne(folio: string): Promise<IProgram>;
    createOneOrMany(program: IProgram | IProgram[]): Promise<IProgram | IProgram[]>;
    updateCreateOne(id: string, program: IProgram): Promise<import("mongodb").FindAndModifyWriteOpResultObject<IProgram>>;
    updateMany(conditions: IProgram, newValues: IProgram): Promise<any>;
    addChild(id: string, pushProperties: {
        subjects?: any;
    }): Promise<IProgram>;
    removeChild(id: string, pullProperties: {
        subjects?: any;
    }): Promise<IProgram>;
    deleteOne(id: string): Promise<void>;
    deleteMany(conditions: IProgram): Promise<void>;
    deleteAll(): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
