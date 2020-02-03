import { Injectable } from "@nestjs/common";

import { IResponse } from "src/interfaces/response.interface";
import { PaymentService } from "src/services/payment.service";
import { IPayment } from "src/interfaces/payment.interface";

import * as _ from "lodash";

@Injectable()
export class PaymentControllerService {
  constructor(private readonly paymentService: PaymentService) {}

  public async findAll(): Promise<IResponse> {
    return this.paymentService.findAll().then((document: IPayment[]) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Payments Found",
        count: document.length,
        data: document
      };
    });
  }

  public async findAllInSchool(schoolId: string): Promise<IResponse> {
    return this.paymentService
      .findAllInSchool(schoolId)
      .then((document: IPayment[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Payments Found",
          count: document.length,
          data: document
        };
      });
  }

  public async findAllInStudent(studentId: string): Promise<IResponse> {
    return this.paymentService
      .findAllInStudent(studentId)
      .then((document: IPayment[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Payments Found",
          count: document.length,
          data: document
        };
      });
  }
  public async findById(id: string): Promise<IResponse> {
    return this.paymentService.findById(id).then((document: IPayment) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Payment Found",
        data: document
      };
    });
  }

  public async createOne(payment: IPayment): Promise<IResponse> {
    return this.paymentService
      .createOneOrMany(payment)
      .then((docuemnt: IPayment) => {
        return {
          errors: false,
          statusCode: 201,
          message: "Payment Created",
          data: docuemnt
        };
      });
  }

  public async updateOne(id: string, payment: IPayment): Promise<IResponse> {
    const sanitizedPayment = _.omit(payment, ["_id", "student", "school"]);

    return this.paymentService
      .updateCreateOne(id, sanitizedPayment as IPayment)
      .then((document: any) => {
        document as IPayment;
        return {
          errors: false,
          statusCode: 200,
          message: "Payment Updated",
          data: document
        };
      });
  }

  public async deleteOne(id: string): Promise<IResponse> {
    return this.paymentService.deleteOne(id).then(() => {
      return {
        errors: false,
        statusCode: 200,
        message: "Payment deleted",
        data: null
      };
    });
  }
  ////////////////////////////////////////
  //          VALIDATION FUNCTIONS
  ////////////////////////////////////////
  public async checkFolio(folio: string): Promise<IResponse> {
    return this.paymentService.findOne(folio).then((document: IPayment) => {
      if (!document) {
        throw new Error();
      }
      return {
        errors: false,
        statusCode: 200,
        message: "Program Found",
        data: document
      };
    });
  }
}
