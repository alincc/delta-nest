import { Injectable, Inject } from "@nestjs/common";
import { Model, Types } from "mongoose";
import { IUser } from "src/interfaces/user.interface";

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_MODEL")
    private readonly userModel: Model<IUser>
  ) {}

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
  }

  async findAllInSchool(schoolId: string): Promise<IUser[]> {
    return await this.userModel
      .find({
        schools: Types.ObjectId(schoolId)
      })
      .exec();
  }

  public async findById(id: string): Promise<IUser> {
    return await this.userModel.findById(id).exec();
  }

  public async findOne(username: string): Promise<IUser> {
    return await this.userModel.findOne({ username }).exec();
  }

  public async findByIdAndRole(id: string, role: string): Promise<IUser> {
    return await this.userModel
      .findOne({ _id: Types.ObjectId(id), role })
      .exec();
  }

  public async findByUsername(username: string): Promise<IUser> {
    return await this.userModel.findOne({ username: username }).exec();
  }

  public async createOneOrMany(
    user: IUser | IUser[]
  ): Promise<IUser | IUser[]> {
    return await this.userModel.create(user);
  }

  public async updateCreateOne(id: string, user: IUser) {
    return await this.userModel
      .findByIdAndUpdate(id, user, {
        new: true,
        runValidators: true,
        upsert: true
      })
      .populate("schools")
      .exec();
  }

  public async updateMany(conditions: IUser, newValues: IUser) {
    return await this.userModel
      .updateMany(conditions, { $set: newValues })
      .exec();
  }

  public async pullMany(conditions: IUser, pullProperties: IUser) {
    return await this.userModel
      .findOneAndUpdate(
        conditions,
        {
          $pullAll: pullProperties
        },
        { new: true }
      )
      .exec();
  }

  public async deleteOne(id: string) {
    return await this.userModel
      .findById(id)
      .exec()
      .then((document: IUser) => {
        document.remove();
      });
  }

  public async deleteMany(conditions: IUser) {
    return await this.userModel
      .find(conditions)
      .exec()
      .then((documents: IUser[]) => {
        return documents.forEach(document => {
          document.remove();
        });
      });
  }
}
