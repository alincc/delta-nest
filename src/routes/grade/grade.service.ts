import { Injectable } from "@nestjs/common";

import { IResponse } from "src/interfaces/response.interface";

import * as _ from "lodash";
import { GradeService } from "src/services/grade.service";
import { IGrade } from "src/interfaces/grade.interface";
import { Types } from "mongoose";

@Injectable()
export class GradeControllerService {
  constructor(private readonly gradeService: GradeService) {}

  public async findAll(): Promise<IResponse> {
    return this.gradeService.findAll().then((document: IGrade[]) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Grades Found",
        count: document.length,
        data: document
      };
    });
  }

  public async findAllInSchool(schoolId: string): Promise<IResponse> {
    return this.gradeService
      .findAllInSchool(schoolId)
      .then((document: IGrade[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Grades Found",
          count: document.length,
          data: document
        };
      });
  }

  public async findAllInSubject(schoolId: string): Promise<IResponse> {
    return this.gradeService
      .findAllInSubject(schoolId)
      .then((document: IGrade[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Grades Found",
          count: document.length,
          data: document
        };
      });
  }

  public async findAllInStudent(studentId: string): Promise<IResponse> {
    return this.gradeService
      .findAllInStudent(studentId)
      .then((document: IGrade[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Grades Found",
          count: document.length,
          data: document
        };
      });
  }
  public async findById(id: string): Promise<IResponse> {
    return this.gradeService.findById(id).then((document: IGrade) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Grade Found",
        data: document
      };
    });
  }

  public async createOne(grade: IGrade): Promise<IResponse> {
    return this.gradeService.createOneOrMany(grade).then((document: IGrade) => {
      return {
        errors: false,
        statusCode: 201,
        message: "Grade Created",
        data: document
      };
    });
  }

  public async updateOne(id: string, grade: IGrade): Promise<IResponse> {
    const sanitizedGrade = _.omit(grade, [
      "_id",
      "student",
      "subject",
      "school"
    ]);

    return this.gradeService
      .updateCreateOne(id, sanitizedGrade as IGrade)
      .then((document: any) => {
        document as IGrade;
        return {
          errors: false,
          statusCode: 200,
          message: "Grade Updated",
          data: document
        };
      });
  }

  public async deleteOne(id: string): Promise<IResponse> {
    return this.gradeService.deleteOne(id).then(() => {
      return {
        errors: false,
        statusCode: 200,
        message: "Grade deleted",
        data: null
      };
    });
  }
}
