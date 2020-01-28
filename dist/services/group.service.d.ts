/// <reference types="mongodb" />
import { Model } from "mongoose";
import { IGroup } from "src/interfaces/group.interface";
export declare class GroupService {
    private readonly groupModel;
    constructor(groupModel: Model<IGroup>);
    findAll(): Promise<IGroup[]>;
    findById(id: string): Promise<IGroup>;
    findAllInSchool(schoolId: string): Promise<IGroup[]>;
    findOne(name: string): Promise<IGroup>;
    createOneOrMany(group: IGroup | IGroup[]): Promise<IGroup | IGroup[]>;
    updateCreateOne(id: string, group: IGroup): Promise<import("mongodb").FindAndModifyWriteOpResultObject<IGroup>>;
    updateMany(conditions: IGroup, newValues: IGroup): Promise<any>;
    addChild(id: string, pushProperties: {
        members?: any;
    }): Promise<IGroup>;
    removeChild(id: string, pullProperties: {
        members?: any;
    }): Promise<IGroup>;
    deleteOne(id: string): Promise<void>;
    deleteMany(conditions: IGroup): Promise<void>;
    deleteAll(): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
