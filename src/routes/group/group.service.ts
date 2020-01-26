import { Injectable } from "@nestjs/common";

import { IResponse } from "src/interfaces/response.interface";
import { GroupService } from "src/services/group.service";
import { IGroup } from "src/interfaces/group.interface";

import * as _ from "lodash";
import { Types } from "mongoose";

@Injectable()
export class GroupControllerService {
  constructor(private readonly groupService: GroupService) {}

  public async findAll(): Promise<IResponse> {
    return this.groupService.findAll().then((document: IGroup[]) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Groups Found",
        count: document.length,
        data: document
      };
    });
  }

  public async findAllInSchool(schoolId: string): Promise<IResponse> {
    return this.groupService
      .findAllInSchool(schoolId)
      .then((document: IGroup[]) => {
        return {
          errors: false,
          statusCode: 200,
          message: "Groups Found",
          count: document.length,
          data: document
        };
      });
  }

  public async findById(id: string): Promise<IResponse> {
    return this.groupService.findById(id).then((document: IGroup) => {
      return {
        errors: false,
        statusCode: 200,
        message: "Group Found",
        data: document
      };
    });
  }

  public async createOne(group: IGroup): Promise<IResponse> {
    return this.groupService.createOneOrMany(group).then((document: IGroup) => {
      return {
        errors: false,
        statusCode: 201,
        message: "Group Created",
        data: document
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

  public async addMember(id: string, studentId: string): Promise<IResponse> {
    return this.groupService
      .addChild(id, { members: Types.ObjectId(studentId) })
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

  public async removeMember(id: string, studentId: string): Promise<IResponse> {
    return this.groupService
      .removeChild(id, { members: Types.ObjectId(studentId) })
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
