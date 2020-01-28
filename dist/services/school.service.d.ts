/// <reference types="mongodb" />
import { Model } from "mongoose";
import { ISchool } from "src/interfaces/school.interface";
export declare class SchoolService {
    private readonly schoolModel;
    constructor(schoolModel: Model<ISchool>);
    findAll(): Promise<ISchool[]>;
    findAllInPrincipal(principalId: any): Promise<ISchool[]>;
    findById(id: string): Promise<ISchool>;
    findOne(name: string): Promise<ISchool>;
    createOneOrMany(school: ISchool | ISchool[]): Promise<ISchool | ISchool[]>;
    updateCreateOne(id: string, school: ISchool | {
        $push: any;
    }): Promise<import("mongodb").FindAndModifyWriteOpResultObject<ISchool>>;
    updateMany(conditions: ISchool, newValues: ISchool): Promise<any>;
    deleteOne(id: string): Promise<void>;
    deleteAll(): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
