import { Injectable } from "@nestjs/common";
import { IUser } from "src/interfaces/user.interface";
import { UserService } from "src/services/user.service";

import { IResponse } from "src/interfaces/response.interface";

import * as _ from "lodash";
import { GroupService } from "src/services/group.service";
import { SchoolService } from "src/services/school.service";

@Injectable()
export class PrincipalControllerService {
  constructor(
    private readonly schoolService: SchoolService,
    private readonly groupService: GroupService,
    private readonly userService: UserService
  ) {}

  public async findAll(): Promise<IResponse> {
    return this.userService.findAll().then((document: IUser[]) => {
      return {
        errors: false,
        statusCode: 201,
        message: "Users Found",
        data: { count: document.length },
        ...document
      };
    });
  }

  public async findAllInSchool(schoolId: string): Promise<IResponse> {
    return this.userService
      .findAllInSchool(schoolId)
      .then((document: IUser[]) => {
        return {
          errors: false,
          statusCode: 201,
          message: "Users Found",
          data: { count: document.length },
          ...document
        };
      });
  }

  public async findById(id: string): Promise<IResponse> {
    return this.userService.findById(id).then((document: IUser) => {
      return {
        errors: false,
        statusCode: 201,
        message: "User Found",
        data: document
      };
    });
  }

  public async createOne(principal: IUser, user: IUser): Promise<IResponse> {
    const created = (await this.userService.createOneOrMany(user)) as IUser;
    const schoolId = principal.schools[0].toString();

    return this.schoolService
      .updateCreateOne(schoolId, {
        $push: { principals: created._id }
      })
      .then(() => {
        return {
          errors: false,
          statusCode: 201,
          message: "User Created",
          data: created
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
