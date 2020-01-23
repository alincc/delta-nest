import { Injectable } from "@nestjs/common";
import { ProgramService } from "src/services/program.service";
import { IResponse } from "src/interfaces/response.interface";
import { IProgram } from "src/interfaces/program.interface";

import * as _ from "lodash";
import { Types } from "mongoose";

@Injectable()
export class ProgramControllerService {
  constructor(private readonly programService: ProgramService) {}

  ////////////////////////////////////////
  //          FIND FUNCTIONS
  ////////////////////////////////////////
  public async findAll(): Promise<IResponse> {
    return this.programService.findAll().then((document: IProgram[]) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Programs Found",
        count: document.length,
        data: document
      };
    });
  }

  public async findAllInSchool(schoolId: string): Promise<IResponse> {
    return this.programService
      .findAllInSchool(schoolId)
      .then((document: IProgram[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Programs Found",
          count: document.length,
          data: document
        };
      });
  }

  public async findById(id: string): Promise<IResponse> {
    return this.programService.findById(id).then((document: IProgram) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Program Found",
        data: document
      };
    });
  }

  ////////////////////////////////////////
  //          CREATE FUNCTIONS
  ////////////////////////////////////////
  public async createOne(group: IProgram): Promise<IResponse> {
    return this.programService
      .createOneOrMany(group)
      .then((document: IProgram) => {
        return {
          errors: false,
          statusCode: 201,
          message: "Program Created",
          data: document
        };
      });
  }

  ////////////////////////////////////////
  //          UPDATE FUNCTIONS
  ////////////////////////////////////////
  public async updateOne(id: string, group: IProgram): Promise<IResponse> {
    const sanitizedGroup = _.omit(group, ["school", "subjects"]);

    return this.programService
      .updateCreateOne(id, sanitizedGroup)
      .then((document: any) => {
        document as IProgram;
        return {
          errors: false,
          statusCode: 200,
          message: "Program Updated",
          data: document
        };
      });
  }

  public async addSubject(id: string, subjectId: string): Promise<IResponse> {
    let program: IProgram = { subjects: Types.ObjectId(subjectId) } as IProgram;
    return this.programService.addChild(id, program).then((document: any) => {
      document as IProgram;
      return {
        errors: false,
        statusCode: 200,
        message: "Program Updated",
        data: document
      };
    });
  }

  public async removeSubject(
    id: string,
    subjectId: string
  ): Promise<IResponse> {
    let program: IProgram = { subjects: Types.ObjectId(subjectId) } as IProgram;
    return this.programService
      .removeChild(id, program)
      .then((document: any) => {
        document as IProgram;
        return {
          errors: false,
          statusCode: 200,
          message: "Program Updated",
          data: document
        };
      });
  }

  ////////////////////////////////////////
  //          DELETE FUNCTIONS
  ////////////////////////////////////////
  public async deleteOne(id: string): Promise<IResponse> {
    return this.programService.deleteOne(id).then(() => {
      return {
        errors: false,
        statusCode: 200,
        message: "Program deleted",
        data: null
      };
    });
  }

  ////////////////////////////////////////
  //          VALIDATION FUNCTIONS
  ////////////////////////////////////////
  public async checkFolio(folio: string): Promise<IResponse> {
    return this.programService.findOne(folio).then((document: IProgram) => {
      if (!document) {
        throw new Error();
      }
      return {
        errors: false,
        statusCode: 200,
        message: "Program Found",
        data: document
      };
    });
  }
}
