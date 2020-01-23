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
        school: Types.ObjectId(schoolId)
      })
      .exec();
  }

  public async findById(id: string): Promise<IProgram> {
    return await this.programModel.findById(id).exec();
  }

  public async findOne(folio: string): Promise<IProgram> {
    return await this.programModel.findOne({ folio }).exec();
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

  public async addChild(id: string, pushProperties: { subjects?: any }) {
    return await this.programModel.findOneAndUpdate(
      { _id: Types.ObjectId(id) },
      {
        $push: pushProperties
      },
      { new: true }
    );
  }

  public async removeChild(id: string, pullProperties: { subjects?: any }) {
    return await this.programModel
      .findOneAndUpdate(
        { _id: Types.ObjectId(id) },
        {
          $pull: pullProperties
        },
        { new: true }
      )
      .exec();
  }

  public async deleteOne(id: string) {
    return await this.programModel
      .findById(id)
      .exec()
      .then((document: IProgram) => {
        document.remove();
      });
  }

  public async deleteMany(conditions: IProgram) {
    return await this.programModel
      .find(conditions)
      .exec()
      .then((documents: IProgram[]) => {
        return documents.forEach(document => {
          document.remove();
        });
      });
  }

  public async deleteAll() {
    return await this.programModel.deleteMany({}).exec();
  }
}
