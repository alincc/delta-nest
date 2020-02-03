import { Injectable } from "@nestjs/common";
import { IUser } from "src/interfaces/user.interface";
import { ISchool } from "src/interfaces/school.interface";
import { UserService } from "src/services/user.service";
import { SchoolService } from "src/services/school.service";

import { IResponse } from "src/interfaces/response.interface";

import * as _ from "lodash";

@Injectable()
export class SchoolControllerService {
  constructor(
    private readonly userService: UserService,
    private readonly schoolService: SchoolService
  ) {}

  public async findAll(): Promise<IResponse> {
    return this.schoolService.findAll().then((document: ISchool[]) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Schools Found",
        count: document.length,
        data: document
      };
    });
  }

  public async findAllInPrincipal(principalId: string): Promise<IResponse> {
    return this.schoolService
      .findAllInPrincipal(principalId)
      .then((document: ISchool[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Schools Found",
          count: document.length,
          data: document
        };
      });
  }

  public async findById(id: string): Promise<IResponse> {
    return this.schoolService.findById(id).then((document: ISchool) => {
      return {
        errors: false,
        statusCode: 200,
        message: "School Found",
        data: document
      };
    });
  }

  public async createOne(school: ISchool): Promise<IResponse> {
    return this.schoolService
      .createOneOrMany(school)
      .then((document: ISchool) => {
        return {
          errors: false,
          statusCode: 201,
          message: "School Created",
          data: document
        };
      });
  }

  public async updateOne(id: string, school: ISchool): Promise<IResponse> {
    const sanitizedSchool = _.omit(school, [
      "_id",
      "flights",
      "grades",
      "groups",
      "payments",
      "principals",
      "programs",
      "students",
      "subjects"
    ]);

    return this.schoolService
      .updateCreateOne(id, sanitizedSchool as ISchool)
      .then((document: any) => {
        document as ISchool;
        return {
          errors: false,
          statusCode: 200,
          message: "School Updated",
          data: document
        };
      });
  }

  public async deleteOne(id: string): Promise<IResponse> {
    return this.schoolService.deleteOne(id).then(() => {
      return {
        errors: false,
        statusCode: 200,
        message: "School deleted",
        data: null
      };
    });
  }
}
