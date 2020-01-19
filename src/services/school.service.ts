import { Injectable, Inject } from "@nestjs/common";
import { Types, Model } from "mongoose";
import { ISchool } from "src/interfaces/school.interface";

@Injectable()
export class SchoolService {
  constructor(
    @Inject("SCHOOL_MODEL")
    private readonly schoolModel: Model<ISchool>
  ) {}

  async findAll(): Promise<ISchool[]> {
    return await this.schoolModel.find().exec();
  }

  public async findAllInPrincipal(principalId): Promise<ISchool[]> {
    return await this.schoolModel.find({
      principals: Types.ObjectId(principalId)
    });
  }

  public async findById(id: string): Promise<ISchool> {
    return await await this.schoolModel
      .findById(id)
      .populate({ path: "principals", select: "-password" })
      .exec();
  }

  public async findOne(name: string): Promise<ISchool> {
    return await this.schoolModel.findOne({ name }).exec();
  }

  public async createOneOrMany(
    school: ISchool | ISchool[]
  ): Promise<ISchool | ISchool[]> {
    return await this.schoolModel.create(school);
  }

  public async updateCreateOne(id: string, school: ISchool | { $push: any }) {
    return await this.schoolModel
      .findByIdAndUpdate(id, school, {
        new: true,
        runValidators: true,
        upsert: true
      })
      .exec();
  }

  public async updateMany(conditions: ISchool, newValues: ISchool) {
    return await this.schoolModel
      .updateMany(conditions, { $set: newValues })
      .exec();
  }

  public async deleteOne(id: string) {
    return await this.schoolModel
      .findById(id)
      .exec()
      .then((document: ISchool) => {
        document.remove();
      });
  }
}
