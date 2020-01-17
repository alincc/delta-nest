import { Injectable } from "@nestjs/common";
import { IUser } from "src/interfaces/user.interface";
import { SchoolService } from "src/services/school.service";

import { IResponse } from "src/interfaces/response.interface";
import { GroupService } from "src/services/group.service";
import { IGroup } from "src/interfaces/group.interface";

import * as _ from "lodash";

@Injectable()
export class GroupControllerService {
  constructor(
    private readonly schoolService: SchoolService,
    private readonly groupService: GroupService
  ) {}

  public async findAll(): Promise<IResponse> {
    return this.groupService.findAll().then((document: IGroup[]) => {
      return {
        errors: false,
        statusCode: 201,
        message: "Groups Found",
        data: { count: document.length },
        ...document
      };
    });
  }

  public async findAllInSchool(schoolId: string): Promise<IResponse> {
    return this.groupService
      .findAllInSchool(schoolId)
      .then((document: IGroup[]) => {
        return {
          errors: false,
          statusCode: 201,
          message: "Groups Found",
          data: { count: document.length },
          ...document
        };
      });
  }

  public async findById(id: string): Promise<IResponse> {
    return this.groupService.findById(id).then((document: IGroup) => {
      return {
        errors: false,
        statusCode: 201,
        message: "Group Found",
        data: document
      };
    });
  }

  public async createOne(principal: IUser, group: IGroup): Promise<IResponse> {
    const created = (await this.groupService.createOneOrMany(group)) as IGroup;
    const schoolId = principal.schools[0].toString();

    return this.schoolService
      .updateCreateOne(schoolId, {
        $push: { groups: created._id }
      })
      .then(() => {
        return {
          errors: false,
          statusCode: 201,
          message: "Group Created",
          data: created
        };
      });
  }

  public async updateOne(id: string, group: IGroup): Promise<IResponse> {
    const sanitizedGroup = _.omit(group, ["school", "members"]);

    return this.groupService
      .updateCreateOne(id, sanitizedGroup)
      .then((document: any) => {
        document as IGroup;
        return {
          errors: false,
          statusCode: 200,
          message: "Group Updated",
          data: document
        };
      });
  }

  public async deleteOne(id: string): Promise<IResponse> {
    return this.groupService.deleteOne(id).then(() => {
      return {
        errors: false,
        statusCode: 200,
        message: "Group deleted",
        data: null
      };
    });
  }
}
