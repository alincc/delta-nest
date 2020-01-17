import { Injectable, Inject } from "@nestjs/common";
import { Types, Model } from "mongoose";
import { IProgram } from "src/interfaces/program.interface";

@Injectable()
export class ProgramService {
  constructor(
    @Inject("PROGRAM_MODEL")
    private readonly programModel: Model<IProgram>
  ) {}

  async findAll(): Promise<IProgram[]> {
    return await this.programModel.find().exec();
  }

  async findAllInSchool(schoolId: string): Promise<IProgram[]> {
    return await this.programModel
      .find({
        schools: Types.ObjectId(schoolId)
      })
      .exec();
  }

  public async findById(id: string): Promise<IProgram> {
    return await this.programModel.findById(id).exec();
  }

  public async findOne(name: string): Promise<IProgram> {
    return await this.programModel.findOne({ name }).exec();
  }

  public async createOneOrMany(
    program: IProgram | IProgram[]
  ): Promise<IProgram | IProgram[]> {
    return await this.programModel.create(program);
  }

  public async updateCreateOne(id: string, program: IProgram) {
    return await this.programModel
      .findByIdAndUpdate(id, program, {
        new: true,
        runValidators: true,
        upsert: true
      })
      .exec();
  }

  public async updateMany(conditions: IProgram, newValues: IProgram) {
    return await this.programModel
      .updateMany(conditions, { $set: newValues })
      .exec();
  }

  public async pullMany(conditions: IProgram, pullProperties: IProgram) {
    return await this.programModel
      .findOneAndUpdate(
        conditions,
        {
          $pullAll: { pullProperties }
        },
        { new: true }
      )
      .exec();
  }

  public async deleteOne(id: string) {
    return await this.programModel
      .deleteOne({ _id: Types.ObjectId(id) })
      .exec();
  }

  public async deleteMany(conditions: IProgram) {
    return await this.programModel.deleteMany(conditions).exec();
  }
}
