import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { FlightService } from "./flight.service";
import { GradeService } from "./grade.service";
import { GroupService } from "./group.service";
import { PaymentService } from "./payment.service";
import { SchoolService } from "./school.service";
import { SubjectService } from "./subject.service";
import { UserService } from "./user.service";

@Module({
  imports: [DatabaseModule],
  providers: [
    FlightService,
    GradeService,
    GroupService,
    PaymentService,
    SchoolService,
    SubjectService,
    UserService
  ],
  exports: [
    FlightService,
    GradeService,
    GroupService,
    PaymentService,
    SchoolService,
    SubjectService,
    UserService
  ]
})
export class ServicesModule {}
