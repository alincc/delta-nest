import { Module } from '@nestjs/common';
import { PaymentsService } from './payment.service';
import { GroupService } from './group.service';
import { StudentService } from './student.service';
import { FlightService } from './flight.service';
import { SubjectService } from './subjects.service';
import { DatabaseModule } from 'src/database/database.module';
import { SchoolsService } from './schools.service';
import { PrincipalService } from './principal.service';
import { GradeService } from './grade.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    FlightService,
    GroupService,
    PaymentsService,
    PrincipalService,
    SchoolsService,
    StudentService,
    SubjectService,
    GradeService,
  ],
  exports: [
    FlightService,
    GroupService,
    PaymentsService,
    PrincipalService,
    SchoolsService,
    StudentService,
    SubjectService,
    GradeService,
  ],
})
export class ServicesModule {}
