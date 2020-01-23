import { Injectable, Inject } from "@nestjs/common";
import { ISubject } from "src/interfaces/subject.iterface";
import { Model, Types } from "mongoose";

@Injectable()
export class SubjectService {
  constructor(
    @Inject("SUBJECT_MODEL")
    private readonly subjectModel: Model<ISubject>
  ) {}

  async findAll(): Promise<ISubject[]> {
    return await this.subjectModel.find().exec();
  }

  async findAllInSchool(schoolId: string): Promise<ISubject[]> {
    return await this.subjectModel
      .find({
        school: Types.ObjectId(schoolId)
      })
      .exec();
  }

  async findAllInProgram(programId: string): Promise<ISubject[]> {
    return await this.subjectModel
      .find({
        programs: Types.ObjectId(programId)
      })
      .exec();
  }
  public async findById(id: string): Promise<ISubject> {
    return await this.subjectModel.findById(id).exec();
  }

  public async findOne(folio: string): Promise<ISubject> {
    return await this.subjectModel.findOne({ folio }).exec();
  }

  public async createOneOrMany(
    subject: ISubject | ISubject[]
  ): Promise<ISubject | ISubject[]> {
    return await this.subjectModel.create(subject);
  }

  public async updateCreateOne(id: string, subject: ISubject) {
    return await this.subjectModel
      .findByIdAndUpdate(id, subject, {
        new: true,
        runValidators: true,
        upsert: true
      })
      .exec();
  }

  public async updateMany(conditions: ISubject, newValues: ISubject) {
    return await this.subjectModel
      .updateMany(conditions, { $set: newValues })
      .exec();
  }

  public async pullMany(conditions: ISubject, pullProperties: ISubject) {
    return await this.subjectModel
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
    return await this.subjectModel
      .findById(id)
      .exec()
      .then((document: ISubject) => {
        document.remove();
      });
  }

  public async deleteMany(conditions: ISubject) {
    return await this.subjectModel
      .find(conditions)
      .exec()
      .then((documents: ISubject[]) => {
        return documents.forEach(document => {
          document.remove();
        });
      });
  }

  public async deleteAll() {
    return await this.subjectModel.deleteMany({}).exec();
  }
}
