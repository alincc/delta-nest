import { Injectable } from "@nestjs/common";
import { IUser } from "src/interfaces/user.interface";
import { ISchool } from "src/interfaces/school.interface";
import { UserService } from "src/services/user.service";
import { SchoolService } from "src/services/school.service";

import * as _ from "lodash";
import { IResponse } from "src/interfaces/response.interface";
import { FlightService } from "src/services/flight.service";
import { GradeService } from "src/services/grade.service";
import { PaymentService } from "src/services/payment.service";
import { SubjectService } from "src/services/subject.service";
import { Types } from "mongoose";
import { GroupService } from "src/services/group.service";
import { IGroup } from "src/interfaces/group.interface";
import { IGrade } from "src/interfaces/grade.interface";
import { IFlight } from "src/interfaces/flight.interface";
import { ProgramService } from "src/services/program.service";
import { IProgram } from "src/interfaces/program.interface";
import { IPayment } from "src/interfaces/payment.interface";
import { ISubject } from "src/interfaces/subject.iterface";

@Injectable()
export class SchoolControllerService {
  constructor(
    private readonly userService: UserService,
    private readonly schoolService: SchoolService,
    private readonly flightService: FlightService,
    private readonly gradeService: GradeService,
    private readonly groupService: GroupService,
    private readonly programService: ProgramService,
    private readonly paymentService: PaymentService,
    private readonly subjectService: SubjectService
  ) {}

  public async findAll(): Promise<IResponse> {
    return this.schoolService.findAll().then((document: ISchool[]) => {
      return {
        errors: false,
        statusCode: 201,
        message: "Schools Found",
        data: { count: document.length },
        ...document
      };
    });
  }

  public async findAllInPrincipal(principalId: string): Promise<IResponse> {
    return this.schoolService
      .findAllInPrincipal(principalId)
      .then((document: ISchool[]) => {
        return {
          errors: false,
          statusCode: 201,
          message: "Schools Found",
          data: { count: document.length },
          ...document
        };
      });
  }

  public async findById(id: string): Promise<IResponse> {
    return this.schoolService.findById(id).then((document: ISchool) => {
      return {
        errors: false,
        statusCode: 201,
        message: "School Found",
        data: document
      };
    });
  }

  public async createOne(
    principal: IUser,
    school: ISchool
  ): Promise<IResponse> {
    school.principals = [principal._id];

    return this.schoolService
      .createOneOrMany(school)
      .then((document: ISchool) => {
        principal.schools.push(document._id);
        return this.userService.updateCreateOne(principal._id, principal);
      })
      .then((document: any) => {
        document as IUser;
        let school = _.sortBy(document.schools, "date")[0];

        return {
          errors: false,
          statusCode: 201,
          message: "School Created",
          data: school
        };
      });
  }

  public async updateOne(id: string, school: ISchool): Promise<IResponse> {
    const sanitizedSchool = _.omit(school, [
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
      .updateCreateOne(id, sanitizedSchool)
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
    return this.userService
      .pullMany(
        { schools: [Types.ObjectId(id)], role: "PRINCIPAL_ROLE" } as IUser,
        { schools: [Types.ObjectId(id)] } as IUser
      )
      .then(() => {
        return this.schoolService.deleteOne(id);
      })
      .then(() => {
        return this.flightService.deleteMany({
          school: Types.ObjectId(id)
        } as IFlight);
      })
      .then(() => {
        return this.paymentService.deleteMany({
          school: Types.ObjectId(id)
        } as IPayment);
      })
      .then(() => {
        return this.groupService.deleteMany({
          school: Types.ObjectId(id)
        } as IGroup);
      })
      .then(() => {
        return this.userService.deleteMany({
          schools: [Types.ObjectId(id)],
          role: "STUDENT_ROLE"
        } as IUser);
      })
      .then(() => {
        return this.programService.deleteMany({
          school: Types.ObjectId(id)
        } as IProgram);
      })
      .then(() => {
        return this.subjectService.deleteMany({
          school: Types.ObjectId(id)
        } as ISubject);
      })
      .then(() => {
        return this.gradeService.deleteMany({
          school: Types.ObjectId(id)
        } as IGrade);
      })
      .then(() => {
        return {
          errors: false,
          statusCode: 200,
          message: "School deleted",
          data: null
        };
      });
  }
}
