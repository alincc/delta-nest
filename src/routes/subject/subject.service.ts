import { Injectable } from "@nestjs/common";

import { IResponse } from "src/interfaces/response.interface";
import { SubjectService } from "src/services/subject.service";
import { ISubject } from "src/interfaces/subject.iterface";

import * as _ from "lodash";

@Injectable()
export class SubjectControllerService {
  constructor(private readonly subjectService: SubjectService) {}

  public async findAll(): Promise<IResponse> {
    return this.subjectService.findAll().then((document: ISubject[]) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Subjects Found",
        count: document.length,
        data: document
      };
    });
  }

  public async findAllInSchool(schoolId: string): Promise<IResponse> {
    return this.subjectService
      .findAllInSchool(schoolId)
      .then((document: ISubject[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Subjects Found",
          count: document.length,
          data: document
        };
      });
  }

  public async findAllInProgram(programId: string): Promise<IResponse> {
    return this.subjectService
      .findAllInProgram(programId)
      .then((document: ISubject[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Subjects Found",
          count: document.length,
          data: document
        };
      });
  }

  public async checkFolio(folio: string): Promise<IResponse> {
    return this.subjectService.findOne(folio).then((document: ISubject) => {
      if (!document) {
        throw new Error();
      }
      return {
        errors: false,
        statusCode: 200,
        message: "Subject Found",
        data: document
      };
    });
  }

  public async findById(id: string): Promise<IResponse> {
    return this.subjectService.findById(id).then((document: ISubject) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Subject Found",
        data: document
      };
    });
  }

  public async createOne(subject: ISubject): Promise<IResponse> {
    return this.subjectService
      .createOneOrMany(subject)
      .then((document: ISubject) => {
        return {
          errors: false,
          statusCode: 201,
          message: "Subject Created",
          data: document
        };
      });
  }

  public async updateOne(id: string, subject: ISubject): Promise<IResponse> {
    const sanitizedFlight = _.omit(subject, ["grades", "school", "programs"]);

    return this.subjectService
      .updateCreateOne(id, sanitizedFlight)
      .then((document: any) => {
        document as ISubject;
        return {
          errors: false,
          statusCode: 200,
          message: "Subject Updated",
          data: document
        };
      });
  }

  public async deleteOne(id: string): Promise<IResponse> {
    return this.subjectService.deleteOne(id).then(() => {
      return {
        errors: false,
        statusCode: 200,
        message: "Subject deleted",
        data: null
      };
    });
  }
}
