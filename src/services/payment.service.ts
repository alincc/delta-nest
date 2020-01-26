import { Injectable, Inject } from "@nestjs/common";
import { Model, Types } from "mongoose";
import { IPayment } from "src/interfaces/payment.interface";

@Injectable()
export class PaymentService {
  constructor(
    @Inject("PAYMENT_MODEL")
    private readonly paymentModel: Model<IPayment>
  ) {}

  async findAll(): Promise<IPayment[]> {
    return await this.paymentModel.find().exec();
  }

  public async findById(id: string): Promise<IPayment> {
    return await this.paymentModel.findById(id).exec();
  }

  async findAllInSchool(schoolId: string): Promise<IPayment[]> {
    return await this.paymentModel
      .find({
        schools: Types.ObjectId(schoolId)
      })
      .exec();
  }
  async findAllInStudent(studentId: string): Promise<IPayment[]> {
    return await this.paymentModel
      .find({
        student: Types.ObjectId(studentId)
      })
      .exec();
  }
  public async findOne(folio: string): Promise<IPayment> {
    return await this.paymentModel.findOne({ folio }).exec();
  }

  public async createOneOrMany(
    payment: IPayment | IPayment[]
  ): Promise<IPayment | IPayment[]> {
    return await this.paymentModel.create(payment);
  }

  public async updateCreateOne(id: string, payment: IPayment) {
    return await this.paymentModel
      .findByIdAndUpdate(id, payment, {
        new: true,
        runValidators: true,
        upsert: true
      })
      .exec();
  }

  public async updateMany(conditions: IPayment, newValues: IPayment) {
    return await this.paymentModel
      .updateMany(conditions, { $set: newValues })
      .exec();
  }

  public async deleteOne(id: string) {
    return await this.paymentModel
      .findById(id)
      .exec()
      .then((document: IPayment) => {
        document.remove();
      });
  }

  public async deleteMany(conditions: IPayment) {
    return await this.paymentModel
      .find(conditions)
      .exec()
      .then((documents: IPayment[]) => {
        return documents.forEach(document => {
          document.remove();
        });
      });
  }

  public async deleteAll() {
    return await this.paymentModel.deleteMany({}).exec();
  }
}
