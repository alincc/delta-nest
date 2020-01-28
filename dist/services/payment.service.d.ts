/// <reference types="mongodb" />
import { Model } from "mongoose";
import { IPayment } from "src/interfaces/payment.interface";
export declare class PaymentService {
    private readonly paymentModel;
    constructor(paymentModel: Model<IPayment>);
    findAll(): Promise<IPayment[]>;
    findById(id: string): Promise<IPayment>;
    findAllInSchool(schoolId: string): Promise<IPayment[]>;
    findAllInStudent(studentId: string): Promise<IPayment[]>;
    findOne(folio: string): Promise<IPayment>;
    createOneOrMany(payment: IPayment | IPayment[]): Promise<IPayment | IPayment[]>;
    updateCreateOne(id: string, payment: IPayment): Promise<import("mongodb").FindAndModifyWriteOpResultObject<IPayment>>;
    updateMany(conditions: IPayment, newValues: IPayment): Promise<any>;
    deleteOne(id: string): Promise<void>;
    deleteMany(conditions: IPayment): Promise<void>;
    deleteAll(): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
