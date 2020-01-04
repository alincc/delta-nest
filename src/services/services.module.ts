import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { GroupService } from './groups.service';
import { UsersService } from './users.service';
import { FlightService } from './flights.service';
import { SubjectService } from './subjects.service';
import { DatabaseModule } from 'src/database/database.module';
import { SchoolsService } from './schools.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    PaymentsService,
    GroupService,
    UsersService,
    SchoolsService,
    FlightService,
    SubjectService,
  ],
  exports: [
    PaymentsService,
    GroupService,
    UsersService,
    SchoolsService,
    FlightService,
    SubjectService,
  ],
})
export class ServicesModule {}
