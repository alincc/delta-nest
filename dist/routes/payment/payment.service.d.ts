import { IResponse } from "src/interfaces/response.interface";
import { PaymentService } from "src/services/payment.service";
import { IPayment } from "src/interfaces/payment.interface";
export declare class PaymentControllerService {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    findAll(): Promise<IResponse>;
    findAllInSchool(schoolId: string): Promise<IResponse>;
    findAllInStudent(studentId: string): Promise<IResponse>;
    findById(id: string): Promise<IResponse>;
    createOne(payment: IPayment): Promise<IResponse>;
    updateOne(id: string, payment: IPayment): Promise<IResponse>;
    deleteOne(id: string): Promise<IResponse>;
    checkFolio(folio: string): Promise<IResponse>;
}
