import { Injectable } from "@nestjs/common";
import { IUser } from "src/interfaces/user.interface";
import { UserService } from "src/services/user.service";

import { IResponse } from "src/interfaces/response.interface";

import * as _ from "lodash";

@Injectable()
export class PrincipalControllerService {
  constructor(private readonly userService: UserService) {}

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

  public async findAllInSchool(schoolId: string): Promise<IResponse> {
    return this.userService
      .findAllInSchool(schoolId)
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

  public async findByIdAndRole(id: string): Promise<IResponse> {
    return this.userService
      .findByIdAndRole(id, "PRINCIPAL_ROLE")
      .then((document: IUser) => {
        return {
          errors: false,
          statusCode: 200,
          message: "User Found",
          data: document
        };
      });
  }

  public async createOne(user: IUser): Promise<IResponse> {
    return this.userService.createOneOrMany(user).then((document: IUser) => {
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
}
