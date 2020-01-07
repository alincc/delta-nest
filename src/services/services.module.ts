import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { FlightService } from "./flight.service";
import { GradeService } from "./grade.service";
import { GroupService } from "./group.service";
import { PaymentService } from "./payment.service";
import { PrincipalService } from "./principal.service";
import { SchoolService } from "./school.service";
import { StudentService } from "./student.service";
import { SubjectService } from "./subject.service";

@Module({
  imports: [DatabaseModule],
  providers: [
    FlightService,
    GradeService,
    GroupService,
    PaymentService,
    PrincipalService,
    SchoolService,
    StudentService,
    SubjectService
  ],
  exports: [
    FlightService,
    GradeService,
    GroupService,
    PaymentService,
    PrincipalService,
    SchoolService,
    StudentService,
    SubjectService
  ]
})
export class ServicesModule {}
