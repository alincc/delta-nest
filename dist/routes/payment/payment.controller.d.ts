import { ReceiveGroupDto } from "src/dtos/receive-group.dto";
import { Response } from "express";
import { PaymentControllerService } from "./payment.service";
import { ReceivePaymentDto } from "src/dtos/receive-payment.dto";
export declare class PaymentController {
    private readonly paymentControllerService;
    constructor(paymentControllerService: PaymentControllerService);
    findAll(response: Response): Promise<Response>;
    findById(param: any, response: Response): Promise<Response>;
    createOne(payment: ReceivePaymentDto, response: Response): Promise<Response>;
    updateOne(param: any, group: ReceiveGroupDto, response: Response): void;
    deleteOne(param: any, response: Response): Promise<Response>;
    findAllInSchool(param: any, response: Response): Promise<Response>;
    findAllInStudent(param: any, response: Response): Promise<Response>;
    checkFolio(param: any, response: Response): Promise<Response>;
}
