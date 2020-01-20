import { Injectable } from "@nestjs/common";
import { UserService } from "src/services/user.service";
import { SchoolService } from "src/services/school.service";
import { IUser } from "src/interfaces/user.interface";
import { FlightService } from "src/services/flight.service";
import { GradeService } from "src/services/grade.service";
import { GroupService } from "src/services/group.service";
import { PaymentService } from "src/services/payment.service";
import { ProgramService } from "src/services/program.service";
import { SubjectService } from "src/services/subject.service";
import { resolve } from "dns";
import { rejects } from "assert";
import { connection } from "mongoose";

@Injectable()
export class MaintenanceControllerService {
  constructor(
    private readonly userService: UserService,
    private readonly schoolService: SchoolService,
    private readonly flightService: FlightService,
    private readonly gradeService: GradeService,
    private readonly groupService: GroupService,
    private readonly paymentService: PaymentService,
    private readonly programService: ProgramService,
    private readonly subjectService: SubjectService
  ) {}

  public async resetDataBase() {
    return new Promise(async (resolve, reject) => {
      connection.dropDatabase(error => {
        error
          ? reject(error)
          : resolve({
              errors: false,
              statusCode: 200,
              message: "Database Deleted",
              data: null
            });
      });
    });
  }

  public async getCurrentState() {
    return new Promise(async (resolve, reject) => {
      const users = await this.userService.findAll();
      const schools = await this.schoolService.findAll();
      const flights = await this.flightService.findAll();
      const grades = await this.gradeService.findAll();
      const groups = await this.groupService.findAll();
      const payments = await this.paymentService.findAll();
      const programs = await this.programService.findAll();
      const subjects = await this.subjectService.findAll();

      users &&
      schools &&
      flights &&
      grades &&
      groups &&
      payments &&
      programs &&
      subjects
        ? resolve({
            errors: false,
            statusCode: 200,
            message: "All Found",
            data: {
              users,
              schools,
              flights,
              grades,
              groups,
              payments,
              programs,
              subjects
            }
          })
        : reject();
    });
  }
}
