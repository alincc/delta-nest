import { Injectable, Inject } from "@nestjs/common";
import { Model, Types } from "mongoose";
import { IGroup } from "src/interfaces/group.interface";

@Injectable()
export class GroupService {
  constructor(
    @Inject("GROUP_MODEL")
    private readonly groupModel: Model<IGroup>
  ) {}

  async findAll(): Promise<IGroup[]> {
    return await this.groupModel.find().exec();
  }

  public async findById(id: string): Promise<IGroup> {
    return await this.groupModel.findById(id).exec();
  }

  async findAllInSchool(schoolId: string): Promise<IGroup[]> {
    return await this.groupModel
      .find({
        school: Types.ObjectId(schoolId)
      })
      .exec();
  }

  public async findOne(name: string): Promise<IGroup> {
    return await this.groupModel.findOne({ name }).exec();
  }

  public async createOneOrMany(
    group: IGroup | IGroup[]
  ): Promise<IGroup | IGroup[]> {
    return await this.groupModel.create(group);
  }

  public async updateCreateOne(id: string, group: IGroup) {
    return await this.groupModel
      .findByIdAndUpdate(id, group, {
        new: true,
        runValidators: true,
        upsert: true
      })
      .exec();
  }

  public async updateMany(conditions: IGroup, newValues: IGroup) {
    return await this.groupModel
      .updateMany(conditions, { $set: newValues })
      .exec();
  }

  public async addChild(id: string, pushProperties: { members?: any }) {
    return await this.groupModel.findOneAndUpdate(
      { _id: Types.ObjectId(id) },
      {
        $push: pushProperties
      },
      { new: true }
    );
  }

  public async removeChild(id: string, pullProperties: { members?: any }) {
    return await this.groupModel
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
    return await this.groupModel
      .findById(id)
      .exec()
      .then((document: IGroup) => {
        document.remove();
      });
  }

  public async deleteMany(conditions: IGroup) {
    return await this.groupModel
      .find(conditions)
      .exec()
      .then((documents: IGroup[]) => {
        return documents.forEach(document => {
          document.remove();
        });
      });
  }

  public async deleteAll() {
    return await this.groupModel.deleteMany({}).exec();
  }
}
