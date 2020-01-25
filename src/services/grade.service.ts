import { Injectable, Inject } from "@nestjs/common";
import { Model, Types } from "mongoose";
import { IGrade } from "src/interfaces/grade.interface";

@Injectable()
export class GradeService {
  constructor(
    @Inject("GRADE_MODEL")
    private readonly gradeModel: Model<IGrade>
  ) {}

  async findAll(): Promise<IGrade[]> {
    return await this.gradeModel.find().exec();
  }

  public async findById(id: string): Promise<IGrade> {
    return await this.gradeModel.findById(id).exec();
  }

  async findAllInSchool(schoolId: string): Promise<IGrade[]> {
    return await this.gradeModel
      .find({
        school: Types.ObjectId(schoolId)
      })
      .exec();
  }
  async findAllInSubject(schoolId: string): Promise<IGrade[]> {
    return await this.gradeModel
      .find({
        subject: Types.ObjectId(schoolId)
      })
      .populate("student")
      .exec();
  }

  async findAllInStudent(studentId: string): Promise<IGrade[]> {
    return await this.gradeModel
      .find({
        student: Types.ObjectId(studentId)
      })
      .populate("subject")
      .exec();
  }

  public async createOneOrMany(
    grade: IGrade | IGrade[]
  ): Promise<IGrade | IGrade[]> {
    return await this.gradeModel.create(grade);
  }

  public async updateCreateOne(id: string, grade: IGrade) {
    return await this.gradeModel
      .findByIdAndUpdate(id, grade, {
        new: true,
        runValidators: true,
        upsert: true
      })
      .exec();
  }

  public async updateMany(conditions: IGrade, newValues: IGrade) {
    return await this.gradeModel
      .updateMany(conditions, { $set: newValues })
      .exec();
  }

  public async pullMany(conditions: IGrade, pullProperties: IGrade) {
    return await this.gradeModel
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
    return await this.gradeModel
      .findById(id)
      .exec()
      .then((document: IGrade) => {
        document.remove();
      });
  }

  public async deleteMany(conditions: IGrade) {
    return await this.gradeModel
      .find(conditions)
      .exec()
      .then((documents: IGrade[]) => {
        return documents.forEach(document => {
          document.remove();
        });
      });
  }
  public async deleteAll() {
    return await this.gradeModel.deleteMany({}).exec();
  }
}
