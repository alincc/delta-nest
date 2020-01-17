import { Module } from "@nestjs/common";
import { GroupModule } from "./group/group.module";
import { StudentModule } from "./student/student.module";
import { PrincipalModule } from "./principal/principal.module";
import { FlightModule } from "./flight/flight.module";
import { GradeModule } from "./grade/grade.module";
import { PaymentModule } from "./payment/payment.module";
import { SchoolModule } from "./school/school.module";
import { SubjectModule } from "./subject/subject.module";
import { ProgramModule } from "./program/program.module";

@Module({
  imports: [
    GroupModule,
    StudentModule,
    PrincipalModule,
    FlightModule,
    GradeModule,
    PaymentModule,
    SchoolModule,
    SubjectModule,
    ProgramModule
  ],
  exports: [
    GroupModule,
    StudentModule,
    PrincipalModule,
    FlightModule,
    GradeModule,
    PaymentModule,
    SchoolModule,
    SubjectModule,
    ProgramModule
  ]
})
export class RoutesModule {}
