/// <reference types="mongodb" />
import { Model } from "mongoose";
import { IUser } from "src/interfaces/user.interface";
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    findAll(): Promise<IUser[]>;
    findAllInSchool(options: {
        school: string;
        graduated?: boolean;
    }): Promise<IUser[]>;
    findAllInGroup(groupId: string): Promise<IUser[]>;
    findById(id: string): Promise<IUser>;
    findOne(username: string): Promise<IUser>;
    findByIdAndRole(id: string, role: string): Promise<IUser>;
    createOneOrMany(user: IUser | IUser[]): Promise<IUser | IUser[]>;
    updateCreateOne(id: string, user: IUser): Promise<import("mongodb").FindAndModifyWriteOpResultObject<IUser>>;
    updateMany(conditions: IUser, newValues: IUser): Promise<any>;
    pullMany(conditions: IUser, pullProperties: IUser): Promise<IUser>;
    deleteOne(id: string): Promise<void>;
    deleteMany(conditions: IUser): Promise<void>;
    deleteAll(): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
