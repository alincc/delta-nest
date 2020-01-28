/// <reference types="mongodb" />
import { IFlight } from "src/interfaces/flight.interface";
import { Model } from "mongoose";
export declare class FlightService {
    private readonly flightModel;
    constructor(flightModel: Model<IFlight>);
    findAll(): Promise<IFlight[]>;
    findById(id: string): Promise<IFlight>;
    findAllInSchool(schoolId: string): Promise<IFlight[]>;
    findAllInStudent(studentId: string): Promise<IFlight[]>;
    findOne(folio: string): Promise<IFlight>;
    createOneOrMany(flight: IFlight | IFlight[]): Promise<IFlight | IFlight[]>;
    updateCreateOne(id: string, flight: IFlight): Promise<import("mongodb").FindAndModifyWriteOpResultObject<IFlight>>;
    updateMany(conditions: IFlight, newValues: IFlight): Promise<any>;
    addChild(id: string, pushProperties: {
        enlisted?: any;
        approved?: any;
    }): Promise<IFlight>;
    removeChild(id: string, pullProperties: {
        enlisted?: any;
        approved?: any;
    }): Promise<IFlight>;
    deleteOne(id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
    deleteMany(conditions: IFlight): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
    deleteAll(): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
