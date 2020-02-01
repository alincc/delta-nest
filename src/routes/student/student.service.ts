import { Injectable } from "@nestjs/common";
import { IUser } from "src/interfaces/user.interface";
import { SchoolService } from "src/services/school.service";

import { IResponse } from "src/interfaces/response.interface";

import * as _ from "lodash";
import { UserService } from "src/services/user.service";

@Injectable()
export class StudentControllerService {
  constructor(
    private readonly schoolService: SchoolService,
    private readonly userService: UserService
  ) {}

  public async findAll(): Promise<IResponse> {
    return this.userService.findAll().then((document: IUser[]) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Users Found",
        count: document.length,
        data: document
      };
    });
  }

  public async findAllInSchool(
    schoolId: string,
    flags?: { graduated?: boolean }
  ): Promise<IResponse> {
    return this.userService
      .findAllInSchool({ ...{ school: schoolId }, ...flags })
      .then((document: IUser[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Users Found",
          count: document.length,
          data: document
        };
      });
  }

  public async findAllInGroup(groupId: string): Promise<IResponse> {
    return this.userService
      .findAllInGroup(groupId)
      .then((document: IUser[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Users Found",
          count: document.length,
          data: document
        };
      });
  }

  public async findById(id: string): Promise<IResponse> {
    return this.userService.findById(id).then((document: IUser) => {
      return {
        errors: false,
        statusCode: 200,
        message: "User Found",
        data: document
      };
    });
  }

  public async createOne(student: IUser): Promise<IResponse> {
    return this.userService.createOneOrMany(student).then((document: IUser) => {
      return {
        errors: false,
        statusCode: 201,
        message: "User Created",
        data: document
      };
    });
  }

  public async updateOne(id: string, user: IUser): Promise<IResponse> {
    const sanitizedUser = _.omit(user, [
      "role",
      "flights",
      "grades",
      "group",
      "payments",
      "program",
      "schools"
    ]);

    return this.userService
      .updateCreateOne(id, sanitizedUser)
      .then((document: any) => {
        document as IUser;
        return {
          errors: false,
          statusCode: 200,
          message: "User Updated",
          data: document
        };
      });
  }

  public async deleteOne(id: string): Promise<IResponse> {
    return this.userService.deleteOne(id).then(() => {
      return {
        errors: false,
        statusCode: 200,
        message: "User deleted",
        data: null
      };
    });
  }

  public async deleteMany(conditions): Promise<IResponse> {
    return this.userService
      .deleteMany({ ...{ role: "STUDENT_ROLE" }, ...conditions })
      .then(() => {
        return {
          errors: false,
          statusCode: 200,
          message: "User deleted",
          data: null
        };
      });
  }
}
