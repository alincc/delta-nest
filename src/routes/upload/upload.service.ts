import { Injectable } from "@nestjs/common";

import { UserService } from "src/services/user.service";
import { GroupService } from "src/services/group.service";
import { SchoolService } from "src/services/school.service";
import { ProgramService } from "src/services/program.service";
import { SubjectService } from "src/services/subject.service";

import { ISchool } from "src/interfaces/school.interface";
import { IGroup } from "src/interfaces/group.interface";
import { IProgram } from "src/interfaces/program.interface";
import { ISubject } from "src/interfaces/subject.iterface";
import { IUser } from "src/interfaces/user.interface";

@Injectable()
export class UploadControllerService {
  constructor(
    private readonly userService: UserService,
    private readonly schoolService: SchoolService,
    private readonly groupService: GroupService,
    private readonly programService: ProgramService,
    private readonly subjectService: SubjectService
  ) {}

  public async updateAvatarUrl(param: any, avatarUrl) {
    let document;
    switch (param.parent) {
      case "principal":
      case "student":
        document = await this.userService.updateCreateOne(
          param.id,
          avatarUrl as IUser
        );
        break;
      case "school":
        document = await this.schoolService.updateCreateOne(
          param.id,
          avatarUrl as ISchool
        );
        break;
      case "group":
        document = await this.groupService.updateCreateOne(
          param.id,
          avatarUrl as IGroup
        );
        break;
      case "program":
        document = await this.programService.updateCreateOne(
          param.id,
          avatarUrl as IProgram
        );
        break;
      case "subject":
        document = await this.subjectService.updateCreateOne(
          param.id,
          avatarUrl as ISubject
        );
        break;
    }

    return new Promise((resolve, reject) => {
      if (document) {
        resolve({
          errors: false,
          statusCode: 201,
          message: "Avatar Uploaded",
          data: document
        });
      } else {
        reject(new Error("Upload failed"));
      }
    });
  }
}
